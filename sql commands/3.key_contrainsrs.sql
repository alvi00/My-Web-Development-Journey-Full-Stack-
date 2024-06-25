create database if not exists college;
use college;
--primary key makes the coloum unique and not null
create table user(
id int primary key,
age int check(age>=18 and age<=40),
name varchar(50) not null unique,
email varchar(50) unique,
follower int default 0,
following int default 0
);

CREATE INDEX idx_user_id ON user(id);

create table post(
	id int primary key,
    content varchar(100),
    user_id int NOT NULL,
    foreign key (user_id) references user(id)
);

--what happened is foreign key make the relation between two tables
--i want to use the id from the user table to this post table
--so at first i made index by create index
--then i used foreign key to use that

--ctrl+r helps us to make a er or uml diagram