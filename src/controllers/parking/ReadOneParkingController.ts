import { Context } from 'hono';
import readOneParkingView from '../../views/ReadOneParkingView';
import { HTTPException } from 'hono/http-exception';
import db from '../../data/bunDataBase';

const ReadOneParkingController = async (c: Context) => {

    const id = parseInt(c.req.param('id'), 10);
    const parking = db.query(`SELECT * FROM parkings WHERE id = $id;`).get({ $id: id });
    if (parking) {
        return c.html(readOneParkingView({ parking }));
    }

};

export default ReadOneParkingController;
