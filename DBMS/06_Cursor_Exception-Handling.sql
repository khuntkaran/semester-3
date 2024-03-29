create table PersonLog2
(
	PersonLogID		int				Primary Key,
	PersonName		varchar(250)	Not Null,
	Operation		varchar(50)		Not Null,
	UpdatedDate		datetime		Not Null
)
----1
begin try
	select 10/0
end try
begin catch
	select 'Error Occur that is: '+ERROR_MESSAGE() as Error_msg
end catch

----2
begin try
	declare @date_time varchar(20) = '10/16/2015 21:02:04'
	select CONVERT(datetime,@date_time,5)
end try
begin catch
	select ERROR_MESSAGE() as Error_msg
end catch


----3
create procedure PR_insert_PersonLog2
	@logid int,
	@name varchar(50)
as
begin
	begin try
		insert into PersonLog2 values(@logid,@name,'insert',GETDATE())
	end try
	begin catch
		print 'The PLogID is already taken. Try another one'
	end catch
end

execute PR_insert_PersonLog2 1,kkk


-----4
create procedure Add_Two_No
	@n1 varchar(5),
	@n2 int,
	@result int output
as
begin
	begin try
		set @result=@n1+@n2
	end try
	begin catch
		select
		ERROR_LINE() as errorLine,
		ERROR_MESSAGE() as errorMessage,
		ERROR_NUMBER() as errorNumber,
		ERROR_PROCEDURE() as errorProcedure,
		ERROR_SEVERITY() as errorSeverity,
		ERROR_STATE() as errorState
	end catch
end

declare @sum int
execute Add_Two_No 'k',2,@sum output
print @sum


----5
create procedure PR_if_exist_PersonLog2
	@plogid int
as
begin
	if exists (select * from PersonLog2 where PersonLogID = @plogid)
		print('plogID is avaliable in databae')
	else 
		throw 50005,'error no plogid with this id',1
end

execute PR_if_exist_PersonLog2 11



----6
declare
	@PersonLogID int,
	@PersonName varchar(40);
declare per_cursor cursor
for select
		PersonLogID,
		PersonName
	from 
		PersonLog2;
open per_cursor
fetch next from per_cursor into
	@PersonLogID,
	@PersonName;
while @@FETCH_STATUS=0
	begin
		print cast(@PersonLogID as varchar)+'-'+@PersonName;
		fetch next from per_cursor into
			@PersonLogID,
			@PersonName;
	end;
close per_cursor
deallocate per_cursor



----7
create table Student
(
	id		int,
	rno		int,
	enroll	varchar(11),
	name	varchar(50),
	branch	varchar(50),
	uni		varchar(50)
)
insert into Student values(1,101,'xyz','karan','cse','DU')
insert into Student values(5,105,'xyz','kkk','ce','DU')
insert into Student values(10,110,'xyz','khunt','ee','DU')

declare
	@rno int,
	@branch varchar(50)
declare update_Enroll_student cursor
for select
		rno,
		branch
	from
		Student
open update_Enroll_student
fetch next from update_Enroll_student into
	@rno,
	@branch
while @@FETCH_STATUS=0
	begin
		update Student set enroll='SOE22'+@branch+CONVERT(varchar,@rno) where rno=@rno
		fetch next from update_Enroll_student into
			@rno,
			@branch
	end
close update_Enroll_student
deallocate update_Enroll_student


select * from Student