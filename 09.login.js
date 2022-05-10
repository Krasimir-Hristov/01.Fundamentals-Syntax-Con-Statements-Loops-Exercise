function solve(input){

    let userName = input.shift()
    let copy = userName;
    input.unshift(copy)
    let trysCounter = 0;

    for (let index = 1;index < input.length;index++) {
      
       let reversePassword = input[index];
      reversePassword = reversePassword.split("")
      reversePassword = reversePassword.reverse()
      reversePassword = reversePassword.join("");

      if(reversePassword === userName){
        console.log(`User ${userName} logged in.`);
    }

       if(reversePassword !== userName){
        trysCounter++;
          
           if(trysCounter >= 4){
            console.log(`User ${userName} blocked!`);
            break;
           }
           console.log(`Incorrect password. Try again.`);
       }

       
    }
    

}
 solve(['Acer','login','go','let me in','recA']);

 solve(['momo','omom']);

 solve(['sunny','rainy','cloudy','sunny','not sunny']);