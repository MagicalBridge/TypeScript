// 这里定义了一个变量，addFunc 函数类型 两个参数都是number 返回值也是 number
let addFunc: (x: number, y: number) => number
// 返回值类型
addFunc = (arg1: number, arg2: number): number => arg1 + arg2

// 函数中的可选参数，在ts中可选参数是需要写在最后面的。
// 下面定义了一个函数 其中第三个参数是可选的，返回值是 number类型
type AddFunction = (arg1: number, arg2: number, arg3?: number) => number

let addFunction: AddFunction

addFunction = (x: number, y: number) => x + y
addFunction = (x: number, y: number, z: number) => x + y + z
// 上面代码中 无论是传递 z （可选参数）还是不传递z 都是成立的。

// ts中函数的重载
