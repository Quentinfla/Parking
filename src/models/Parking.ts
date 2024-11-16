import {GPS} from "./GPS";
import {generateRandomNumberId} from "../utils/generateRandomNumberId";
import {Spot} from "./Spot";


export class Parking{
    id : number;
    name : string;
    cityId : number;
    location : GPS;
    numberOfSpots : number;
    opened : boolean;
    hourlyRate : number;
    private parkIds : number[];


    constructor(name: string, cityId: number, location: GPS, numberOfSpots: number, opened: boolean, hourlyRate: number) {
        this.id = generateRandomNumberId();
        this.name = name;
        this.cityId = cityId;
        this.location = location;
        this.numberOfSpots = numberOfSpots;
        this.opened = opened;
        this.hourlyRate = hourlyRate;
        this.parkIds = [];

        for (let i = 0; i < this.numberOfSpots; i++) {
            const spot = new Spot(this.id);
            this.parkIds.push(spot.getId())
        }
    }

    getId() {
        return this.id;
    }
}