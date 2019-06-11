var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * 基本类型
 */
// 这里 声明一个变量后面跟上 冒号 表明了 类型 boolean 只有两种类型 一种是true 一种是false
var isDone = false;
console.log("isDone " + ("" + isDone));
// ts 里面的数字都是浮点数 不仅能够表示十进制还能够表示16进制 2进制等等
var decLiteral = 20;
var hexLiteral = 0x14; // 20
var binaryLiteral = 20; // 20
var octalLiteral = 20; // 20
console.log(decLiteral + " " + hexLiteral + " " + binaryLiteral + " " + octalLiteral);
// ts 中可以使用单引号 双引号 或者 模板字符串进行书写
// 当然ts中也是支持 这种es6 中的那种拼接的
var testname = "hello";
var doubleName = "louis";
var templeteName = "chu";
console.log(testname + " " + doubleName + " " + ("" + templeteName));
/**
 * 数组
 */
// 声明数组 有两种方式
var list = [1, 2, 2, 4]; // 意思是声明 number 类型的数组
// 第二种使用 泛型定义 数组Generics
var listGenerics = [12, 4, 45]; // 使用泛型定义数组
/**
 * 元组 tuple
 */
// 在我们的理解中似乎这种元组更像是js 之前的数组
var x;
x = ["hello", 10]; // 赋值的时候要按照声明的顺序进行 这个例子中如果 我们将10 放在前面就会报错
//
console.log(x[0].substr(1)); // 因为元组的第一个元素是字符串类型可以使用substr方法
/**
 * 枚举 enum 类型是对JavaScript标准数据类型的一个补充
 */
//  初始化的时候给枚举一个默认的值
//  默认的情况下返回的是一个索引 索引是从0开始的。当然我们也可以手动改索引
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
// 当然  枚举提供反向查询的能力，
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 4] = "Green";
    Color2[Color2["Blue"] = 5] = "Blue";
})(Color2 || (Color2 = {}));
var colorName = Color2[4];
console.log("colorName " + ("" + colorName));
/**
 * Any 编程阶段的时候我们还不清楚需要什么类型数据
 */
//  一旦是用了any类型typescript 就不做语法检查的工作了
var anyType = 4;
console.log(anyType);
anyType = " change to string";
console.log(anyType);
anyType = false;
console.log(anyType);
// 我们同样可以设置任意类型的 数组 这个时候就需要any出场了
var anyList = [1, "hello", false];
console.log(anyList);
/**
 * void 这个特别像java中的写法 因为 当一个函数雷友返回值的时候我们使用void
 */
// 表示没有任何返回值
function warnUser() {
    console.log("has void return type");
}
// 声明一个void 类型的变量没有什么作用 因为你只能赋值 null 和undefined
var voidType = undefined;
var voidType2 = null;
/**
 * null 和 undefined js中是两个不同的值
 */
var u = undefined;
var n = null; //这里 n 也可以赋值 undefined
// null  和undefined 是所有类型的子类型
/**
 * object 表示非原始类型 和js中的定义是差不多的
 */
// 下面这个函数 参数已经被指定了是 object 或者null 其他的一切的值都是非法的
// 这里使用了联合类型的语法,
function create(o) { }
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
/**
 * 类型断言 当我们比机器更加了解某些数据的信息时，此时就可以使用断言
 */
var someValue = "this is a string";
var strLength = someValue.length;
// 下面的这种语法更加的推荐因为在jsx 中只能使用这种语法 表明我比 计算机更知道
// 是什么类型
var strLength2 = someValue.length;
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
var jiegouArray = [1, 2];
function jiegouf(_a) {
    var first = _a[0], second = _a[1];
    console.log(first, second);
}
jiegouf(jiegouArray);
/**
 * 这里的扩展也是分为两种 数组的扩展 和对象的扩展
 */
// 对象的解构赋值中会出现 属性覆盖的情况 一般我们将默认的值放在前面
var defaults = {
    food: "spicy",
    price: "$10",
    ambine: "noisy"
};
var search = __assign({}, defaults, { food: "rich" });
console.log(search); //
function printTestInterface(labelledObj) {
    console.log(labelledObj.label);
}
var testObj = { size: 10, label: "size 10 Object" };
printTestInterface(testObj);
function createdSquery(config) {
    var newSquery = { color: "white", area: 100 };
    if (config.color) {
        newSquery.color = config.color;
    }
    if (config.width) {
        newSquery.area = config.width * config.width;
    }
    return newSquery;
}
var newSquery = createdSquery({ color: "black" });
console.log(newSquery);
//  你可以通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变了。
var p1 = { x: 10, y: 20 };
// p1.x = 5; // error! 这里尝试对于只读属性进行修改就会报错
/**
 * ts 中 提供了只读泛型数组 这种数组 和数组泛型差不多 只是 一旦定义之后就不能修改
 */
var aArray = [1, 2, 34];
var roA = aArray;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// 上面这种写法中 只需要保证 函数中的参数类型和个数一一对应就行至于参数的名称可以不相同
//  上面的这种写法还可以进行优化：返回值都不需要写 返回值也不需要写
mySearch = function (sou, sub) {
    var result = sou.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var myArray2;
myArray2 = [2, 3];
var myStr2 = myArray2[0];
// 接口中定义的属性也好 方法也好  在类中是必须要实现的。
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
// 断言这个变量类型是 Squery
var square = {};
// 添加属性不会报错
square.color = "blue";
square.sideLength = 10;
// 声明一个函数 这个函数 返回值是一个Counter 接口类型
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var ctx = getCounter();
ctx(10);
ctx.reset();
ctx.interval = 10;
/**
 * 类的一些基本的定义
 */
var Greeting = /** @class */ (function () {
    function Greeting(message) {
        this.text = message;
    }
    Greeting.prototype.greet = function () {
        return "hello" + this.text;
    };
    return Greeting;
}());
var greeting = new Greeting("world");
greeting.greet();
/**
 * 类中的继承
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
// 上面的这种形式是类的基本实现类型  基类 不仅可以实现自己的类型
// 也能调用父类的方法
var Animal2 = /** @class */ (function () {
    // 构造函数
    function Animal2(theName) {
        this.name = theName;
    }
    // move 方法
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    // 继承父类的name
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal2));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
/**
 * 理解类中的修饰符
 */
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
// 外部调用的时候是不能访问 里面的name属性的
// new Animal3("Cat").name; // 错误: 'name' 是私有的.
// privated 这个修饰符和private 但是可以在子类的中进行访问
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
// 员工类 继承了 人这个类
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    // 员工类的自身的构造函数
    function Employee(name, department) {
        var _this = 
        // 首先 继承了父类的 name属性
        _super.call(this, name) || this;
        // 赋值自身的属性
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
// 注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee 是由 Person派生而来的。
/**
 * readonly 这个修饰符 表示的属性 可以被访问，但是不能被修改
 */
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
/**
 * 存取器的使用 TypeScript支持通过getters/setters来截取对对象成员的访问。
 * 它能帮助你有效的控制对对象成员的访问。
 */
// 创建一个密码
var passcode = "secret passcode";
// 创建一个员工类
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    Object.defineProperty(Employee2.prototype, "fullName", {
        // get 方法 直接返回这个name
        get: function () {
            return this._fullName;
        },
        // set 方法 是对于 方法的劫持
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee2;
}());
var employee = new Employee2();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
// 存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。
// 编译出来的代码实际上是 使用 defineprototype 这个属性在 es5 及其以上的版本才支持。