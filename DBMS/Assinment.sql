1.	create procedure PR_MST_city_selectAll
	as
	begin
		select city_id,city_name,pincode,MST_state.stateid,remarks,statename
		from MST_city
		inner join MST_state
		on MST_city.stateid=MST_state.stateid
	end

	exec PR_MST_city_selectAll


2.	create procedure PR_MST_city_insert
	@cityid		int,
	@cityname	varchar(50),
	@pincode	varchar(6),
	@stateid	int,
	@cityremark	varchar(500)
	as
	begin
		insert into MST_city values(@cityid,@cityname,@pincode,@stateid,@cityremark)
	end

	exec PR_MST_city_insert 5,'jamnagar','360002',1,'wow!!'


3.	create procedure PR_MST_city_update
	@cityid		int,
	@cityname	varchar(50),
	@pincode	varchar(6),
	@stateid	int,
	@cityremark	varchar(500)
	as
	begin
		update MST_city set city_name =@cityname,
							pincode = @pincode,
							stateid = @stateid,
							remarks = @cityremark

		 where city_id=@cityid
	end

	exec PR_MST_city_update 5,'kota','360002',2,'goods'


4.	create procedure PR_MST_city_delete
	@cityid		int
	as
	begin
		delete from MST_city where city_id = @cityid
	end

	exec PR_MST_city_delete 5


5.	create procedure PR_MST_city_selectbypk
	@cityid		int
	as
	begin
		select *  from MST_city where city_id = @cityid
	end

	exec PR_MST_city_selectbypk 4


6.	create procedure PR_MST_city_selectbypincode
	as
	begin
		select * from MST_city where pincode like'360%'
	end

	exec PR_MST_city_selectbypincode


7.	create procedure PR_MST_city_selectbycitynamepincode
	@cityname		varchar(50),
	@pincode		varchar(50)
	as
	begin
		select * from MST_city where pincode=@pincode and city_name=@cityname
	end

	exec PR_MST_city_selectbycitynamepincode 'rajkot','360005'


8.	create procedure PR_MST_city_selectByCityRemarks
	@remarks	varchar(50)
	as
	begin
		select * from MST_city where remarks=@remarks
	end

	exec PR_MST_city_selectByCityRemarks 'good'


9.	create procedure PR_MST_city_SelectByStateID
	@stateid	int
	as
	begin
		select * from MST_city where stateid=@stateid
	end

	exec PR_MST_city_SelectByStateID 1


10.	create procedure PR_MST_city_SelectByStateIDCityID
	@stateid	int,
	@cityid		int
	as
	begin
		select * from MST_city where stateid=@stateid and city_id=@cityid
	end

	exec PR_MST_city_SelectByStateIDCityID 1,2