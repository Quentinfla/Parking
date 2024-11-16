import { Context } from 'hono';
import { parkings } from '../../data/staticDataBase';
import readOneParkingView from '../../views/ReadOneParkingView';
import { HTTPException } from 'hono/http-exception'

const ReadOneParkingController = async (c: Context) => {
    const id = parseInt(c.req.param('id'), 10);
    const parking = parkings.find((p) => p.id == id);
    if(parking) {
        return c.html(readOneParkingView({parking}));
    }
};

export default ReadOneParkingController;
