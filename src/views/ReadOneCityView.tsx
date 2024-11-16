import React from 'react';
import {City} from '../models/City';
import { Layout } from './shared/Layout';
import {parkings} from "../data/staticDataBase";

type ReadOneCityViewProps = {
    city: City;
};
export const cityView = ({ city } : ReadOneCityViewProps) => {
    const cityParkings = parkings.filter(parking => parking.cityId === city.id);
    return (
        <Layout pageTitle={city.name}>
            <div>
                <h1>{city.name}</h1>
                <p>
                    <strong>Pays:</strong> {city.country}
                </p>
                <p>
                    <strong>Localisation:</strong> Latitude: {city.location.latitude}, Longitude: {city.location.longitude}
                </p>
                <h2>Parkings</h2>
                {parkings.length > 0 ? (
                    <ul>
                        {cityParkings.map((parking) => (
                            <li key={parking.id}>
                                <a href={`/parkings/${parking.id}`}>{parking.name}</a> - tarif horraire : €{parking.hourlyRate.toFixed(2)}
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
