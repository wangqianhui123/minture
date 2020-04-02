import React,{ Component } from 'react'
import {Text,View} from 'react-native'
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';

let num:number = 100;
let arr:Array<string> = ['1','2'];
let arr1:string[] = ['1','2'];
let obj:object = {name:'zhangsan'};
let obj1:{name:string} = {name:'zhangsan'};
//元组可以指定个数和类型的数组
let tupleArr:[string,number,boolean] = ['ss',1,false] ;
//枚举enum 
enum Lev {one,two,three};
let myLev:Lev = Lev.two;

let a:any = 'any type';

//接口
//属性接口：定义属性的个数以及类型
interface Course{
    title:string,
    intro:string,
    num?:number,
    [propName:string]:any
}

let hybrid:Course = {
    title:'hybrid',
    intro:'混合应用开发',
    name:100
}
//函数接口：定义参数的类型，返回值的类型。,参数名不一定一样，类型一样就行。
interface MyFunc{
    (params1:string):boolean
}

let fun:MyFunc = function(pa){
    return true;
}

//类接口:定义一个类里的属性及属性的类型
//implements 实现
interface User{
    name:string,
    age:number,
    pwd:string
}
class User1 implements User{
    name='zahngsan';
    age=20;
    pwd='123456'
}

//继承(关键字extends)
//接口继承接口
interface Person{
    name:string,
    age:number
}
interface Users extends Person{
    pwd:string
}
class User2 implements Users{
    name='zahngsan';
    age=20;
    pwd='123456'
}

//接口继承类
interface User3 extends User1{
    work:string
}
let user:User3={
    name:'zahngsan',
    age:30,
    pwd:'123456',
    work:'aa'
}
console.log(new User1())
//类不能继承接口，类实现接口

//类型断言：可以确定的指定一个值的类型
//形式：
//<Type>值 在jsx中不能用
//值 as 类型
interface Person1{
    name:string;
    age:number;
}

let user4 = {} as Person1;//具体内容不知道
user4.name='liu';
user4.age = 18;

//联合类型 或者 any类型
function getLength(p1:string|number):number{//传进去的参数可以是两种类型string或number，返回值类型是number,这时直接返回p1.length会报错，因为number类型没有length属性，使用断言保证p1是string类型

    return (p1 as string).length
}

//类定义
//es5
//创建一个Person类，有name和age属性，调用的时候传入
// function Person(name:string,age:number){
//     this.name=name;
//     this.age=age;
// }

// let user5=new Person('zhang',20);
// console.log(user5)

class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.age=age;
        this.name=name;
    }
}
let user5 = new Person('zang',18);

class Worker extends Person{
    static job:string = '程序员';//静态属性，其它的是实例属性
    constructor(job:string,name:string,age:number){
        super(name,age);//把继承的类的构造函数执行一遍
        //this.job=job;
    }
}
console.log(Worker.job)

//泛型
//泛型函数
function identity<T>(arg:T):T{
    return arg;
}
console.log(identity<string>('params1'))

//与any的区别,第一种情况泛型能保证参数类型和返回值类型一致，但是第二种情况any，参数类型和返回值类型无关
function getMsg(msg:any):any{
    return 'msg';
}
console.log(getMsg(100))

//泛型接口，只要参数、参数类型和返回值类型相同，就可以复用该接口
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = function(arg){
    return 100;
};

//泛型类
class AddData<T>{
    list:T[] = [];
    add(data:T):T[]{
        this.list.push(data);
        return this.list;
    }
}
let data1 = new AddData<number>()
data1.list.push(1)

//接口：定义调用组件时传的属性，取值规范；如果不传，会有提示。
interface Props{
    name:string
}
export default class MyTs extends Component<Props>{
    render(){
        return (
            <View>
                <Text>textInComponent{arr}</Text>
            </View>
        )
    }
}