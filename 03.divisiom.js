function solve(number){

let num = number;
let maxDevision = 0;


  if(num % 2 == 0){
      maxDevision = 2;
  }
  if(num % 3 == 0){
      maxDevision = 3;
  }
  if(num % 6 == 0){
      maxDevision = 6;
  }
  if(num % 7 == 0){
      maxDevision = 7;
  }
  if(num % 10 == 0){
      maxDevision = 10;
  }

  if(maxDevision > 0){
      console.log(`The number is divisible by ${maxDevision}`);
  }else{
      console.log("Not divisible");
  }

  


}
solve(15)