// 首先讲解es6中的常考面试题目
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// // 在函数的原型对象上添加一个 getPosition 方法
// Point.prototype.getPosition = function () {
//   return '(' + this.x + ', ' + this.y + ')'
// }
// // 使用new操作符创建一个对象
// var p1 = new Point(2,3)
// var p2 = new Point(4,5)
// console.log(p1);
// console.log(p1.getPosition());
// console.log(p2.getPosition());

// 使用class改写上面的方法
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   getPosition() {
//     return `(${this.x} , ${this.y})`
//   }
// }

// const p1 = new Point(2, 3);
// // 实例对象通过 instanceof 方法寻找到 构造函数
// console.log(p1 instanceof Point);
// console.log(p1.getPosition());
// // 查看x是否是 p1对象上的自有属性
// console.log(p1.hasOwnProperty('x')); // true
// console.log(p1.hasOwnProperty('getPosition')); // false 说明不是实例自身的方法
// console.log(p1.__proto__.hasOwnProperty('getPosition')); // true 事实上这个方法是从构造函数中继承而来的

// 对象中的存值取值函数。
// var Info = {
//   _age: 18,
//   set age(newValue) {
//     if (newValue > 18) {
//       console.log('怎么变老了');
//     } else {
//       console.log('哈哈我还年轻');
//     }
//   },
//   get age() {
//     console.log('你问我年龄干嘛');
//     return this._age;
//   }
// }

// console.log(Info.age);
// Info.age = 17;
// Info.age = 19

// ES6中使用info类
// class InfoES6 {
//   constructor(age) {
//     this._age = age
//   }
//   set age(newAge) {
//     console.log('new age is: ' + newAge);
//     this._age = newAge
//   }
//   get age() {
//     return this._age
//   }
// }
// const infos = new InfoES6(18)
// infos.age = 17
// console.log(infos.age);

// 静态方法
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   getPosition() {
//     return `(${this.x} , ${this.y})`
//   }
//   static getName() {
//     return Point.name
//   }
// }
// const p = new Point(1,2);
// console.log(p.getPosition());
// // console.log(p.getName()); // 实例不能调用静态方法 
// console.log(Point.getName());

// 如何用已知的方法书写私有属性
// class Point {
//   constructor() {
//     this.x = 0;
//   }
// }
// // 给类直接定义一个属性
// Point.y = 1;

// const p = new Point();
// console.log(p.x);
// console.log(p.y);

 
// new.target 属性 在ES5 中调用
// function Point() {
//   console.log(new.target);
// };
// // 创建一个实例，这个new.target 指向当前构造函数
// const p = new Point();  // 函数内部打印函数
// const p2 = Point(); // 直接调用 打印 undefined。

// new.target 属性在ES6 中调用
// class Point {
//   constructor() {
//     console.log(new.target);
//   }
// }

// const p = new Point();








/**
 * 1、使用 new 构造函数 可以返回一个 实例对象  这个方面ES5 和 ES6 都是一样的
 * 2、ES5 中构造函数是可以直接当成普通函数使用的，但是 ES6中不行，必须使用new操作符调用 否则报错
 * 3、放在类中的方法默认都是可以被继承的。如果不希望被继承，急需要使用static 来标识
 * 4、目前在ES6 中只有静态方法，没有静态属性。如果想要实现静态属性也是可以实现的。
 * 5、目前ES6并并不支持私有方法和私有属性。
 */




