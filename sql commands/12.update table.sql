--this line have to run 
set SQL_SAFE_UPDATES=0;

--update the row 
--make all the follower to 100 to whom who has age>=21
update user
set follower=100
where age>=21;


SELECT * FROM USER;