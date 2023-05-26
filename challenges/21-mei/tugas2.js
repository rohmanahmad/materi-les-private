const data = [
  {
    "product_id": "MGS-01",
    "product_name": "Minyak Goreng Sunco",
    "price": 27500,
    "qty": 1,
  },
  {
    "product_id": "BRL-02",
    "product_name": "Beras Rojo Lele",
    "price": 100000,
    "qty": 1,
  },
  {
    "product_id": "MSK-01",
    "product_name": "Masako Rasa Ayam",
    "price": 1000,
    "qty": 10,
  },
  {
    "product_id": "LD-03",
    "product_name": "Lada Bubuk Merk Ladaku",
    "price": 500,
    "qty": 3,
  },
  {
    "product_id": "TLR-01",
    "product_name": "Telur Ayam Kemasan 1KG",
    "price": 35000,
    "qty": 1,
  }
]

/* 
Tasks:
- tambah 1 field "sub_total" dengan value yang didapat dari (price * qty)
  example: 
  [
    {
      "product_id": "LD-03",
      "product_name": "Lada Bubuk Merk Ladaku",
      "price": 500,
      "qty": 3,
      "sub_total": 1500
    },
    ...dst
  ]

*/
// const red = data.reduce(function(result, item, index){
//   item['sub_total'] = item.price * item.qty // untuk menambahkan key pada variabel item dengan key sub_total
//   result.push(item) 
//   return result
// },[]) 
// console.log(red) 

// const dataMap = data.map(function(currentValue, valueIndex){
//   const subtotal = currentValue.price * currentValue.qty
//   currentValue.sub_total = subtotal
//   return currentValue
// }) 

// console.log(dataMap)

// const size = data.length
// let items = []
// for (let x = 0; x<size; x++) {
//   const item = data[x]
//   item.sub_total = item.price * item.qty
//   items.push(item)
// }
// console.log(items)

// let ids = []
// for (let x in data) {
//      const id = data[x]
//      id.sub_total = id.price * id.qty
//      ids.push(id)
// }
// console.log(ids)

let arr = []
for (let value of data) {
  const subtotal = value.price * value.qty
  value.sub_total = subtotal
  arr.push(value)
}
console.log(arr)