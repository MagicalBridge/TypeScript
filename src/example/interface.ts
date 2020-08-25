/**
 * 基础用法 有一个场景是一个函数打印名字我们需要用接口来限定
 */
const getFullName = ({ firstName, lastnName }) => {
  return `${firstName} ${lastnName}`
}

// interface
interface NameInfo {
  firstName: string,
  lastName: string
}
// 在函数定义的时候 限定传入的参数的类型
const getFullNameUseInterface = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}

// 接口是支持可选属性的
interface Vegetable {
  color?: string,
  type: string,
  [prop: string]: any
}

const getVegetable = ({ color, type }: Vegetable): string => {
  return `a ${color ? (color + '') : ''} ${type}`
}
// 调用这个函数，无论是否传递 color 属性都是可以的
getVegetable({
  color: 'red',
  type: 'tomato'
})

// 多余属性检查 上面的例子中, 如果给实参传入额外的属性，ts也会提示报错,为了解决这个问题，这里提供三种方式
// 1、使用类型断言,告诉编译器传入的参数就是指定的类型，这样就不会报错了
getVegetable({
  color: 'red',
  type: 'tomato',
  size: 2
} as Vegetable)

// 2、第二种方式，是使用索引签名 就是给接口 添加一个prop属性名，属性名是字符串类型值是任意类型
// interface Vegetable {
//   color?: string,
//   type: string,
//   [prop: string]: any
// }

// 3、第三种是利用类型的兼容性,我们上面是给函数传入的一个对象, 我们可以换一种思路，就是传入一个变量
const VegetableInfo = {
  color: 'red',
  type: 'tomato',
  size: 2
}
getVegetable(VegetableInfo)
// 使用上面这种传递变量的方式也不会出错。VegetableInfo 代表的是接口中的数据限制，很明显,
// 对象中的数据满足了接口中的定义的类型和属性 多了无所谓。


// 限定一个接口中属性是只读属性
interface Animal {
  readonly name: string
}

let animalObj: Animal = {
  name: 'dog'
}
// animalObj.name = 'cat' // 想要对name属性进行修改是不可以的 因为这是只读属性

// 4、接口是可以限定数组的值的
interface ArrInter {
  0: number,
  readonly 1: string
}

let arrinterface: ArrInter = [1, 'hi']
// arrinterface[1] = 'hello' // 因为索引为1的位置是string类型，所以不能修改

// 接口还可以对函数进行限定 这种形式使用 type 更加优秀
type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2

// 索引类型
interface RoleDic {
  // 这个限定的是属性名称是数字
  [id: number]: string
}

const roledic: RoleDic = {
  1: 'super_man'
}

interface RoleDic2 {
  [id: string]: string
}

// 下面这种声明为什么没有报错呢，原因就是对象中的key 是字符串类型
// 如果是数字，内部会对其进行隐式类型转换
const roledic2: RoleDic2 = {
  '123': 'super_man',
  456: 'super_woman'
}







