const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const products = [
  { id: 1, name: 'Sản phẩm 1',code: "SDG", imageUrl: "https://picsum.photos/200/300", price: 10.99 },
  { id: 2, name: 'Sản phẩm 2',code: "FGH", imageUrl: "https://picsum.photos/200/300", price: 20.99 },
  { id: 3, name: 'Sản phẩm 3',code: "SDF", imageUrl: "https://picsum.photos/200/300", price: 30.99 },
  { id: 4, name: 'Sản phẩm 4',code: "ERW", imageUrl: "https://picsum.photos/200/300", price: 40.99 },
  { id: 5, name: 'Sản phẩm 5',code: "JKH", imageUrl: "https://picsum.photos/200/300", price: 50.99 },
  { id: 6, name: 'Sản phẩm 6',code: "TYU", imageUrl: "https://picsum.photos/200/300", price: 60.99 },
  { id: 7, name: 'Sản phẩm 7',code: "OUI", imageUrl: "https://picsum.photos/200/300", price: 70.99 },
  { id: 8, name: 'Sản phẩm 8',code: "WEC", imageUrl: "https://picsum.photos/200/300", price: 80.99 },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
