create database if not exists college;
use college;
create table user(
id int primary key,
age int check(age>=18 and age<=40),
name varchar(50) not null unique,
email varchar(50) unique,
follower int default 0,
following int default 0
);

--this is how you insert in the table
insert into user
(id,age,name,email,follower,following)
values
(1,20,"Alvi","ahmadfahmid59@gmail.com",12,21),
(2,18,"Anas","anas@gmail.com",34,43),
(3,21,"Sami","sami@gmail.com",54,45),
(4,22,"Sakib","sakib@gmail.com",76,67);


CREATE INDEX idx_user_id ON user(id);

create table post(
	id int primary key,
    content varchar(100),
    user_id int NOT NULL,
    foreign key (user_id) references user(id)
);

--this is how you insert in the table
INSERT INTO post (id, content, user_id)
VALUES
(1, 'First post content', 1),
(2, 'Second post content', 2),
(3, 'Third post content', 3),
(4, 'Fourth post content', 4);

select *from user;
select *from post;

