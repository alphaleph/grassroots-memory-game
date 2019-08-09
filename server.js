const express = require('express');
const app = express();
const port = 8080;

const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');


app.use(morgan('dev'));
app.use(helmet());
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/src', express.static(path.join(__dirname, '/src')));
app.use('/assets', express.static(path.join(__dirname, '/assets')))


app.get('/', cors(), (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), err => err ? console.log('Error sending HTML...') : console.log('Sent: index.html') );
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
