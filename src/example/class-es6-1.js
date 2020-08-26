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
class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  getPosition() {
    return `(${this.x} , ${this.y})`
  }
}

const p1 = new Point(2,3);
// 实例对象通过 instanceof 方法寻找到 构造函数
console.log(p1 instanceof Point);
console.log(p1.getPosition());
// 查看x是否是 p1对象上的自有属性
console.log(p1.hasOwnProperty('x')); // true
console.log(p1.hasOwnProperty('getPosition')); // false 说明不是实例自身的方法
console.log(p1.__proto__.hasOwnProperty('getPosition')); // true 事实上这个方法是从构造函数中继承而来的 
 
/**
 * 1、使用 new 构造函数 可以返回一个 实例对象  这个方面ES5 和 ES6 都是一样的
 * 2、ES5 中构造函数是可以直接当成普通函数使用的，但是 ES6中不行，必须使用new操作符调用 否则报错
 * 3、
 */




