DROP TABLE IF EXISTS events;

CREATE TABLE IF NOT EXISTS events (
  id serial PRIMARY KEY,
  imageURL varchar(100),
  artist varchar(50),
  _date varchar(30),
  city varchar(30)
);