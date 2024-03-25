function solution(n)
{
    const array = n.toString().split('')
    return  array.reduce((acc, cur) => acc += +cur, 0);
}