import React from 'react';
import {City} from '../models/City';
import { Layout } from './shared/Layout';
import {toSlug} from "../utils/toSlug";

type cityViewProps = {
    cities: Array<City>;
};

export const cityView = ({ cities } : cityViewProps) => {
    return (
        <Layout pageTitle="Cities">
            <div>
                <h1>Liste des Villes</h1>
                <ul>
                    {cities.map((city) => (
                        <li key={city.id}>
                            <a href={`/cities/${toSlug(city.name)}`}>{city.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );

}

export default cityView;
