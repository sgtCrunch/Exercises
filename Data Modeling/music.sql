-- Added artists, producers and albums tables to remove info from songs table
-- Then added relational table for featrues on songs so that we don't use lists on the songs table
-- Added table for producters on songs so that we don't use lists on Songs table

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music



CREATE TABLE artists
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE producers
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE albums
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);


CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL,
  album_id int REFERENCES albums,
  title_artist_id int REFERENCES artists
);


CREATE TABLE features
(
  id SERIAL PRIMARY KEY,
  song_id int REFERENCES songs,
  artist_id int REFERENCES artists
);

CREATE TABLE producers_on_song
(
  id SERIAL PRIMARY KEY,
  song_id int REFERENCES songs,
  producer_id int REFERENCES producers
);


INSERT INTO artists
  (name)
VALUES
  ('Hanson'),
  ('Queen'),
  ('Mariah Cary'),
  ('Boyz II Men'),
  ('Lady Gaga'),
  ('Bradley Cooper'),
  ('Nickelback'),
  ('Say My Name');

INSERT INTO producers
  (name)
VALUES
  ('Dust Brothers'),
  ('Stephen Lironi'),
  ('Roy Thomas Baker'),
  ('Walter Afanasieff'),
  ('Benjamin Rice'),
  ('Rick Parashar'),
  ('Rick Parashar');

INSERT INTO albums
  (name)
VALUES
  ('Middle of Nowhere'),
  ('A Night at the Opera'),
  ('Daydream'),
  ('A Star Is Born'),
  ('Silver Side Up');

INSERT INTO songs
  (title, duration_in_seconds, release_date, title_artist_id, album_id)
VALUES
  ('MMMBop', 238, '04-15-1997', 1, 1),
  ('Bohemian Rhapsody', 355, '10-31-1975', 2, 2),
  ('One Sweet Day', 282, '11-14-1995', 3, 3),
  ('Shallow', 216, '09-27-2018', 5, 4),
  ('How You Remind Me', 223, '08-21-2001', 6, 5);

INSERT INTO features
  (song_id, artist_id)
VALUES
  (1, 1),
  (1, 2),
  (3, 3),
  (5, 4),
  (5, 5);

INSERT INTO producers_on_song
  (song_id, producer_id)
VALUES
  (1, 1),
  (1, 2),
  (3, 3),
  (5, 4),
  (5, 5);