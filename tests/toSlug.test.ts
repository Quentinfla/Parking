import { toSlug } from '../src/utils/toSlug';
import { expect, test } from "bun:test";

test('La function retourne bien un slug en miniscule, sans accent et sans caractères spéciaux' , () => {
    const slug = toSlug("Ceci est un test, après la réalisation de toSlug");
    expect(slug).toBe("ceci-est-un-test-apres-la-realisation-de-toslug");
});



