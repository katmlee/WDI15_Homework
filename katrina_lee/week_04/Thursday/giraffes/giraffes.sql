CREATE TABLE giraffes(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  image TEXT,
  city TEXT,
  birthday DATE,
  occupation TEXT,
  fav_food TEXT,
  hobby TEXT,
  bm_contribution TEXT,
  fav_bm_memory TEXT,
  anything_else TEXT
);

INSERT INTO giraffes (first_name, last_name, image, city, birthday, occupation, fav_food, hobby, bm_contribution, fav_bm_memory, anything_else) VALUES('Alex', 'Wolfe', 'http://alexkwolfe.com/wp-content/uploads/Photo-Jul-11-1-44-16-PM-768x1024.jpg', 'Castro, San Francisco', '1990-05-16','Kick-ass FE Developer', 'Any kind of noodle soup, usually ramen.', 'ANYTHING crafty: sewing costumes, cooking parchmant paper fish, beautifying the labyrinth!', 'Making awesome bamboo guard giraffes and painting faces!', 'from katrina: finding the camp with stripper poles', 'I AM WOLFE.');
