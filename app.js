
const express = require("express");
const path = require("path");
const homeRouter = require('./routes/home.route');
const productRouter = require('./routes/product.route');
const signupRouter = require('./routes/signup.route')
const loginRouter = require('./routes/login.route')
const cartRouter = require('./routes/cart.route')
const adminRouter = require('./routes/admin.route')

const expressSession = require('express-session');
const sessionStore = require("connect-mongodb-session")(expressSession);

const flash = require("connect-flash");



const app = express();

app.use(express.static(path.join(__dirname, "/assets")));
app.set('view engine', 'ejs');
app.set("views", "views");

const STORE = new sessionStore({
    uri: "mongodb://localhost:27017/online-shop",
    collection: 'sessions'
})

app.use(expressSession({
    secret: 'secret',
    saveUninitialized: false,
    store: STORE
}))
app.use(flash())
app.use('/', homeRouter)
app.use('/product', productRouter)
app.use('/signup', signupRouter)
app.use('/login', loginRouter)
app.use('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    })
})

app.use('/cart', cartRouter)
app.use('/admin', adminRouter)

app.listen(3000, (err) => {
    console.log(`server is running on port 3000 `);
});