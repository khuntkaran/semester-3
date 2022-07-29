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


Insert into Department Values ('Admin')
Insert into Department Values ('IT')
Insert into Department Values ('HR')
Insert into Department Values ('Account')


Insert into Person Values ('Rahul', 'Anshu', 56000, '1990-01-01', 1, 12)
Insert into Person Values ('Hardik', 'Hinsu', 18000, '1990-09-25', 2, 11)
Insert into Person Values ('Bhavin', 'Kamani', 25000, '1991-05-14', Null, 11)
Insert into Person Values ('Bhoomi', 'Patel', 39000, '2014-02-20', 1, 13)
Insert into Person Values ('Rohit', 'Rajgor', 17000, '1990-07-23', 2, 15)
Insert into Person Values ('Priya ', 'Mehta', 25000, '1990-10-18', 2, Null)
Insert into Person Values ('Neha', 'Trivedi', 18000, '2014-02-20', 3, 15)


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
			insert into Person values (@FirstName,@LastName,@Salary,@JoiningDate,@DepartmentID,@DesignationID)
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
			insert into Department values(@DepartmentName)
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
			update Person set
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
			update Department set DepartmentName=@DepartmentName where DepartmentID =@DepartmentID
		end

		execute PR_Department_update 6,'Transport'




		-----(iii). delete-----

		create procedure PR_Person_delete
		@WorkerID			int
		as
		begin
			delete from Person where WorkerID=@WorkerID
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
			delete from Department where DepartmentID =@DepartmentID
		end

		execute PR_Department_delete 5




	-------2.--------
	create procedure PR_All_Info
	as
	begin
		select FirstName,lastname,Salary,JoiningDate,DepartmentName,DesignationName
		from Person
		inner join Department
		on Person.DepartmentID=Department.DepartmentID
		inner join Designation
		on Person.DesignationID=Designation.DesignationID
	end

	execute PR_All_Info

	------3-------
	create procedure PR_Person_selectpk
		@WorkerID			int
		as
		begin
			select * from Person where WorkerID=@WorkerID
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
			select * from Department where DepartmentID =@DepartmentID
		end

		execute PR_Department_selectpk 4




	-----4-----
	create procedure PR_Take_DepartmentName_DesignationName
	@DepartmentName varchar(100),
	@DesignationName varchar(100)
	as
	begin
		select FirstName,Salary,JoiningDate,DepartmentName
		from Person
		inner join Department
		on Person.DepartmentID=Department.DepartmentID
		where DesignationID= (select DesignationID from Designation where DesignationName= @DesignationName)
		group by FirstName,Salary,JoiningDate,DepartmentName
		having DepartmentName= @DepartmentName
	end

	execute PR_Take_DepartmentName_DesignationName 'Admin','Welder'



	----5----


		
