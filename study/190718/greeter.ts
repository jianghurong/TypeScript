// 使用类(class) es6特性 构造一个player类, 他有一个构造函数和公共属性
class Player { // 定义类
  fullName: string;
  constructor(public firstName, public lastName) {
    this.fullName = firstName + " " + lastName;
  }
}
// class Player 相当于
// function Player(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = firstName + " " + lastName;
// } // new Player(arg1, arg2);

// 使用接口(interface)描述一个有 firstName 和 lastName 的对象(定义对象属性类型)
// Java interface-定义接口 implements-实现接口
interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) { // 给person参数加类型注解
    return "Hello! " +　person.firstName + " " + person.lastName;
}
// let user = {
//   firstName: "Answer",
//   lastName: "Jiang"
// }; // 与Person内部结构相同 则兼容
let user = new Player("Allen", "Iverson");
document.body.innerHTML = greeter(user); // 函数式编程,低耦合

// enum Color{Blue, Pink}
// let c: Color = Color.Blue;
// let c1: String = Color[1];
// alert(c1);