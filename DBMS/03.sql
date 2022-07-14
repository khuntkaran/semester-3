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