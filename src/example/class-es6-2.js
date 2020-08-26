// 首先看一下js中的继承
function Food() {
  this.type = 'food'
}

Food.prototype.getType = function () {
  return this.type
}

function Vegetables(name) {
  this.name = name
}

Vegetables.prototype = new Food();
const tomato = new Vegetables('tomato')

console.log(tomato.getType());

// 使用类继承
class Parents {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

class Child extends Parents {
  constructor(name, age) {
    super(name)
    this.age = age;
  }
}

const c = new Child('louis', 18)
console.log(c);
console.log(c.getName());
console.log(c instanceof Child); // true
console.log(c instanceof Parents); // true
// 从上面代码可以看出使用继承实现的实例既是子类的实例、也是父类的实例

// 还有一点需要注意如果使用继承的写法，那么父类中的静态方法子类也是可以使用的。

// 这里再介绍一个非常厉害的方法 Object.getPrototypeOf() 返回一个对象的原型对象
console.log(Object.getPrototypeOf(Child) === Parents);  // true

// super 函数 super既可以作为函数使用，也可以作为对象使用。
// super作为函数使用，代表父类的constructor。 我们在上一个例子中可以看出。super传递参数和 父类的constructor
// 中传递的参数是一样的，并且ES6规定,只有在 super() 下面才能使用 this。且只能在 constructor 中调用。

// super 作为对象
// 普通方法中  ->  父类的原型对象
// 在静态方法中 -> 父类


class CustomArray extends Array {
  constructor(...args) {
    super(...args)
  }
}

const arr = new CustomArray(3, 4, 5)
arr.fill('+')
console.log(arr);
console.log(arr.join('_'));


