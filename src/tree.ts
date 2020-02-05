export class Node<T>{
 constructor(public value :T, public children : Node<T>[] = []){}
 add(...n : Node<T>[]){
   n.forEach(a => this.children.push(a));
 }

 remove(...n : Node<T>[]){
    this.children = this.children.filter((v) => n.indexOf(v) !== -1);
 }

 map<V>(f : (arg0: Node<T>) => V,): V[]{
    return this.children.map(f);
 }

 reduce<V>(r : (arg0: Node<T> ,arg1 : V[]) =>V) : V{
    return r(this, this.children.map(n => n.reduce(r)));
 }

 toString() : string {
    return this.reduce((a,b) => `(${a.value}${a.children.length > 0 ? ' ': ''}${b.join(' ')})`);
 }

 static fromArray<T>(arr : any, op : (arg0: Node<T>,arg1:any,arg2:Number)=>void ,nv:T = null) : Node<T>{
    return arr.reduce((node,elm,index)=>{
        if(Array.isArray(elm))node.add(this.fromArray(elm,op,nv));
        else op(node,elm,index);

        return node;
    },new Node<T>(nv));
 }

 static fromBasicArray<T>(arr : any){
    return this.fromArray(arr,(node : Node<T>,elm : any,i:Number) => {
        if(i==0)node.value = elm;
        else node.add(new Node<T>(elm));
    });
 }
}