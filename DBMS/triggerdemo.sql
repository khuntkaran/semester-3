create table demo1(
	person varchar
)

create table log(
	message varchar(500)
)

create trigger Insert_demo
on demo1
for insert
as
begin
	print('record insert')
end

create trigger update_demo1
on demo1
for update
as
begin
	print('record update')
end

create trigger delete_demo1
on demo1
for delete
as
begin
	print('delete record')
end

create trigger Insert_demo12
on demo1
for insert
as
begin
	declare @person varchar
	select @person = person from inserted

	insert into log values('insert record : '+@person+' is inserted on '+CAST(getdate() as varchar))
end

create trigger update_demo12
on demo1
for update
as
begin
	declare @person varchar
	select @person = Person from inserted

	insert into log values('update record : '+@person+' is updated on '+cast(getdate() as varchar))
end


create trigger delete_demo12
on demo1
for delete
as
begin
	declare @person varchar
	select @person=Person from deleted

	insert into log values('delete record : '+@person+' is deleted on '+cast(getdate() as varchar))
end


insert into demo1 values(9)
update demo1 set person=1
delete from demo1 where person=1
select * from inserted
select * from demo1
select * from log
delete from log