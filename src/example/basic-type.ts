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



