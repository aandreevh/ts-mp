@{%
 const g = require("./code.js");
 const lexer = g.lexer;
%}


@lexer lexer

TimeQ ->  ("o'clock" %space):? ("AM" | "am" | "PM" | "pm") {%g.timeQ%}
Time0 ->  %number (((%space:? (":"|"."|"-"|"and") %space:?)| %space) %number):?  (%space TimeQ):? {%g.time0%}
Time -> "at" %space Time0 {%g.time%}

RelativeDay -> ("today" | "tommorow" | "yesterday") {%function ([[x]]) {return x;} %}
DayOfWeek -> ("Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" ) {% function ([[x],]){ return g.weekday.findIndex(e => x == e);} %}
    | ("Sun"| "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat") %space:? "." {% function ([[x],...zz]){return g.weekdayshort.findIndex(e => x == e);} %}
MonthOfYear -> ("January" | "Febuary" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December") {% function ([[x],,]){return g.monthday.findIndex(e => x == e);} %}
    | ("Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec") %space:? "." {% function ([[x],,]){return g.monthdayshort.findIndex(e => x == e);} %}
Date0 -> %number ("nd"|"st"|"th"):? %space MonthOfYear (%space %number (%space:? ("year"|"y")):?):? {%g.date04%}
    | (("next" | "last" | "this") %space):?  DayOfWeek {%g.date03%}
    | (("next"| "last" | "this") %space):? MonthOfYear {%g.date02%}
    | ("next" | "last" | "this") %space ("week" | "month" | "year" | "day") {%g.date01%}
    | RelativeDay {%g.date00%}
    | %string {%function ([x]){return new Date(x);}%}
    | Date2 {%function ([x]){return x;}%}
Date1 -> Date0 %space Time  {%g.date1%} 
    | Date0 {%function ([x]){return x;}%}
Date2 -> Period %space ("before"|"after") %space Date  {%g.date22%}
Date2 -> "after" %space Period {%g.date21%}
Date2 -> Period %space "ago" {%g.date20%}
Date ->  Date1 {%function ([x]){return {value:x};}%} 
    | "the" %space "day" %space ("after"|"before") %space Date1 {%g.date%} 
    | "now"  {%function(x){return {value:new Date()} ;}%}

TimeUnit -> ("minute"|"hour"|"day"|"week"|"month"|"year")  {%function([[x]]){return x.value}%}
    | ("minutes"|"hours"|"days"|"weeks"|"months"|"years")  {%function([[x]]){return x.value.slice(0,-1)}%}

Period -> Period1 {%function([x]) {return {value:x};}%}
Period1 -> Period2 (%space "and" %space):? Period1 {%function([x,,y]){return x.concat(y)}%} | Period2 {%function([[...x]]) {return x;}%}
Period2 -> Period2 %space Period3 {%function ([arr,,cur]) {return [...arr,cur]}%} | Period3
Period3 -> %number %space:? TimeUnit {%function ([u,,v]){return [u.value,v]}%}