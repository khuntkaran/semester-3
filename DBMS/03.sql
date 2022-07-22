Create Table Person
(
	PersonID		int				Primary Key Identity (101, 1),
	PersonName		varchar(100)	Not Null,
	DepartmentID	int				Foreign Key References Department(DepartmentID),
	Salary			decimal(8, 2)	Not Null,
	JoiningDate		datetime		Not Null,
	City			varchar(100)	Not Null
)

Create Table Department
(
	DepartmentId	int				Primary Key Identity (1, 1),
	DepartmentName	varchar(100)	Not Null	Unique,
	DepartmentCode	varchar(50)		Not Null	Unique,
	Location		varchar(50)		Not Null
)



Insert into Department Values ('Admin', 'Adm', 'A-Block')
Insert into Department Values ('Computer', 'CE', 'C-Block')
Insert into Department Values ('Civil', 'CI', 'G-Block')
Insert into Department Values ('Electrical', 'EE', 'E-Block')
Insert into Department Values ('Mechanical', 'ME', 'B-Block')


Insert into Person Values ('Rahul Tripathi', 2, 56000, '2000-01-01', 'Rajkot')
Insert into Person Values ('Hardik Pandya', 3, 18000, '2001-09-25', 'Ahmedabad')
Insert into Person Values ('Bhavin Kanani', 4, 25000, '2000-05-14', 'Baroda')
Insert into Person Values ('Bhoomi Vaishnav', 1, 39000, '2005-02-08', 'Rajkot')
Insert into Person Values ('Rohit Topiya', 2, 17000, '2001-07-23', 'Jamnagar')
Insert into Person Values ('Priya Menpara', Null, 9000, '2000-10-18', 'Ahmedabad')
Insert into Person Values ('Neha Sharma', 2, 34000, '2002-12-25', 'Rajkot')
Insert into Person Values ('Nayan Goswami', 3, 25000, '2001-07-01', 'Rajkot')
Insert into Person Values ('Mehul Bhundiya', 4, 13500, '2005-09-01', 'Baroda')
Insert into Person Values ('Mohit Maru', 5, 14000, '2000-05-25', 'Jamnagar')



1.	select Person.PersonName,Department.DepartmentName,Department.DepartmentCode
	from Person
	left outer join Department
	on Person.DepartmentID=Department.DepartmentId

2.	select Department.DepartmentName,max(Salary),min(salary)
	from Person
	right outer join Department
	on Person.DepartmentID=Department.DepartmentId
	group by Department.DepartmentName

3.	select Department.DepartmentName,sum(salary)
	from Person
	right outer join Department
	on Person.DepartmentID=Department.DepartmentId
	group by Department.DepartmentName
	having sum(Salary)>100000

4.	select Person.PersonName,Department.DepartmentName,Person.Salary
	from Person
	left outer join Department
	on Person.DepartmentID=Department.DepartmentId
	where Person.City ='jamnagar'

5.	select Person.PersonName
	from Person
	left outer join Department
	on Person.DepartmentID=Department.DepartmentId
	where Person.DepartmentID is null

6.	select Department.DepartmentName,COUNT(Person.PersonID)
	from Person
	right outer join Department
	on Person.DepartmentID=Department.DepartmentId
	group by Department.DepartmentName

7.	select Person.City,avg(Person.Salary)
	from Person
	left outer join Department
	on Person.DepartmentID=Department.DepartmentId
	where Person.City ='Ahmedabad'
	group by City

8.	select Person.PersonName+' earns '+cast(Person.Salary as varchar)+' from department '+Department.DepartmentName+' monthly.'
	from Person
	left outer join Department
	on Person.DepartmentID=Department.DepartmentId

9.	select Department.DepartmentName,count(Person.PersonID)
	from Person
	right outer join Department
	on Person.DepartmentID=Department.DepartmentId
	group by Department.DepartmentName
	having count(Person.PersonID)<1

10.	select Department.DepartmentName,Person.City,avg(Salary),max(Salary),min(salary)
	from Person
	right outer join Department
	on Person.DepartmentID=Department.DepartmentId
	group by Department.DepartmentName,Person.City

11.	select distinct(city) from Person

12.	select Department.DepartmentName,count(Person.PersonID)
	from Person
	right outer join Department
	on Person.DepartmentID=Department.DepartmentId
	group by Department.DepartmentName
	having count(Person.PersonID)>2

13.	select SUBSTRING(PersonName,1,3)+SUBSTRING(city,len(city)-2,len(City)) from Person

14.	select PersonName,Department.DepartmentName,Salary+Salary*.10
	from Person
	inner join Department
	on Person.DepartmentID=Department.DepartmentId
	where DepartmentName='Computer'

15.	select PersonName
	from Person
	where DATEDIFF(day,JoiningDate,GETDATE())>365
