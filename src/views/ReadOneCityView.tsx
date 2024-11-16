import React from 'react';
import {City} from '../models/City';
import { Layout } from './shared/Layout';
import {parkings} from "../data/staticDataBase";
import db from "../data/bunDataBase";

type ReadOneCityViewProps = {
    city: City;
};
export const cityView = ({ city } : ReadOneCityViewProps) => {

    const cityParkings = db.query(`SELECT * FROM parkings WHERE city_id = $cityId;`).all({ $cityId: city.id });

    return (
        <Layout pageTitle={city.name}>
            <div>
                <h1>{city.name}</h1>
                <p>
                    <strong>Pays:</strong> {city.country}
                </p>
                <p>
                    <strong>Localisation:</strong> {city.location}
                </p>
                <h2>Parkings</h2>
                {parkings.length > 0 ? (
                    <ul>
                        {cityParkings.map((park) => (
                            <li key={park.id}>
                                <a href={`/parkings/${park.id}`}>{park.name}</a> - tarif horraire : {park.hourlyRate.toFixed(2)}€
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Pas de parking libre</p>
                )}
            </div>
        </Layout>
    );

}




export default cityView;
