// 枚举这种类型使用enum关键字定义

enum Status {
  Uploading,
  Success,
  Failed
}
// 访问枚举的时候 使用普通的点操作符就可以完成
// console.log(Status.Uploading);

// 这里需要注意一个点: 枚举的值是可以手动指定的，可以是数值类型，也可以是变量类型
// 需要注意的一点是，如果是中间某一个变量设置成了变量，那么下面就不能使用默认值了

// 下面这个是字符串枚举的例子
enum Message {
  Error = 'sorry error',
  Success = 'Hello success',
  Failed =  Error,
}

// 异构枚举 指的是枚举里面既有 数字类型 又有字符串类型
enum Result {
  Failed = 0,
  Success = 'success',
}




