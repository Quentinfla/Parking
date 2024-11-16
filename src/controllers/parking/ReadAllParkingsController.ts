import { Context } from 'hono';
import ReadAllParkingsView from "../../views/ReadAllParkingsView";
import db from "../../data/bunDataBase";

const ReadAllParkingsController = async (c: Context) => {

    const parkings = db.query(`SELECT * FROM parkings;`).all();
    if(parkings) {
        return c.html(ReadAllParkingsView({parkings}));
    }
};

export default ReadAllParkingsController;
