var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    'article-One':{
        title: 'Article One | NKR',
        heading: 'Article One',
        date: '13 Sep 17',
        content:
                `<P>
                    yo yo yo yo yo yo<br>
                    yo yo yo yo yo yo<br>
                    yo yo yo yo yo yo<br>
                    yo yo yo yo yo yo<br>
                </P>
                <P>
                    yo yo yo yo yo yo<br>
                    yo yo yo yo yo yo<br>
                    yo yo yo yo yo yo<br>
                    yo yo yo yo yo yo<br>
                </P>`
    },
    'article-Two':{
        title: 'Article Two | NKR',
        heading: 'Article Two',
        date: '02 Sep 17',
        content: `<P>
                yo yo yo yo yo yo<br>
                yo yo yo yo yo yo<br>
                yo yo yo yo yo yo<br>
                yo yo yo yo yo yo<br>
                </P>`},
    'article-Three':{
        title: 'Article Three | NKR',
        heading: 'Article Three',
        date: '02 Sep 17',
        content:
            `<h2>
                yo yo yo yo yo yo<br>
                yo yo yo yo yo yo<br>
                yo yo yo yo yo yo<br>
                yo yo yo yo yo yo<br>
            </h2>`
    }
};

    function createTemplate(data) 
    {
        var title = data.title;
        var heading = data.heading;
        var date = data.date;
        var content = data.content;
        
        var htmlTemplate= `
        <html>
            <head>
                <title>
                     ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />      
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                <div>
                    <a href = "/">HomE</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                    ${content}
                </div>
            </body>
        </html>
        `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
