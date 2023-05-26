const data = [
  {
    "product_id": "MGS-01",
    "product_name": "Minyak Goreng Sunco",
    "price": {
      "value": 27500,
      "discount": 30,
      "tax": 10
    },
    "qty": 1,
  },
  {
    "product_id": "BRL-02",
    "product_name": "Beras Rojo Lele",
    "price": {
      "value": 10000,
      "discount": 10,
      "tax": 10
    },
    "qty": 1,
  },
  {
    "product_id": "MSK-01",
    "product_name": "Masako Rasa Ayam",
    "price": {
      "value": 1000,
      "discount": 25,
      "tax": 10
    },
    "qty": 10,
  },
  {
    "product_id": "LD-03",
    "product_name": "Lada Bubuk Merk Ladaku",
    "price": {
      "value": 500,
      "discount": 5,
      "tax": 10
    },
    "qty": 3,
  },
  {
    "product_id": "TLR-01",
    "product_name": "Telur Ayam Kemasan 1KG",
    "price": {
      "value": 35000,
      "discount": 60,
      "tax": 10
    },
    "qty": 1,
  }
]

/* 
tampilkan/tambahkan hasil dari masing2 item menjadi 
[
  {
    "product_id": "TLR-01",
    "product_name": "Telur Ayam Kemasan 1KG",
    "price": {
      "value": 35000,
      "discount": 60,
      "tax": 10
    },
    "qty": 1,
    "sub_total": {
      normal: 35000,
      total_dicount: 21000,
      total_tax: 1400,
      fixed_price: 15400
    }
  }
  ...dst
]
rumus:
- normal: adalah harga * qty
- total_discount: harga * discount(%)
- total_tax: harga * qty / tax(%)
- fixed_price: (harga * qty) - discount + tax
*/