import rs from 'readline-sync'

let n = Number(rs.question('Enter a number: '))

let hash :{[key:number]:number}={}
/** log fibonacci series till n */
function fibonacci(n: number): number {
    if(hash[n]){
        return hash[n]
    }
    let result = (n>=0&&n<=1)?n:fibonacci(n-1)+fibonacci(n-2)
    hash[n]=result
    return result
}

for(let i of Array(n+1).keys()) {
    console.log(i,":" ,fibonacci(i))
}
