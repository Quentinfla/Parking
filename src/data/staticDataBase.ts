import { City } from '../models/City';
import { Parking } from '../models/Parking';
import { GPS } from '../models/GPS';

const aixEnProvenceGPS: GPS = { latitude: 43.533329, longitude: 5.43333 };
const laSpeziaGPS: GPS = { latitude: 44.238366, longitude: 9.6912326 };
const aixLaChapelleGPS: GPS = { latitude: 50.776351, longitude: 6.083862 };
const sanCristobalGPS: GPS = { latitude: 28.487180709838867, longitude: -16.313879013061523 };
const newcastleGPS: GPS = { latitude: 54.9738474, longitude: -1.6131572 };

const aixEnProvence = new City('Aix en Provence', 'France', aixEnProvenceGPS);
const laSpezia = new City('La Spezia', 'Italy', laSpeziaGPS);
const aixLaChapelle = new City('Aix la Chapelle', 'Germany', aixLaChapelleGPS);
const sanCristobal = new City('San Cristobal de La Laguna', 'Spain', sanCristobalGPS);
const newcastle = new City('Newcastle upon Tyne', 'England', newcastleGPS);

const parkingA = new Parking('A', aixEnProvence.getId(), aixEnProvenceGPS, 100, true, 4.5);
const parkingB = new Parking('B', laSpezia.getId(), laSpeziaGPS, 50, true, 3.0);
const parkingC = new Parking('C', laSpezia.getId(), laSpeziaGPS, 80, true, 2.5);
const parkingD = new Parking('D', aixLaChapelle.getId(), aixLaChapelleGPS, 40, true, 2.8);
const parkingE = new Parking('E', sanCristobal.getId(), sanCristobalGPS, 70, true, 3.1);
const parkingF = new Parking('F', newcastle.getId(), newcastleGPS, 60, true, 2.4);
const parkingG = new Parking('G', newcastle.getId(), newcastleGPS, 90, true, 3.2);
    

aixEnProvence.addParking(parkingA.getId());
laSpezia.addParking(parkingB.getId());
laSpezia.addParking(parkingC.getId());
aixLaChapelle.addParking(parkingD.getId());
sanCristobal.addParking(parkingE.getId());
newcastle.addParking(parkingF.getId());
newcastle.addParking(parkingG.getId());


export const cities = [aixEnProvence, laSpezia, aixLaChapelle, sanCristobal, newcastle];
export const parkings = [parkingA, parkingB, parkingC, parkingD, parkingE, parkingF, parkingG];
