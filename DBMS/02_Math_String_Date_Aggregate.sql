Create Table Employee(
	EID int,
	EName varchar(100),
	Gender varchar(10),
	JoiningDate datetime,
	Salary decimal(8,2),
	City varchar(100)
)



Insert into Employee Values (1, 'Nick', 'Male', '01-Jan-13', 4000, 'London')
Insert into Employee Values (2, 'Julian', 'Female', '01-Oct-14', 3000, 'New York')
Insert into Employee Values (3, 'Roy', 'Male', '01-Jun-16', 3500, 'London')
Insert into Employee Values (4, 'Tom', 'Male', Null, 4500, 'London')
Insert into Employee Values (5, 'Jerry', 'Male', '01-Feb-13', 2800, 'Sydney')
Insert into Employee Values (6, 'Philip', 'Male', '01-Jan-15', 7000, 'New York')
Insert into Employee Values (7, 'Sara', 'Female', '01-Aug-17', 4800, 'Sydney')
Insert into Employee Values (8, 'Emily', 'Female', '01-Jan-15', 5500, 'New York')
Insert into Employee Values (9, 'Michale', 'Male', Null, 6500, 'London')
Insert into Employee Values (10, 'John', 'Male', '01-Jan-15', 8800, 'London')



--1. Display all the employees whose name starts with “m” and 4 th character is “h”.
	select EName from Employee where ename like 'm__h%'

--2. Find the value of 3 raised to 5. Label the column as output.
	select power(3,5) as output

--3. Write a query to subtract 20 days from the current date.
	select getdate()-20

--4. Write a query to display name of employees whose name starts with “j” and contains “n” in their name.
	select EName from Employee where ename like 'j%n%'

--5. Display 2nd to 9th character of the given string “SQL Programming”.
	select SUBSTRING('SQL PRIGRAMMING',2,8)

--6. Display name of the employees whose city name ends with “ney” &contains six characters.
	select EName from Employee where CITY like '___ney'

--7. Write a query to convert value 15 to string.
	select CONVERT(varchar(10),15)

--8. Add department column with varchar (20) to Employee table.
	alter table employee add department varchar(20)

--9. Set the value of department to Marketing who belongs to London city.
	update Employee set department ='marketing' where city = 'london'

--10. Display all the employees whose name ends with either “n” or “y”.
	select EName from Employee where ename like '%[n,y]'

--11. Find smallest integer value that is greater than or equal to 63.1, 63.8 and -63.2.
	select CEILING(63.1),CEILING(63.8),CEILING(-63.8)

--12. Display all employees whose joining date is not available.
	select EName from Employee where JoiningDate is null

--13. Display name of the employees in capital letters and city in small letters.
	select upper(ename),LOWER(city) from Employee

--14. Change the data type of Ename from varchar (100) to char (30).
	alter table employee alter column ename char(30)

--15. Display city wise maximum salary.
	select city, max(salary)
	from Employee
	group by city
	
--16. Produce output like <Ename> works at <city> and earns <salary> (In single column).
	select rtrim(ename) + ' works at ' + city + ' and earns ' + CAST(salary as varchar) from Employee

--17. Find total number of employees whose salary is more than 5000.
	select COUNT(eid) from Employee where salary>5000

--18. Write a query to display first 4 & last 3 characters of all the employees.
	select SUBSTRING(ename,1,4),SUBSTRING(ename,len(ename)-2,3) from Employee
	select LEFT(ename,4) ,right(rtrim(ename),3)from Employee

--19. List the city having total salaries more than 15000 and employees joined after 1st January, 2014.
	select city 
	from Employee
	where JoiningDate>'2014-01-01'
	group by city
	having sum(salary)>15000

--20. Write a query to replace “u” with “oo” in Ename.
	select REPLACE(ename,'u','oo') from Employee

--21. Display city with average salaries and total number of employees belongs to each city.
	select city,avg(salary) as average_salaries ,count(EID) as total_number
	from Employee
	group by city

--22. Display total salaries paid to female employees.
	select sum(salary) as total_salaries
	from Employee
	where Gender='female'

--23. Display name of the employees and their experience in years.
	select ename,datediff(year,JoiningDate,getdate()) from Employee

--24. Remove column department from employee table.
	alter table employee drop column department

--25. Update the value of city from syndey to null.
	update Employee set city=null where city='sydney'

--26. Retrieve all Employee name, Salary & Joining date.
	select ename,salary,joiningdate from Employee

--27. Find out combine length of Ename & Gender.
	select len(ename)+len(gender) from Employee

--28. Find the difference between highest & lowest salary.
	select max(salary)-min(salary) from Employee

--29. Rename a column from Ename to FirstName.
	sp_rename 'employee.ename','FirstName'

--30. Rename a table from Employee to EmpMaster.
	sp_rename 'employee','EmpMaster'