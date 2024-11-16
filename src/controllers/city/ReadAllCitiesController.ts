import { Context } from 'hono';
import { cities } from '../../data/staticDataBase';
import readAllCitiesView from '../../views/ReadAllCitiesView';

const ReadAllCitiesController = async (c: Context) => {

    return c.html(readAllCitiesView({cities}));
};

export default ReadAllCitiesController;
