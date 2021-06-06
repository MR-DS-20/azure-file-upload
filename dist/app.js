"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var serve_favicon_1 = __importDefault(require("serve-favicon"));
var morgan_1 = __importDefault(require("morgan"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var body_parser_1 = __importDefault(require("body-parser"));
var upload_1 = require("./upload");
exports.app = express_1.default();
// view engine setup
exports.app.set('views', path_1.default.join(__dirname, 'views'));
exports.app.set('view engine', 'hbs');
exports.app.use(serve_favicon_1.default(path_1.default.join(__dirname, 'public', 'favicon.ico')));
exports.app.use(morgan_1.default('dev'));
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: false }));
exports.app.use(cookie_parser_1.default());
exports.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
exports.app.use('/upload', upload_1.router);
// catch 404 and forward to error handler
exports.app.use(function (req, res, next) {
    var err = new Error('Not Found');
    //   err.status = 404;
    next(err);
});
// error handler
exports.app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
