export function def (obj, key, val,enumerable) {
  //给 obj添加了key标记，并赋值为val
  console.log("enumerable",!!enumerable)
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    })
}
