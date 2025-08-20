const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv  = require('dotenv')

dotenv.config({
  path:'./.env'
})

const port = process.env.PORT || 3000
const app = express()
app.set('view engine' , 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
let users = []
app.get('/' , (req, res) => {
  const username = req.cookies.username
  if(username){
    res.redirect('/welcome')
  }else{
    res.redirect('/signin')
  }
})

app.get('/signup' , (req , res) => {
  res.render('signup')
})

app.post('/signup' , (req , res) => {
  const {username , password} = req.body;
  const exist = users.find(u => u.username === username)
  if(exist){
    res.send("User already exist , Try Signin...")
  }else{
    users.push({username , password})
    res.redirect('/signin')
  }
})

app.get('/signin' , (req , res) => {
  res.render('signin')
})

app.post('/signin' , (req , res) => {
  const {username , password} = req.body;
  const user  = users.find(u => u.username === username && u.password === password)
  if(user){
    res.cookie('username' , username , { httpOnly:true })
    res.redirect('/welcome')
  }else{
    res.send('Invalid username or password.')
  }
})

app.get('/welcome' , (req , res) => {
  const username = req.cookies.username;
  if(!username){
    return res.redirect('/signin')
  }

  res.render('Welcome' , {username})
})


app.get('/logout' , (req , res) => {
  res.clearCookie('username');
  res.redirect('/signin')
})


app.listen(port,  (err) => {
  !err ? console.log(`server start on port ${port}`) : null
})