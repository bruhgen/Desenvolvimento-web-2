const [a] = [10]
console.log(a)

const[n1, n3, , n5, n7 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n7)

const[, [, nota]] = [,[10, 7, 9, 8]]
console.log(nota)