
--this is the part of where operator 
select *from user
where following>=40;


select age,name,email from user
where age>20 and follower>20;


select age,name,email from user
where age>20 or follower>20;

select age,name,email from user
where age between 20 and 50; 

--check if the compared thing is in the list like here is list (20,21) of not
select age,name,email from user
where age in (20,21); 

select age,name,email from user
where email in ("ahmadfahmid59@gmail.com"); 


select age,name,email from user
where email not in ("ahmadfahmid59@gmail.com"); 