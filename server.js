// const express = require('express');
// const app = express();

// const indexRouter = require('./routes');

// const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(express.static(path.join(__dirname, 'react_project', 'build', 'index.html')));

// app.use(cors());
// app.use(express.json());

// app.use(express.urlencoded({extended : true}));

// app.use('/', indexRouter);

// app.set('port', process.env.PORT || 3003);
// app.listen(app.get('port'), ()=>{
//     console.log(`Server is listening on port ${app.get('port')}`);
// })
const express = require("express");
const path = require('path');
const app = express();
const indexRouter = require("./routes");
const userRouter = require("./routes/users");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const session = require('express-session');
const fileStore = require('session-file-store')(session);


app.set("port", process.env.PORT || 8012);
app.set("view engine", "html");
nunjucks.configure("views", {
    express: app,
    watch: true
})

app.use(bodyParser.urlencoded({extended : true}));
app.use(session({
    httpOnly : true,
    resave : false,
    secret : 'secret',
    store : new fileStore()
}))
app.use(express.static(path.join(__dirname, 'react_project', 'build', 'index.html')));
app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(app.get("port"), ()=>{
    console.log(`Server is listening on port ${app.get("port")}`);
})