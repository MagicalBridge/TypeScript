const getArray = (value: any, times: number = 5): any[] => {
  return new Array(times).fill(value)
}
// 上面这个函数的作用是接收一个值和一个个数，个数用作初始化数组的长度和大小，值用作填充数组

// 如何将上面的函数改写成一个泛型函数呢?
const getArrayGenerics = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value)
}

getArrayGenerics<number>(123, 4);

const getArrayGenerics2 = <T, U>(params1: T, params2: U, times: number): [T, U][] => {
  return new Array(times).fill([params1, params2])
}

// 调用这个函数的时候函数后面 括号前面使用泛型。
getArrayGenerics2<string, number>('1', 2, 4);

// 类型别名
let getArray3: <T>(args: T, times: number) => T[];
getArray3 = (args: any, times: number) => {
  return new Array(times).fill(args)
}
// 调用的时候虽然没有 显示声明使用什么泛型，但是代码中确实给了类型推断。
// 三种调用方式都是可以的
getArray3('123', 4)
getArray3<string>('123', 4)
getArray3<number>(123, 4)

// 使用type的时候需要使用 等号
type GetArray = <T>(args: T, times: number) => T[]
let getArray4: GetArray = (args: any, times: number) => {
  return new Array(times).fill(args)
}

// 泛型约束
interface ValueWithLength {
  length: number
}

const getArray5 = <T extends ValueWithLength>(args: T, times: number): T[] => {
  return new Array(times).fill(args)
}
getArray5([1, 2, 3], 4);
getArray5('123', 4)