import React,{ Component } from 'react'
import {Text,View} from 'react-native'

//装饰器其实就是一个函数，就是参数不一样，在函数里可以写一些新的逻辑
//包裹后面修饰的内容，将新的逻辑传递到被修饰的内容中去
//高阶组件--其实就是一个函数，就是装饰器
//@expr 语法其实是语法糖
function helloWord(target: any) {
    console.log('hello Word!');
}
@helloWord//调用装饰器
class HelloWordClass {

}
//带参数装饰器(装饰器工厂)
function addUrl(url:string){
    return function(target:any){
    target.prototype.url = url
}
}
@addUrl('http://www.baidu.com')
class HomeServer{
    getData(){
        console.log(this.url)
    }
}
//公有的，谁都可以调用，当声明自己的一个类的时候，用该装饰器来修饰，就会在这个类的原型上加上url属性
let home = new HomeServer();
home.getData()

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}		


function DefaultValue(value: string) {
    return function (target: any, propertyName: string) {
        target[propertyName] = value;
    }
}

class Hello {
    @DefaultValue("Hello") greeting: string;
}

console.log(new Hello().greeting);
export default class Desc extends Component{
    render(){
        return (
            <View>
                <Text>textInComponent</Text>
            </View>
        )
    }
}