--here i have created a database
create database if not exists college;
--using the database
use college;
--making a table in the database
--name of the coloum , type of the values of the coloum, constraints
create table user(
id int,
age int check(age>=18 and age<=40),
name varchar(50) not null,
email varchar(50) unique,
follower int default 0,
following int default 0
);
