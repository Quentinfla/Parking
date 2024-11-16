import { Database } from "bun:sqlite";

const db = new Database("parking.sqlite", { create: true });


db.run(`
  CREATE TABLE IF NOT EXISTS "cities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE,
    "location" TEXT,
    "country" TEXT NOT NULL
  );
`);

db.run(`
  CREATE TABLE IF NOT EXISTS "parkings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL UNIQUE,
    "location" TEXT,
    "numberOfPlaces" INTEGER NOT NULL,
    "opened" INTEGER NOT NULL DEFAULT 1,
    "hourlyRate" REAL NOT NULL,
    "city_id" INTEGER NOT NULL,
    FOREIGN KEY("city_id") REFERENCES "cities"("id")
  );
`);

db.run(`
  CREATE TABLE IF NOT EXISTS "spots" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parking_id" INTEGER NOT NULL,
    FOREIGN KEY("parking_id") REFERENCES "parkings"("id")
  );
`);

db.run(`
  CREATE TABLE IF NOT EXISTS "parks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startedAt" TEXT NOT NULL,
    "endedAt" TEXT,
    "vehicleNumberPlate" TEXT,
    "spot_id" INTEGER NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    FOREIGN KEY("spot_id") REFERENCES "spots"("id")
  );
`);

const init = () => {
    db.run(`
    INSERT OR IGNORE INTO "cities" (name, slug, location, country)
    VALUES
      ('Aix en Provence', 'aix-en-provence', '43.533329,5.43333', 'France'),
      ('La Spezia', 'la-spezia', '44.238366,9.6912326', 'Italie'),
      ('Aix la Chapelle', 'aix-la-chapelle', '50.776351,6.083862', 'Allemagne'),
      ('San Cristóbal de La Laguna', 'san-cristobal-de-la-laguna', '28.487181,-16.313879', 'Espagne'),
      ('Newcastle upon Tyne', 'newcastle-upon-tyne', '54.9738474,-1.6131572', 'Angleterre');
  `);

    db.run(`
    INSERT OR IGNORE INTO "parkings" (name, location, numberOfPlaces, opened, hourlyRate, city_id)
    VALUES
      ('Parking A', '43.533329,5.43333', 100, 1, 4.5, 1),
      ('Parking B', '44.238366,9.6912326', 50, 1, 3.0, 2),
      ('Parking C', '44.238366,9.6912326', 80, 1, 2.5, 2),
      ('Parking D', '50.776351,6.083862', 40, 1, 2.8, 3),
      ('Parking E', '28.487181,-16.313879', 70, 1, 3.1, 4),
      ('Parking F', '54.9738474,-1.6131572', 60, 1, 2.4, 5),
      ('Parking G', '54.9738474,-1.6131572', 90, 1, 3.2, 5);
  `);
};

init();

export default db;
