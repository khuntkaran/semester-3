
Create Table Person(
	PersonID		int				Primary Key,
	PersonName		varchar(50)		Not Null,
	Salary			decimal(8,2)	Not Null,
	JoiningDate		datetime		Not Null,
	City			varchar(50)		Not Null,
	Age				int 			null,
	BirthDate		datetime		Not Null
)


Create Table PersonLog(
	PersonLogID		int				Primary Key Identity(2101, 1),
	PersonID		int				Not Null,
	PersonName		varchar(250)	Not Null,
	Operation		varchar(50)		Not Null,
	UpdatedDate		datetime		Not Null
)



------------1--------------------------
create procedure PR_Isert_Person
	@PersonID		int,
	@PersonName		varchar(50),
	@Salary			decimal(8,2),
	@JoiningDate	datetime,	
	@City			varchar(50),
	@Age			int,	
	@BirthDate		datetime
as
	insert into Person values(@PersonID,@PersonName,@Salary,@JoiningDate,@City,@Age,@BirthDate)

create procedure PR_update_Person
	@PersonID		int,
	@PersonName		varchar(50),
	@Salary			decimal(8,2),
	@JoiningDate	datetime,	
	@City			varchar(50),
	@Age			int,	
	@BirthDate		datetime
as
	update Person set	PersonName= @PersonName,
						Salary=@Salary,
						JoiningDate=@JoiningDate,
						City=@City,
						Age=@Age,
						BirthDate=@BirthDate 
	where PersonID=@PersonID

create procedure PR_Delete_Person
	@PersonID		int
as
	delete from Person where PersonID=@PersonID



---------------2------------
create Trigger TR_For_Insert_Person
on Person
For insert
as
Begin
	declare @PersonID int,@PersonName varchar(250)
	select @PersonID=PersonID,@PersonName=PersonName from inserted
	insert into PersonLog values(@PersonID,@PersonName,'After Insert',GETDATE())
End

create Trigger TR_For_Update_Person
on Person
For Update
as
Begin
	declare @PersonId int,@PersonName varchar(50)
	select @PersonId=PersonId,@PersonName=PersonName from inserted
	Insert into PersonLog values(@PersonId,@PersonName,'After Update',GETDATE())
End

create Trigger TR_FOR_Delete_Person
on Person
for delete
as
Begin
	declare @PersonId int,@PersonName varchar(50)
	select @PersonId=PersonId,@PersonName=PersonName from deleted
	insert into PersonLog values(@PersonId,@PersonName,'After delete',getdate())
End



------------3-------------

create Trigger TR_insteadOf_insert_Person
on Person
Instead of insert
as
Begin
	declare @personID int, @personName varchar(50)
	select @personID=personID,@personName=personName from inserted
	insert into PersonLog values(@personID,@personName,'Before Insert',GETDATE())
End





execute PR_Isert_Person 101,'karan',150000,'2023-07-16','rajkot',20,'2004-07-16'
execute PR_update_Person 101,'khunt karan',200000,'2023-08-26','Rajkot',20,'2004-07-16'
execute PR_Delete_Person 101
select * from Person
select * from PersonLog

execute PR_Isert_Person 505,'raj',5421,'2022-05-08','rajkot',25,'2000-12-31'
insert into person values(505,'raj',5421,'2022-05-08','rajkot',25,'2000-12-31')