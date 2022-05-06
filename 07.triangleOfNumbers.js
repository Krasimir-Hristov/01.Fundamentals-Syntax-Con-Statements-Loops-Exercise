function solve(number) {

    let num = number;


    // for (let i = 1; i <= num; i++) {
    //     let output = " ";
    //     for (let j = 1; j <= i; j++) {
    //         output += `${i} `
    //     }
    //     console.log(output);
    // }
    // second solution
    for(let i = 1; i <= num; i ++){
        console.log(`${i} `.repeat(i))
    }
}
solve(3)