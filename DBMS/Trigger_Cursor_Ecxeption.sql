create database demofor

create table maintable(
	invaluse varchar(50)
)

create table demotable(
	outvaluse varchar(50)
)



insert into maintable values('04')
update maintable set invaluse='001' where invaluse='01'
delete from maintable where invaluse='001'



-------- Trigger-------------

create trigger mainmassege
on maintable
after insert,update,delete
as
begin
	print 'record affecter'
end


create trigger main_insert
on maintable
for insert
as
begin
	declare @insertvalue varchar(50)
	select @insertvalue=invaluse from inserted
	insert into demotable values('recored insert : '+@insertvalue+' at '+CAST(GETDATE() as varchar(20) ) )
end


create trigger main_update
on maintable
for update
as
begin
	declare @updatevalue varchar(50)
	select @updatevalue=invaluse from inserted
	insert into demotable values('recored update : '+@updatevalue+' at '+CAST(GETDATE() as varchar(20) ) )
end


alter trigger main_delete
on maintable
for delete
as
begin
	declare @deletevalue varchar(50)
	select @deletevalue=invaluse from deleted
	insert into demotable values('recored delete : '+@deletevalue+' at '+CAST(GETDATE() as varchar(20) ) )
end


select * from demotable
select * from maintable



delete from demotable
delete from maintable


---------- Cursor-----------

declare 
	@invalue	varchar(50);
declare cursor_demo cursor
for select
		invaluse
	from
		maintable;
open cursor_demo;
fetch next from cursor_demo into
	@invalue;
while @@FETCH_STATUS = 0
	begin
		insert into demotable values('cursor : '+@invalue)
		fetch next from cursor_demo into
		@invalue;
	end
close cursor_demo;
deallocate cursor_demo;



--------Exception Handling--------

CREATE PROC PR_divide
@a decimal,
@b decimal,
@c decimal output
AS
BEGIN
BEGIN TRY
SET @c = @a / @b;
END TRY
BEGIN CATCH
SELECT
ERROR_NUMBER() AS ErrorNumber
,ERROR_SEVERITY() AS ErrorSeverity
,ERROR_STATE() AS ErrorState
,ERROR_PROCEDURE() AS ErrorProcedure
,ERROR_LINE() AS ErrorLine
,ERROR_MESSAGE() AS ErrorMessage;
END CATCH
END;

--Executing a procedure
DECLARE @r decimal;
EXEC PR_divide 10, 2, @r output;
PRINT @r;
--Output
5

--Executing a procedure
DECLARE @r decimal;
EXEC PR_divide 10, 0, @r output;
PRINT @r;