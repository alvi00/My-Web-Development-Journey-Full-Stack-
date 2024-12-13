--helps to count how many user got age 34
select count(id) from user
where age=34;

--gives the max age from the user coloum's age
select max(age)from user;
select min(age)from user;
select avg(age)from user;
select sum(age)from user;