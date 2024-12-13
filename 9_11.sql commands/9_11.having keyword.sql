--here is having works like where
--where is for table
--having is for grouping

--prints only those groups who have  max(follower)>30
select age, max(follower)
from user
group by age
having max(follower)>30;
