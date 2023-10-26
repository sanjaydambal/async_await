const fn = ()=>{
    console.log("hello")
}
setTimeout(fn,2000);
const fn1 = (name)=>{
    console.log(`hello ${name}`)
}
clearTimeout(setTimeout(fn1,2000,"sanjay"));
