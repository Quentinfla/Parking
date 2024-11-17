import React from 'react';
import { Layout } from './shared/Layout';
import { Parking } from '../models/Parking';

type ReadOneParkingViewProps = {
    parking: Parking;
};



const ReadOneParkingView = ({ parking }: ReadOneParkingViewProps) => {
    console.log(parking)
    return (
        <Layout pageTitle={`Parking: ${parking.name}`}>
            <div>
                <a href="/parkings">Back to parkings</a>
                <h1>Parking: {parking.name}</h1>
                <p>
                    <strong>Nombre de places :</strong> {parking.numberOfPlaces}
                </p>
                <p>
                    <strong>Tarif horaire :</strong> €{parking.hourlyRate.toFixed(2)}
                </p>
                <p>
                    <strong>Localisation :</strong> {parking.location}
                </p>
                <p>
                    <strong>Ouvert :</strong> {parking.opened ? 'Oui' : 'Non'}
                </p>
            </div>
        </Layout>
    );
};

export default ReadOneParkingView;
