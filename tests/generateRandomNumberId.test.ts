import { generateRandomNumberId } from '../src/utils/generateRandomNumberId';
import { expect, test } from "bun:test";

test('La function retourne bien un nombre à 6 chiffres' , () => {
    const random = generateRandomNumberId();
    const size = random.toString().length;
    expect(size).toBe(6);
});



