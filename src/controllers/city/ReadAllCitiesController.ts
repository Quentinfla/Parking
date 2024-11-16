import { Context } from 'hono';
import readAllCitiesView from '../../views/ReadAllCitiesView';
import db from "../../data/bunDataBase";

const ReadAllCitiesController = async (c: Context) => {

    const cities = db.query(`SELECT * FROM cities;`).all()
    if(cities) {
        return c.html(readAllCitiesView({cities}));
    }
};

export default ReadAllCitiesController;
