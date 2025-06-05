
for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
    
    
}

for (let i = 1; i <=20; i++) {
    // console.log(i);
     
}

for (let i = 1; i <=10; i++) {
    if (i == 5) {
        // console.log(`5 is a best number`);
    }
    // console.log(i);
     
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Inner loop ${i}`);
    for (let j = 1; j <= 10 ;j++) {
    //    console.log(`Outer loop ${j} and Inner loop ${i}`);
    //    console.log(`i * j = ${i*j}`);            --- table
       
    }
}

let Myarray = ["Aditya","Rahul","Neha"]
for (let i = 0; i < Myarray.length; i++) {
    const element = Myarray[i];
    // console.log(element);

}

//**************************************Continue and Break************************** */


//+++++++++Break
for (let i = 1; i <= 10; i++) {
    if (i==5) {
        // console.log('5 is detected');
        break;
    }
    // console.log(i);  
}

//+++++++++Continue
for (let i = 1; i <= 10; i++) {
    if (i==5) {
        console.log('5 is detected');
        continue;
    }
    console.log(i);  
}