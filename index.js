const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express')

const app = express()

axios("https://www.theguardian.com/uk-news")
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $(".fc-item__title", html).each(function(){
           const title =  $(this).text()
           const url = $(this).find('a').attr("href")

           articles.push({
               title,
               url
           })
        })

        console.log(articles)
    })
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(3000, () => console.log("server running..."))