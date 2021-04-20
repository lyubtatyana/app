// Ex 1
//type error
const x = 10;
const y = 12;
const sum = (x(20) + y);
console.log(sum);


//syntax error
const cube = (x) => (x * x * x )
 console.log (cube(3));


 //referance error 
 const sum = (a, b) => (a + b);
 console.log (sam(3,4));

 //Логическая ошибка
const DiffOfSquares = (a,b) => {
    return a - b * a + b; //(a+b)*(a-b)
}
console.log(DiffOfSquares(2,3));

//Ex 2
const DifferenceSumOfSquare = (n) => {
    let sum = 0;
    let SquareOfsum = 0;

    for (let i = 1; i<=n; i++) {
        sum += i
        SquareOfsum += i ** 2
    }
    const SumOfSquare = sum ** 2
    return SumOfSquare - SquareOfsum 
}

console.log (DifferenceSumOfSquare(10));
