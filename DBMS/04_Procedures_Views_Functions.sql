Create Table Designation(
	DesignationID		int				Primary Key	Identity(11, 1),
	DesignationName		varchar(100)	Not Null	Unique
)



Create Table Department2(
	DepartmentID		int				Primary Key Identity(1, 1),
	DepartmentName		varchar(100)	Not Null	Unique
)



Create Table Person2(
	WorkerID			int				Primary Key Identity(101, 1),
	FirstName			varchar(100)	Not Null,
	LastName			varchar(100)	Not Null,
	Salary				decimal(8, 2)	Not Null,
	JoiningDate			datetime		Not Null,
	DepartmentID		int				Foreign Key References Department(DepartmentID),
	DesignationID		int				Foreign Key	References Designation(DesignationID)
)



------------- Records ------------

Insert into Designation Values ('Jobber')
Insert into Designation Values ('Welder')
Insert into Designation Values ('Clerk')
Insert into Designation Values ('Manager')
Insert into Designation Values ('CEO')


Insert into Department2 Values ('Admin')
Insert into Department2 Values ('IT')
Insert into Department2 Values ('HR')
Insert into Department2 Values ('Account')


Insert into Person2 Values ('Rahul', 'Anshu', 56000, '1990-01-01', 1, 12)
Insert into Person2 Values ('Hardik', 'Hinsu', 18000, '1990-09-25', 2, 11)
Insert into Person2 Values ('Bhavin', 'Kamani', 25000, '1991-05-14', Null, 11)
Insert into Person2 Values ('Bhoomi', 'Patel', 39000, '2014-02-20', 1, 13)
Insert into Person2 Values ('Rohit', 'Rajgor', 17000, '1990-07-23', 2, 15)
Insert into Person2 Values ('Priya ', 'Mehta', 25000, '1990-10-18', 2, Null)
Insert into Person2 Values ('Neha', 'Trivedi', 18000, '2014-02-20', 3, 15)


---stored procedure---

---------1.-----------

		------(i). insert--------
		create procedure PR_Person_Insert
		@FirstName			varchar(100),
		@LastName			varchar(100),	
		@Salary				decimal(8, 2),	
		@JoiningDate		datetime,	
		@DepartmentID		int,	
		@DesignationID		int			
		as
		begin
			insert into Person2 values (@FirstName,@LastName,@Salary,@JoiningDate,@DepartmentID,@DesignationID)
		end

		execute PR_Person_Insert 'kiya', 'sah', 18000, '2014-02-20', 3, 15


		create procedure PR_Designation_insert
		@DesignationName		varchar(100)
		as
		begin
			insert into Designation values(@DesignationName)
		end

		execute PR_Designation_insert 'pune'

		create procedure PR_Department_insert
		@DepartmentName		varchar(100)
		as
		begin
			insert into Department2 values(@DepartmentName)
		end

		execute PR_Department_insert 'transport'


		-----(ii). update------
		create procedure PR_Person_update
		@WorkerID			int,	
		@FirstName			varchar(100),
		@LastName			varchar(100),	
		@Salary				decimal(8, 2),	
		@JoiningDate			datetime,	
		@DepartmentID		int,	
		@DesignationID		int			
		as
		begin
			update Person2 set
				FirstName=@FirstName,
				LastName=@LastName,
				Salary=@Salary,
				JoiningDate=@JoiningDate,
				DepartmentID=@DepartmentID,
				DesignationID=@DesignationID
				WHERE WorkerID=@WorkerID
		end

		execute PR_Person_update 108, 'name', '2name', 1000, '2014-02-20', 2, 15


		create procedure PR_Designation_update
		@DesignationID		int,
		@DesignationName		varchar(100)
		as
		begin
			update Designation set DesignationName=@DesignationName where DesignationID=@DesignationID
		end

		execute PR_Designation_update 16,'ONER'

		create procedure PR_Department_update
		@DepartmentID		int,
		@DepartmentName		varchar(100)
		as
		begin
			update Department2 set DepartmentName=@DepartmentName where DepartmentID =@DepartmentID
		end

		execute PR_Department_update 5,'Transport'




		-----(iii). delete-----

		create procedure PR_Person_delete
		@WorkerID			int
		as
		begin
			delete from Person2 where WorkerID=@WorkerID
		end

		execute PR_Person_delete 108


		create procedure PR_Designation_delete
		@DesignationID		int
		as
		begin
			delete from Designation where DesignationID=@DesignationID
		end

		execute PR_Designation_delete 16

		create procedure PR_Department_delete
		@DepartmentID		int
		as
		begin
			delete from Department2 where DepartmentID =@DepartmentID
		end

		execute PR_Department_delete 5




-------2.--------
	create procedure PR_All_Info
	as
	begin
		select FirstName,lastname,Salary,JoiningDate,DepartmentName,DesignationName
		from Person2
		inner join Department2
		on Person2.DepartmentID=Department2.DepartmentID
		inner join Designation
		on Person2.DesignationID=Designation.DesignationID
	end

	execute PR_All_Info

------3-------
		create procedure PR_Person_selectpk
		@WorkerID			int
		as
		begin
			select * from Person2 where WorkerID=@WorkerID
		end

		execute PR_Person_selectpk 105


		create procedure PR_Designation_selectpk
		@DesignationID		int
		as
		begin
			select * from Designation where DesignationID=@DesignationID
		end

		execute PR_Designation_selectpk 15

		create procedure PR_Department_selectpk
		@DepartmentID		int
		as
		begin
			select * from Department2 where DepartmentID =@DepartmentID
		end

		execute PR_Department_selectpk 4




-----4-----
	create procedure PR_Take_DepartmentName_DesignationName
	@DepartmentName varchar(100),
	@DesignationName varchar(100)
	as
	begin
		select FirstName,Salary,JoiningDate,DepartmentName
		from Person2
		inner join Department2
		on Person2.DepartmentID=Department2.DepartmentID
		where DesignationID= (select DesignationID from Designation where DesignationName= @DesignationName)
		group by FirstName,Salary,JoiningDate,DepartmentName
		having DepartmentName= @DepartmentName
	end

	execute PR_Take_DepartmentName_DesignationName 'Admin','Welder'



----5----
	create procedure PR_All_Info_On_Name
	@FirstName varchar(100)
	as
	begin
		select FirstName,lastname,Salary,JoiningDate,DepartmentName,DesignationName
		from Person2
		inner join Department2
		on Person2.DepartmentID=Department2.DepartmentID
		inner join Designation
		on Person2.DesignationID=Designation.DesignationID
		where FirstName=@FirstName
	end

	execute PR_All_Info_On_Name 'rahul'


-----6------
	create procedure PR_Department_wise_Salary
	as
	begin
		select DepartmentName,max(Salary) as Maximum,min(Salary) as Minimum,sum(Salary) as Total
		from Person2
		right outer join Department2
		on Person2.DepartmentID=Department2.DepartmentID
		group by DepartmentName
	end

	execute PR_Department_wise_Salary

		
		

-------------views------------
-------1-------
	create view display_top_100
	as
	select top 100 * from Person



	select * from display_top_100



------2-----
	create view designation_wise
	as
	select DesignationName,max(Salary)as maximun,min(Salary) as minimum,sum(Salary) as total
	from Person
	inner join Designation
	on Person.DesignationID=Designation.DesignationID
	group by DesignationName


	select * from designation_wise



-----3------
	create view duraton
	as
	select FirstName ,Salary,JoiningDate,DATEDIFF(year,JoiningDate,getdate())as date_duration_in_day from Person


	select * from duraton


-----4------
	create view DepartmentName_DesignationName_wise_person
	as
	select DepartmentName,DesignationName ,count(WorkerID)as person_number
		from Person
		inner join Department
		on Person.DepartmentID=Department.DepartmentID
		inner join Designation
		on Person.DesignationID=designation.DesignationID
		group by DepartmentName,DesignationName
	
	select * from DepartmentName_DesignationName_wise_person



------5------
	create view either_in_any_Designation_Department
	as
	select * from Person where DepartmentID is null or DesignationID is null


	select * from either_in_any_Designation_Department

--------user difined function----------

------1------
	create function deptId(@DepartmentID int)
	returns table
	as
		return(select * from Person where DepartmentID = @DepartmentID)


		select * from deptId(4)

-------2------


-----3------
	create function datedifference(@Startdate datetime,@Enddate datetime)
	returns int
	as
	begin
		return(datediff(day,@Startdate,@Enddate))
	end

	select dbo.datedifference('2004-07-16',getdate())



------4-------
	create function convert_in_day(@year int,@month int)
	returns int
	as
	begin
		return((@year*365)+(@month*30))
	end

	select dbo.convert_in_day(1,1)
