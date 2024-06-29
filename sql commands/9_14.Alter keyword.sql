--this is how you can add a coloum to the table
alter table user
add column city varchar(40) default "dhaka";

--this is how you can delete a coloum 

alter table user
drop column age;

--this is how you can change the name of the table
alter table user
rename to insta_user;

SELECT * FROM insta_user;

--this is how you can change the name of the  coloum
alter table insta_user
change column follower roll int default 0;


--this is how you can change a coloums data type or contraints

alter table insta_user
modify column roll varchar(50) default 0;

