import {generateRandomNumberId} from "../utils/generateRandomNumberId";

export class Park {
    private id: number;
    private spotId: number;
    private startedAt: Date;
    private endedAt: Date | null;
    private price: number;
    private paid: boolean;

    constructor(spotId: number, startedAt: Date, price: number, paid: boolean, endedAt?: Date) {
        this.id = generateRandomNumberId();
        this.spotId = spotId;
        this.startedAt = startedAt;
        this.endedAt = endedAt || null;
        this.price = price;
        this.paid = paid;
    }
}