//const tasks =["Learn React","Learn MongoDB","Learn GraphQL"];

//const val = tasks.forEach((item,i)=>{
 //   console.log(item,i);
  //  return `${index}-${item}`;
//})
//console.log(val);-------------------return undefined-------ForEach----------------------------

//const tasks =["Learn React","Learn MongoDB","Learn GraphQL"];

//const val = tasks.map((element,index)=>{
 //   console.log(index,element);
  //  return `${index}-${element}`;
//})
//console.log(val);----------------------return defined--------map-----------------------------------

const elements =[1,2,3,4];

const answer = elements.map((element,i)=>{
    return `${i} ${element*element}`;
})

console.log(answer);