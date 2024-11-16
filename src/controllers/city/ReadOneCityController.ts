import { Context } from 'hono';
import readOneCityView from '../../views/ReadOneCityView';
import { HTTPException } from 'hono/http-exception';
import db from '../../data/bunDataBase';

const ReadOneCityController = async (c: Context) => {

    const slug = c.req.param('slug');
    const city = db.query(`SELECT * FROM cities WHERE slug = $slug;`).get({ $slug: slug });
    if (city) {
        return c.html(readOneCityView({ city }));
    }
};

export default ReadOneCityController;
