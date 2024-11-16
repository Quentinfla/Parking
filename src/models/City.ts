import {GPS} from "./GPS";
import {toSlug} from "../utils/toSlug";
import {generateRandomNumberId} from "../utils/generateRandomNumberId";


export class City{
    id : number;
    name : string;
    private slug : string;
    private parkingsIds : number[];
    country : string;
    location : GPS;


    constructor(name: string, country: string, location: GPS) {
        this.id = generateRandomNumberId();
        this.name = name;
        this.slug = toSlug(name);
        this.parkingsIds = [];
        this.country = country;
        this.location = location;
    }

    public getId(): number {
        return this.id;
    }

    public addParking(parkingId: number): void {
        this.parkingsIds.push(parkingId);
    }
}