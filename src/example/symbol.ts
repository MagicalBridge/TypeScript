// symbol 是ES6 中新增的一种数据类型 数据基本数据类型
// 创建一个symbol类型的变量使用 Symbol()函数
let s = Symbol()

// symbol 就是独一无二的
let s1 = Symbol();
let s2 = Symbol();
// s1 和 s2 是不想等的

// symbol还可以支持传入一个参数作为标识
let s3 = Symbol('louis')
let s4 = Symbol('louis')
// 上面代码中虽然传入的参数是相同的，但是依然是不同的。

// symbol 可以转换成字符串
let s5 = Symbol('louis')
console.log(s5.toString()); // Symbol('louis')
console.log(Boolean(s5)); // true
console.log(!s5); // false


/**
 * 作为属性名
 */
// ES6 中新增的一个特性是可以灵活的显示属性名
let prop = 'name'
const info = {
  [`my${prop}is`]: 'louis'
}

console.log(info);

// 使用symbol 类型的值作为属性名是可以作为独一无二的存在的
let s6 = Symbol('name')
let info2 = {
  [s6]: 'louis',
  age: 18,
  sex: 'man'
}
console.log(info2);

// symbol 属性名的 属性是不能被 for in 循环遍历的
for (const key in info2) {
  console.log(key); // 只能打印出来 age 和 sex
}
// 同样的使用object.keys 返回的数组中也没有这个symbol值
console.log(Object.keys(info2)); // ["age", "sex"]

// 使用 Object.getOwnPropertyNames 这个方法 也没有办法获得
console.log(Object.getOwnPropertyNames(info2));

// 使用JSON.stringify() 也没有办法获得
console.log(JSON.stringify(info2));

// getOwnPropertySymbols 可以获得
console.log(Object.getOwnPropertySymbols(info2));

// 使用 Reflect.ownKeys(info2)
console.log(Reflect.ownKeys(info2)); //  ["age", "sex", Symbol(name)]

// 使用symbol.for 创建的如果传入的字符串相同，那么两个就是相同的
let s7 = Symbol.for('louis')
let s8 = Symbol.for('louis')
// console.log(s7 === s8); // true

let s9 = Symbol.for('kerry')
// console.log(s8 === s9); // false

/**
 * symbol.keyFor() 将symbol.for创建时候传入的字符串的 值
 */
console.log(Symbol.keyFor(s8)); // kerry




















