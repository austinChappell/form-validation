const express = require('express'),
      app = express(),
      mustacheExpress = require('mustache-express'),
      bodyParser = require('body-parser');

let port = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'mustache');
app.set(express.static('public'));

let data = { notes: ['Note 1'] };

app.get('/', (req, res) => {
  res.render('index', data);
});

app.post('/new-note', (req, res) => {
  let note = req.body.note;
  data.notes.push(note);
  res.render('index', data);
});

app.listen(port, () => {
  console.log(`Your app is running on port ${ port }.`);
});
