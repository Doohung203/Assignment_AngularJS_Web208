const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const products = [
  { id: 1, name: 'Product 1',code: "SDG", imageUrl: "https://picsum.photos/200/300", price: 10.99 },
  { id: 2, name: 'Product 2',code: "FGH", imageUrl: "https://picsum.photos/200/300", price: 20.99 },
  { id: 3, name: 'Product 3',code: "SDF", imageUrl: "https://picsum.photos/200/300", price: 30.99 },
  { id: 4, name: 'Product 4',code: "ERW", imageUrl: "https://picsum.photos/200/300", price: 40.99 },
  { id: 5, name: 'Product 5',code: "JKH", imageUrl: "https://picsum.photos/200/300", price: 50.99 },
  { id: 6, name: 'Product 6',code: "TYU", imageUrl: "https://picsum.photos/200/300", price: 60.99 },
  { id: 7, name: 'Product 7',code: "OUI", imageUrl: "https://picsum.photos/200/300", price: 70.99 },
  { id: 8, name: 'Product 8',code: "WEC", imageUrl: "https://picsum.photos/200/300", price: 80.99 },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
