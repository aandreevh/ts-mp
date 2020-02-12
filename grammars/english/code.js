const moo = require("moo");


const lexer = moo.compile( require("./lexer"));

 /*
 Cheat but can't do much as nearly is too closed in it's generation
 */
lexer.has = function() {return true;}


function getNextDayOfTheWeek(dayOfWeek, excludeToday = true, refDate = new Date()) {
    if (dayOfWeek < 0) return;
    refDate.setHours(0,0,0,0);
    refDate.setDate(refDate.getDate() + !!excludeToday + 
                    (dayOfWeek + 7 - refDate.getDay() - !!excludeToday) % 7);
    return refDate;
}

function addYear(date,val){
date.setFullYear(date.getYear()+val,date.getMonth(),date.getDate());
}


module.exports= {

     weekday : ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" ,"Friday" , "Saturday" ],
     weekdayshort : ["Sun", "Mon" , "Tue" , "Wed" , "Thu" ,"Fri" , "Sat" ],
     monthday : ["January" , "Febuary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"],
     monthdayshort : ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"],

    lexer,
    timeQ:function ([,[a]]){
        return a== null ? null : a.value},
    time0: function ([h,m,tz]){
        if(tz)tz = tz[1];
        if(m) m = m[1].value;
        h = h.value;
        if(tz && (tz === 'PM' || tz=== 'pm')) h=12 + h%12;
        return {h,m}
    },
    time: function([,,b]){
        return {value: b};
    },
    date1: function([d,,t]){
        d.setHours(t.value.h);
        d.setMinutes(t.value.m);
        d.setSeconds(0);
        return d;
    },
    date00: function([x]){
        const date  =new Date();
        if(x=='yesterday'){
            date.setDate((new Date()).getDate()-1);
        }else if (x=='tommorow'){
            date.setDate((new Date()).getDate()+1);   
        }
        return date;
        },
    date01: function([[v],,[d]]){
        let val = 0;
        if(v.value ==='last')val =-1;
        else if(v.value==='next') val=1;

        const date = new Date();

        if(d.value ==='day') date.setDate(date.getDate()+val);
        if(d.value ==='week') date.setDate(date.getDate()+7*val);
        if(d.value ==='year') addYear(date,val);
        if(d.value ==='month') date.setMonth(date.getMonth()+val);
        return date;
    },
    date02: function([v,month]){
        if (v) v= v[0][0].value;
        else v = 'this';
        const date = new Date();
        let val =0;
        if(v ==='last')val =-1;
        else if(v==='next') val=1;
        addYear(date,val);
        date.setMonth(month);
        return date;
    },
    date03: function([v,day]){
        if (v) v= v[0][0].value;
        else v = 'this';
        
        if(v === 'this'){
            return getNextDayOfTheWeek(day,false);
        }else if(v === 'next'){
            return getNextDayOfTheWeek(day,true);
        }else if (v === 'last'){
            const dd = getNextDayOfTheWeek(day,false);
             dd.setDate(dd.getDate()-7);
             return dd;
        }
        return date;
    },
    date04: function([a,,,b,c]){
        const date = new Date();
        date.setFullYear(date.getYear(),b,a.value);
        
        return date;
    },
    date : function([,,,,[v],,d]){
        d.setDate(d.getDate() + (v == 'after'? 1 : -1))
        return {value: d}
    }
}