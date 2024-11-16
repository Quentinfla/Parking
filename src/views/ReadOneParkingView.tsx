import React from 'react';
import { Layout } from './shared/Layout';
import { Parking } from '../models/Parking';

type ReadOneParkingViewProps = {
    parking: Parking;
};

const ReadOneParkingView = ({ parking }: ReadOneParkingViewProps) => {
    return (
        <Layout pageTitle={`Parking: ${parking.name}`}>
            <div>
                <h1>Parking: {parking.name}</h1>
                <p>
                    <strong>Nombre de places :</strong> {parking.numberOfSpots}
                </p>
                <p>
                    <strong>Tarif horaire :</strong> €{parking.hourlyRate.toFixed(2)}
                </p>
                <p>
                    <strong>Localisation :</strong> Latitude: {parking.location.latitude}, Longitude: {parking.location.longitude}
                </p>
                <p>
                    <strong>Ouvert :</strong> {parking.opened ? 'Oui' : 'Non'}
                </p>
            </div>
        </Layout>
    );
};

export default ReadOneParkingView;
