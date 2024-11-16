import { Context } from 'hono';
import { cities } from '../../data/staticDataBase';
import readOneCityView from '../../views/ReadOneCityView';
import { toSlug } from '../../utils/toSlug';
import { HTTPException } from 'hono/http-exception'

const ReadOneCityController = async (c: Context) => {
    const slug = c.req.param('slug');
    const city = cities.find(city => toSlug(city.name) === slug);
    if(city) {
        return c.html(readOneCityView({city}));
    }
};

export default ReadOneCityController;
