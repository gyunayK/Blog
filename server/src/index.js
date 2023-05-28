require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const path = require('path');
const methodOverride = require('method-override')

const bodyParser = require('body-parser')
const blogsRouter = require('./routers/blogs.router');
const { srcDir, rootDir} = require('./utils/path-helper')
const cors = require('cors')





const app = express();
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/blogs", blogsRouter)



// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});