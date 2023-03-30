

--Make a moons table and added a one to many relationship to normalize the data

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL,
  galaxy TEXT NOT NULL
);

CREATE TABLE moons
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  planet_id int NOT NULL REFERENCES planets
);

INSERT INTO planets
  (name, orbital_period_in_years, orbits_around, galaxy)
VALUES
  ('Earth', 1.00, 'The Sun', 'Milky Way'),
  ('Mars', 1.88, 'The Sun', 'Milky Way'),
  ('Venus', 0.62, 'The Sun', 'Milky Way'),
  ('Neptune', 164.8, 'The Sun', 'Milky Way'),
  ('Proxima Centauri b', 0.03, 'Proxima Centauri', 'Milky Way'),
  ('Gliese 876 b', 0.23, 'Gliese 876', 'Milky Way');

INSERT INTO moons
  (name, planet_id)
VALUES
  ('The Moon', 1),
  ('Phobos', 2),
  ('Deimos', 2),
  ('Naiad', 4),
  ('Thalassa', 4),
  ('Despina', 4);