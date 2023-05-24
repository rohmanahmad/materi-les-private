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