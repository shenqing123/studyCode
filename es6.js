let obj = {
  a: 1,
  b: 2,
  c: 3
}
let {a, b, ...d} = obj
console.log(a,b,d) // 输出：1 2 { c: 3 }
// a, b必须对应对象中的key

let obj2 = {...obj}
obj2.a = 99
console.log(obj, obj2)
// 输出：{ a: 1, b: 2, c: 3 } { a: 99, b: 2, c: 3 }

let aa = 3
let e = 4
([aa, e] = [e, aa])
console.log(aa)