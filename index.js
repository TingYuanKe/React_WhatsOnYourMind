	var path               = require('path'),
    express            = require('express'),
    webpack            = require('webpack'),
    bodyParser         = require('body-parser'),
    webpackMiddleware  = require('webpack-dev-middleware'),
    routes             = require('./routes/index'),
    config             = require('./webpack.config.js'),
    port               = process.env.PORT || 3000;

const         app       = express(),
              compiler  = webpack(config);


app.use(express.static(path.join(__dirname, 'public')));//with / this will comsume this /.get method
app.use(webpackMiddleware(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/',routes);

app.listen(port);
