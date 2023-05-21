const data = [1,2,5,3,5,6,7,8,9,1,2]
// const peta = data.map(function (valueIndex){
//     const hasil = {'a':valueIndex}
//     return hasil
// })
const peta = data.map(valueIndex => ({'a':valueIndex}))
// const peta = data.map(function (valueIndex){
//     return {'a':valueIndex}
// })
// const peta = data.map(valueIndex => return {'a':valueIndex})

//console.log(peta)
let arr = []
for (let x of data) {
    arr.push({'a':x})  
}
//console.log(arr)
const red = data.reduce(function(result,item){
    result.push({'a':item})
    return result
},[])
console.log(red)