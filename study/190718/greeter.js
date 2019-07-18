// 使用类(class) es6特性 构造一个player类, 他有一个构造函数和公共属性
var Player = /** @class */ (function () {
    function Player(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Player;
}());
function greeter(person) {
    return "Hello! " + person.firstName + " " + person.lastName;
}
// let user = {
//   firstName: "Answer",
//   lastName: "Jiang"
// }; // 与Person内部结构相同 则兼容
var user = new Player("Allen", "Iverson");
document.body.innerHTML = greeter(user); // 函数式编程,低耦合
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Pink"] = 1] = "Pink";
})(Color || (Color = {}));
var c = Color.Blue;
var c1 = Color[1];
alert(c1);
