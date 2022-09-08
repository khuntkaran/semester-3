create table PersonLog2
(
	PersonLogID		int				Primary Key,
	PersonName		varchar(250)	Not Null,
	Operation		varchar(50)		Not Null,
	UpdatedDate		datetime		Not Null
)