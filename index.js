const express = require('express')

const app = express()
const cors = require('cors');
const port = process.env.PORT || 3001;


app.use(cors());

const categories = require('./data/category.json');

app.get('/', (req, res) => {
    res.send('Server Side')
  });


app.get('/course-categories', (req, res) =>{
  res.send(categories)
})

app.listen(port, () =>
   console.log('Server Side', port))