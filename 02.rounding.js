function solve(number,precision){

    if(precision > 15){
        precision = 15;
    }

    let rounding = number.toFixed(precision)
    console.log(parseFloat(rounding));
    
}
solve(3.1415926535897932384626433832795,2)