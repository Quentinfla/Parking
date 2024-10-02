
export function toSlug (str: string): string {
    let slug = str.toLowerCase();
    const accent = [
        { base: 'a', letters: /[àâä]/g },
        { base: 'e', letters: /[éèêë]/g },
        { base: 'i', letters: /[îï]/g },
        { base: 'o', letters: /[ôö]/g },
        { base: 'u', letters: /[ùûü]/g },
        { base: 'c', letters: /[ç]/g },
    ];

    accent.forEach(({ base, letters }) => {
        slug = slug.replace(letters, base);
    });
    slug = slug.replace(/[^a-zA-Z0-9 ]/g, '');
    slug = slug.trim().replace(/\s+/g, '-');

    return slug;
}
