select age, max(follower)
from user
group by age;

--here what is does is at first make groups based on age, then apply the aggreagation functions on the groups
--so here i will find the groups then find out who have max follower among them
