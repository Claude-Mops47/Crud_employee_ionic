

export class Employee {
id:number;
operation:string;
firstName:string;
lastName:string;
emailId:string;
active:boolean;




setOperation(op:string):void{
    this.operation= op;
}
getName():String{
    return this.firstName;
}
setIdEmployee(i:number):void{
    this.id= i;
}
}
