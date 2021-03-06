require("dotenv").config();
import { env } from "./environment/env";
const port: number = env().port;
import { App } from "./application";
import { middleware } from "./middleware";
const dbConString = env().db.uri(env().db.user, env().db.pw, env().db.name, env().db.account)
import { storageRouter } from "./routes/storage.router";
/**
 * Configure App instance
 */
const app = new App(port, middleware, [
    storageRouter
]);

/**
 * Set up database credentials
 */
// app.mongoDB(dbConString);

/**
 * Launch!
 */
app.listen();
