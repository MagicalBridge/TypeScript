/**
 * 布尔类型
 **/
let bool1: boolean = false
let bool2: boolean
bool2 = true
// 上述代码中，我们使用两种形式声明了一个布尔类型，第一种是声明后直接赋值，第二种是声明后先不赋值，在第二行赋值


/**
 * 数值类型
 */
let num: number = 123

/**
 * 字符串类型
 */
let str: string
str = 'abc'
// ts 中还可以使用模板字符串
str = `数值是${num}`
console.log(str); // 数值是123

/**
 * 数组类型
 */
// 写法1: 这种写法声明了一个只支持数值类型的数组
let arr: number[]
arr = [1]

// 写法2: Array<number>
let arr2: Array<number>
arr2 = [2]
// 在平时工作中，数组中可能存放各种各样的类型这个时候需要使用到联合类型
// 大括号不能省略, 代表了 数组中既可以存放 字符串也可以存放 数字
let arr3: (string | number)[];
arr3 = ['1', 2]
// 同样的可以使用 Array 这种形式声明
let arr4: Array<number | string>
arr4 = [2, '1']

/**
 * 元素类型
 */
let tuple: [string, number, boolean]
tuple = ['1', 2, false]
// 元组类型 类型和值必须是一一对应的，上面的元祖中定义了三种类型,
// 那么如果我们给元素附上4个值就会有问题。

/**
 * 枚举类型
 */
enum Roles {
  SUPER_ANMIN,
  ADMIN,
  USER
}
console.log(Roles.SUPER_ANMIN); // 0
// 从上面的代码可以看出, 枚举不声明索引，自动会给内部的枚举声明一个默认的索引
// 使用场景,服务端返回 0 我们判断是超级管理员。我们可以使用枚举来判断

// 这种写法 需要维护文档
// if(role === 0) {
//  xxx
// }

// 这种使用枚举的写法比较清晰
// if(role === Roles.SUPER_ANMIN) {
//   xxx
// }

// 当然枚举里面的值 我们可以指定对应的索引
enum Roles2 {
  SUPER_ANMIN = 1,
  ADMIN = 3,
  USER = 8
}
console.log(Roles2.SUPER_ANMIN); // 1
// 同样的我们可以根据序列号找到对应的名字
console.log(Roles2[3]) // ADMIN


/**
 * any 类型
 */
let value: any
value = 123
value = '123'
// 声明一个any类型的数组时候 里面可以存放任意类型
let anyArr: any[] = [1, '2', false]

/**
 * void 一般我们写函数 不返回任何东西，就给他返回viod类型
 */
const consoleText = (text: string): void => {
  console.log(text);
}
consoleText('123');
// 这里有个部分需要注意:void 是可以被赋值 undefined 或者 null 的
let v: void
v = undefined
v = null


/**
 * null 和 undefined
 */
let u: undefined
u = undefined

let n: null
n = null
// 上面代码中如果给 u 或者 n 赋值给别的类型就会报错。

/** 
 * never 类型
*/
// 这种抛出异常的函数 返回值就是never类型
const errorFunc = (message: string): never => {
  throw new Error(message)
}

// 死循环的函数返回值也是never类型
const infiniteFunc = (): never => {
  while (true) { }
}

/**
 * 对象类型
 */
let obj = {
  name: 'louis'
}
function getObject(obj: object): void {
  console.log(obj);
}
getObject({ name: 'kerry' }) // 这里如果参数赋值为123 就会有比较大的问题

/**
 * 类型断言 给确定的值添加一个断言
 * 如果使用react的话 只能使用 target as string这种形式
 */
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}















