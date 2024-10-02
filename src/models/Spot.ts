import {generateRandomNumberId} from "../utils/genereateRandomNumberId";

export class Spot {
    private id: number;
    private parkingId: number;

    constructor(parkingId: number) {
        this.id = generateRandomNumberId();
        this.parkingId = parkingId;
    }

    getId(): number {
        return this.id;
    }
}