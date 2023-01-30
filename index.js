import express from "express";

const app = express()

app.use('/public', express.static('public'));

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs');
  });



const port = 3000;

// Server listen to port

app.listen(port, () => {
//console.log(`App is running on PORT: ${port}`);
});