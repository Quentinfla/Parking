import { Hono } from 'hono';

const HomeController = new Hono();

HomeController.get('/', (c) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css">
        <title>Welcome to EuroPark</title>
      </head>
      <body>
        <h1>Welcome to EuroPark</h1>
        <img src="/static/parking.png" alt ="test"/>
        <p>Save time and money with EuroPark! Enjoy a 100% contactless parking experience for a short or long duration in our car parks in Europe!</p>
        <ul>
            <li> <a href="/cities">Our Cities</a><br></li>
            <li> <a href="/parkings">Our Car Parks</a></li>
        </ul>
      </body>
    </html>
  `;
    return c.html(htmlContent);
});

export default HomeController;
