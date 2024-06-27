--by this we sort

--sorting in asecnding order
select age,name,email,follower from user
order by follower asc;

--sorting in desending order
select age,name,email,follower from user
order by follower desc;

--if we write nothing like desc or asc then by default i will be asc
select age,name,email,follower from user
order by age;
