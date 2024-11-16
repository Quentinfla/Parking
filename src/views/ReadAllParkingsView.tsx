import React from 'react';
import { Layout } from './shared/Layout';
import { Parking } from '../models/Parking';

type ParkingViewProps = {
    parkings: Parking[];
};

const ReadAllParkingsView = ({ parkings }: ParkingViewProps) => {
    return (
        <Layout pageTitle="Liste des Parkings">
            <div>
                <h1>Liste des Parkings</h1>
                {parkings.length > 0 ? (
                <ul>{parkings.map((parking) => (
                        <li key={parking.id}>
                            <a href={`/parkings/${parking.id}`}>{parking.name}</a> - tarif horaire : €{parking.hourlyRate.toFixed(2)}
                        </li>
                ))}
                </ul>
                ) : (
                    <p>Aucun parking disponible.</p>
                )}
            </div>
        </Layout>
    );
};

export default ReadAllParkingsView;
