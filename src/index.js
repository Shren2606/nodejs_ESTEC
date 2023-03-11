const handlebars = require('express-handlebars');
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const path = require('path')


//HTTP logger
app.use(morgan("combined"))

//Template engine
app.engine('hbs', handlebars.engine({extname:'.hbs'}));
//khai báo engine sử dụng là handlebars() với tên là handlebars
//extname : "New name handlebars" đổi đuôi file handlebars thành .hbs

app.set('view engine', 'hbs');
//set view engine là handlebars đã được khai báo ở trên

app.set("views",path.join(__dirname,'resources/views'))
// trỏ vào thư mục
//console.log("PATH:" + path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
 //res.render(namePage.handlebars)
})

app.get('/news', (req, res) => {
  res.render('news');

})

app.listen(port,() => console.log(`App listening http://localhost:${port}`))