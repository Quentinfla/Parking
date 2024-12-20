
import { Hono } from 'hono';
import HomeController from './controllers/HomeController';
import ReadAllCitiesController from "./controllers/city/ReadAllCitiesController";
import ReadOneCityController from "./controllers/city/ReadOneCityController";
import ReadAllParkingsController from "./controllers/parking/ReadAllParkingsController";
import ReadOneParkingController from "./controllers/parking/ReadOneParkingController";


import {serveStatic} from "hono/bun";
import {trimTrailingSlash} from 'hono/trailing-slash';

const app = new Hono();

app.notFound((c) => {
    return c.html(`
        <html>
            <head>
                <title>Erreur 404</title>
                <style>
                    body {
                        background-color: #f4f4f9;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                    }
                    h1 {
                        font-size: 36px;
                        color: #ff6b6b;
                        margin-bottom: 10px;
                    }
                    p {
                        font-size: 16px;
                        color: #666;
                        margin-bottom: 20px;
                    }
                    a {
                        text-decoration: none;
                        color: #0078d7;
                        border: 2px solid #0078d7;
                        padding: 10px 20px;
                        border-radius: 5px;
                        display: inline-block;
                        margin-top: 10px;
                    }
                    a:hover {
                        background-color: #0078d7;
                        color: white;
                    }
                </style>
            </head>
            <body>
                <h1>Erreur 404</h1>
                <p>La page que vous avez demandée est introuvable.</p>
                <a href="/">Retour à l'accueil</a>
            </body>
        </html>
    `, 404);
});

app.onError((err, c) => {
    return c.html(`
        <html>
            <head>
                <title>Erreur 500</title>
                <style>
                    body {
                        background-color: #f4f4f9;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                    }
                    h1 {
                        font-size: 36px;
                        color: #ff6b6b;
                        margin-bottom: 10px;
                    }
                    p {
                        font-size: 16px;
                        color: #666;
                        margin-bottom: 20px;
                    }
                    a {
                        text-decoration: none;
                        color: #0078d7;
                        border: 2px solid #0078d7;
                        padding: 10px 20px;
                        border-radius: 5px;
                        display: inline-block;
                        margin-top: 10px;
                    }
                    a:hover {
                        background-color: #0078d7;
                        color: white;
                    }
                </style>
            </head>
            <body>
                <h1>Erreur 500</h1>
                <p>Une erreur inattendue est survenue.</p>
                <a href="/">Retour à l'accueil</a>
            </body>
        </html>
    `, 500);
});
app.use('*', trimTrailingSlash());
app.use('/static/*',serveStatic({ root : './'}));

app.route('/', HomeController);
app.get('/cities', ReadAllCitiesController );
app.get('/cities/:slug', ReadOneCityController );
app.get('/parkings', ReadAllParkingsController );
app.get('/parkings/:id', ReadOneParkingController );


export default app;