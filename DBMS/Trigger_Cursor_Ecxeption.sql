create database demofor

create table maintable(
	invaluse varchar(50)
)

create table demotable(
	outvaluse varchar(50)
)



insert into maintable values('01')
update maintable set invaluse='001' where invaluse='01'
delete from maintable where invaluse='001'


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