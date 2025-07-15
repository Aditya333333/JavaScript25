const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

const  coffee= {
    name:'cold coffee',
    price :240,
    isAaviable : true,

     orderchai:function () {
       console.log('chai ka order ta');
        
    }
}
console.log(Object.getOwnPropertyDescriptor(coffee,"name"));

Object.defineProperty(coffee,'name',{
    // writable:false,
    enumerable:true,

})
console.log(Object.getOwnPropertyDescriptor(coffee,"name"));

for (let [key,value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {
        
        console.log(`${key}:${value}`);
    }
    
}