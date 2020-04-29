
const express = require("express");
// const path = require("path");
// const homeRouter = require('./routes/home.route');
// const productRouter = require('./routes/product.route');
// const signupRouter = require('./routes/signup.route')
// const loginRouter = require('./routes/login.route')


const app = express();

// app.use(express.static(path.join(__dirname, "/assets")));
// app.set('view engine', 'ejs');
// app.set("views", "views");
app.get('/', function (req, res) {
    res.send('hi')
});
// app.use('/', homeRouter)
// app.use('/product', productRouter)
// app.use('/signup', signupRouter)
// app.use('/login', loginRouter)
let port = process.env.PORT | 3000;
app.listen(process.env.PORT | 3000, () => {
    console.log(`server is runing on port ${port}`);
});