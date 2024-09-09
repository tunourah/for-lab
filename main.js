 //q1 


 for (let i = 0 ; i<=25 ; i++){
    if (i % 2 == 0) {
        console.log(i)
    } 
 }

console.log("----------")
 //q2

 for (let i = 1; i<= 10 ; i++ ){
    console.log(i*i)
 }


 console.log("----------")
 //q3


 for (let i = 0 ; i<=20 ; i++){
    if (i % 2 == 1) {
        console.log( "odd number : "+i)
    } 
   
 }

 console.log("----------")
 //q4 

  let num1=0;
  let num2= 1 ;
  let total ;

  for (let i =0 ; i <= 10 ; i++) {
     console.log(num1);
     total = num1 +num2 ;
     
     num1 = num2 ;
num2 = total;
  }
  console.log("----------")

  //q5
  for (let i=1 ; i<=3 ; i++) {
    for (let j =1 ; j<=10 ; j++) {
        console.log( i+"*"+j+"="+i*j)
    }
  }

