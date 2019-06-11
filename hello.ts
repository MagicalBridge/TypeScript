/**
 * 基本类型
 */
// 这里 声明一个变量后面跟上 冒号 表明了 类型 boolean 只有两种类型 一种是true 一种是false
let isDone: boolean = false;
console.log("isDone " + `${isDone}`);

// ts 里面的数字都是浮点数 不仅能够表示十进制还能够表示16进制 2进制等等
let decLiteral: number = 20;
let hexLiteral: number = 0x14; // 20
let binaryLiteral: number = 0b10100; // 20
let octalLiteral: number = 0o24; // 20

console.log(`${decLiteral} ${hexLiteral} ${binaryLiteral} ${octalLiteral}`);

// ts 中可以使用单引号 双引号 或者 模板字符串进行书写
// 当然ts中也是支持 这种es6 中的那种拼接的
let testname: string = "hello";
let doubleName: string = "louis";
let templeteName: string = `chu`;
console.log(testname + " " + doubleName + " " + `${templeteName}`);

/**
 * 数组
 */
// 声明数组 有两种方式
let list: number[] = [1, 2, 2, 4]; // 意思是声明 number 类型的数组
// 第二种使用 泛型定义 数组Generics
let listGenerics: Array<number> = [12, 4, 45]; // 使用泛型定义数组

/**
 * 元组 tuple
 */
// 在我们的理解中似乎这种元组更像是js 之前的数组

let x: [string, number];

x = ["hello", 10]; // 赋值的时候要按照声明的顺序进行 这个例子中如果 我们将10 放在前面就会报错

//

console.log(x[0].substr(1)); // 因为元组的第一个元素是字符串类型可以使用substr方法

/**
 * 枚举 enum 类型是对JavaScript标准数据类型的一个补充
 */

//  初始化的时候给枚举一个默认的值
//  默认的情况下返回的是一个索引 索引是从0开始的。当然我们也可以手动改索引
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue"
}
let c: Color = Color.Red;

console.log(c);
// 当然  枚举提供反向查询的能力，

enum Color2 {
  Red = 1, // 这里手动将这这个索引设置为 1 下面的一次就是 2和3
  Green = 4,
  Blue
}

let colorName: string = Color2[4];
console.log("colorName " + `${colorName}`);

/**
 * Any 编程阶段的时候我们还不清楚需要什么类型数据
 */

//  一旦是用了any类型typescript 就不做语法检查的工作了
let anyType: any = 4;
console.log(anyType);
anyType = " change to string";
console.log(anyType);
anyType = false;
console.log(anyType);

// 我们同样可以设置任意类型的 数组 这个时候就需要any出场了
let anyList: any[] = [1, "hello", false];
console.log(anyList);

/**
 * void 这个特别像java中的写法 因为 当一个函数雷友返回值的时候我们使用void
 */

// 表示没有任何返回值
function warnUser(): void {
  console.log("has void return type");
}

// 声明一个void 类型的变量没有什么作用 因为你只能赋值 null 和undefined
let voidType: void = undefined;
let voidType2: void = null;

/**
 * null 和 undefined js中是两个不同的值
 */
let u: undefined = undefined;
let n: null = null; //这里 n 也可以赋值 undefined
// null  和undefined 是所有类型的子类型

/**
 * object 表示非原始类型 和js中的定义是差不多的
 */

// 下面这个函数 参数已经被指定了是 object 或者null 其他的一切的值都是非法的
// 这里使用了联合类型的语法,
function create(o: object | null): void {}
create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

/**
 * 类型断言 当我们比机器更加了解某些数据的信息时，此时就可以使用断言
 */

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 下面的这种语法更加的推荐因为在jsx 中只能使用这种语法 表明我比 计算机更知道
// 是什么类型
let strLength2: number = (someValue as string).length;

/**
 * let const var 声明
 */

//  下面这个例子是一个典型的闭包场景
function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}

var g = f();
console.log("g 函数的返回值" + g()); // 11

/**
 * 解构 分为数组解构和对象解构
 */
let jiegouArray: [number, number] = [1, 2];
function jiegouf([first, second]: [number, number]) {
  console.log(first, second);
}
jiegouf(jiegouArray);

/**
 * 这里的扩展也是分为两种 数组的扩展 和对象的扩展
 */

// 对象的解构赋值中会出现 属性覆盖的情况 一般我们将默认的值放在前面
let defaults = {
  food: "spicy",
  price: "$10",
  ambine: "noisy"
};

let search = { ...defaults, food: "rich" };

console.log(search); //

/**
 * ts的核心原则之一是进行类型检查 接口的概念
 */

// 定义一个接口 当形参事先了这个接口的时候 =
interface LabelledValue {
  size: number;
  label: string;
}

function printTestInterface(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let testObj = { size: 10, label: "size 10 Object" };
printTestInterface(testObj);

/**
 * 接口中的可选属性
 */

// 定义一个 正方形的接口
interface square {
  color: string;
  area: number;
}

// 定义一个参数配置接口
interface SquareConfig {
  color?: string; // 可以有也可以没有 这里的问好有没有感觉特别像正则表达式里面的东西
  width?: number; // 同样的道理
}

function createdSquery(config: SquareConfig): square {
  let newSquery = { color: "white", area: 100 };
  if (config.color) {
    newSquery.color = config.color;
  }
  if (config.width) {
    newSquery.area = config.width * config.width;
  }
  return newSquery;
}

let newSquery = createdSquery({ color: "black" });
console.log(newSquery);

/**
 * 接口中 定义只读属性
 */
// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:
interface Point {
  readonly x: number;
  readonly y: number;
}

//  你可以通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变了。
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error! 这里尝试对于只读属性进行修改就会报错

/**
 * ts 中 提供了只读泛型数组 这种数组 和数组泛型差不多 只是 一旦定义之后就不能修改
 */

let aArray: number[] = [1, 2, 34];
let roA: ReadonlyArray<number> = aArray;
// 当我们尝试对于这个数组进行修改的时候就会报错。
// roA.push(0); // 类型“ReadonlyArray<number>”上不存在属性“push”。

/**
 * 接口中额外属性的检查 上面的调用中
 */

// let newSquery = createdSquery({ color: "black" });传递的 如果不是color
// 而是其他的不在 接口属性中定义的数据 ts 会默认的报错。
// 为了解决上面的错误，我们需要采取一些措施，最佳的方式是能够添加一个字符串索引签名，
// 这样当我们添加了别的属性的时候

/**
 * 接口中还可以限制函数类型
 */

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
};
// 上面这种写法中 只需要保证 函数中的参数类型和个数一一对应就行至于参数的名称可以不相同
//  上面的这种写法还可以进行优化：返回值都不需要写 返回值也不需要写
mySearch = function(sou, sub) {
  let result = sou.search(sub);
  return result > -1;
};

/**
 * 可索引的类型
 */
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// 设置 索引类型 索引签名描述的是索引的类型
// 这样解释 当我们使用number索引的时候回得到一个string类型的返回值
interface StringArray2 {
  [index: number]: number;
}

let myArray2: StringArray2;
myArray2 = [2, 3];

let myStr2: number = myArray2[0];

/**
 * 类类型 类去实现接口的时候 实际上是想要对类做一些约束 实现某一种契约
 */

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date); // 这个方法也可以接受一个Date类型的参数
}
// 接口中定义的属性也好 方法也好  在类中是必须要实现的。
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
// 接口中只是实现了一个类的公共部分是不会关心类里面的私有部分的
// 一般来说我们使用的接口都是实例接口，而不是构造器接口

/**
 * 接口的继承 接口的继承可以实现从一个接口中复制一些成员
 */

//  创建一个 shape 接口
interface Shape {
  color: string;
}

// square 接口 实现了 这个shape
interface Square extends Shape {
  sideLength: number;
}

// 断言这个变量类型是 Squery
let square = {} as Square;
// 添加属性不会报错
square.color = "blue";
square.sideLength = 10;

// 一个接口可以继承多个接口，创建出多个接口的合成接口。
// 中间使用逗号进行分割

interface Counter {
  (start: number): string; // 函数类型 接收一个 number 类型的参数
  interval: number; // 静态成员变量
  reset(): void; // 一个没有返回值的函数
}

// 声明一个函数 这个函数 返回值是一个Counter 接口类型
function getCounter(): Counter {
  let counter = function(start: number) {} as Counter;

  counter.interval = 123;
  counter.reset = function() {};

  return counter;
}

let ctx = getCounter();
ctx(10);
ctx.reset();
ctx.interval = 10;

/**
 * 类的一些基本的定义
 */

class Greeting {
  text: string;
  constructor(message: string) {
    this.text = message;
  }
  greet() {
    return "hello" + this.text;
  }
}
let greeting = new Greeting("world");
greeting.greet();

/**
 * 类中的继承
 */
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
// 上面的这种形式是类的基本实现类型  基类 不仅可以实现自己的类型
// 也能调用父类的方法

class Animal2 {
  name: string; // 静态属性
  // 构造函数
  constructor(theName: string) {
    this.name = theName;
  }
  // move 方法
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal2 {
  // 继承父类的name
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal2 {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal2 = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

/**
 * 理解类中的修饰符
 */

class Animal3 {
  // 使用private 修饰符修饰一个类
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

// 外部调用的时候是不能访问 里面的name属性的
// new Animal3("Cat").name; // 错误: 'name' 是私有的.

// privated 这个修饰符和private 但是可以在子类的中进行访问
class Person {
  // 声明一个受保护的 属性
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 员工类 继承了 人这个类
class Employee extends Person {
  private department: string;
  // 员工类的自身的构造函数
  constructor(name: string, department: string) {
    // 首先 继承了父类的 name属性
    super(name);
    // 赋值自身的属性
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
// 注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee 是由 Person派生而来的。

/**
 * readonly 这个修饰符 表示的属性 可以被访问，但是不能被修改
 */

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.


/**
 * 存取器的使用 TypeScript支持通过getters/setters来截取对对象成员的访问。 
 * 它能帮助你有效的控制对对象成员的访问。
 */

// 创建一个密码
let passcode = "secret passcode";

// 创建一个员工类
class Employee2 {
  // 使用private 修饰符 修饰 fullname
  private _fullName: string;
  // get 方法 直接返回这个name
  get fullName(): string {
    return this._fullName;
  }
  // set 方法 是对于 方法的劫持
  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee2();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}
// 存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。
// 编译出来的代码实际上是 使用 defineprototype 这个属性在 es5 及其以上的版本才支持。

