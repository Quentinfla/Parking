import { Context } from 'hono';
import { parkings } from '../../data/staticDataBase';
import ReadAllParkingsView from "../../views/ReadAllParkingsView";

const ReadAllParkingsController = async (c: Context) => {
    const htmlContent = ReadAllParkingsView({parkings});
    return c.html(htmlContent);
};

export default ReadAllParkingsController;
