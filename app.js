const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const fetch_weather = require('./fetch-weather')

// Define paths
const publicPath = path.join(__dirname, 'public')
const viewsPath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')

// Setup handlebars directories
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory
app.use(express.static(publicPath))

app.get('', (req, res)=>{
    res.render('index', {title:'Weather', name:'Sanket Ainchwar'})
})

app.get('/about', (req, res)=>{
    res.render('about',{title:"About Me", name:'Sanket Ainchwar'})
})

app.get('/help', (req, res)=>{
    res.render('help',{title:"HELP", name:'Sanket Ainchwar'})
})

app.get('/weather', (req,res)=>{
    fetch_weather(req.query.address, (data)=>{
        res.send(data)
    })
})

app.get('*', (req, res)=>{
    res.render('404',{title:"4o4"})
})


app.listen(3000, ()=>{
    console.log('listening to the server....')
})