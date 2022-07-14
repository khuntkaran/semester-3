create database sem-3-i

Create Table Student(
	StuID			int,
	Name			varchar(100),
	EnrollmentNo	varchar(12),
	Division		varchar(50),
	Sem				int,
	BirthDate		datetime,
	Email			varchar(100),
	ContactNo		varchar(50)
);





Insert into Student Values (101, 'Naimish Patel', '090200107051', 'BCX-3', 3, '1992-12-06', 'naimishpatel49@gmail.com', '8866205253')
Insert into Student Values (102, 'Firoz A. S.', '090200107090', 'BCY-3', 3, '1994-05-03', 'firoz.me@gmail.com', '8885999922')
Insert into Student Values (103, 'Krunal Vyas', '090243107101', 'BCZ-5', 5, '1984-03-01', 'krunal.vyas@gmail.com', '9990888877')
Insert into Student Values (104, 'Vijay Patel', '090200107102', 'BCX-5', 5, '1985-02-15', 'vijay.patel123@gmail.com', '8787878787')
Insert into Student Values (105, 'Vimal Trivedi', '090200107103', 'BCY-3', 3, '1988-01-20', 'maulik123@gmail.com', '8789564512')



/*1. Display Name of Student who belongs to either Semester 3 or 5. (Use IN & OR)*/
	select Name from Student where Sem in(3,5)
	select Name from Student where Sem =3 or sem = 5

/*2. Find Student Name & Enrollment No in which Student Id between 103 to 105.*/
	select Name,Enrollmentno from Student where Stuid between 103 and 105

/*3. Find Student Name & Enrollment No with their Email Who belongs to 5th Semester.*/
	select Name,Enrollmentno from Student where Email is null and Sem =5

/*4. Display All the Details of first three students.*/
	select top 3 * from Student

/*5. Display Name & Enrollment no of first 30% Students who’s contact number ends with 7.*/
	select top 30 percent name, enrollmentno from Student where ContactNo like '%7'

/*6. Display Unique Semesters.*/
	select distinct sem from student

/*7. Retrieve All the Students who have no Enrollment.*/
	select * from student where enrollmentno is null

/*8. Find All Students whose Name does not start with ‘V’.*/
	select name from student where name not like 'v%'

/*9. Find All Students in which Email Contains ‘3@G’ & Only Six Characters.*/
	select name from student where email like '%3@g%' and email like'______'

/*10. Find Out All the Students whose First Name Starts with F And third character must be R.*/
	select name from student where name like 'f_r%'

/*11. Find All the Student Details whose Contact No contains 877.*/
	select name from student where contactno like '%877%'

/*12. Display Student Name in Which Student belongs to Semester 3 & Contact Number Does Not Contains8 & 9.*/
	select name from student where sem = 3 and contactno not like '%8%9%'
	 
/*13. Find Students who born after date 01-01-1990.*/
	select name from student where birthdate >'1990-01-01'

/*14. Update Division to BCX-5 & Semester 5 whose Student Id Is 102.*/
	update student set Division = 'BCX-5',sem = 5 where stuid = 102

/*15. Change the Student’s Name to Firoz Sherasiya in which Email is Firoz.Me@Gmail.Com & Contact No is8885999922.*/
	update student set Email = 'Firoz.Me@Gmail.Com' ,ContactNo = '8885999922'  where  Name = 'Firoz Sherasiya'

/*16. Add one more Column City Varchar (50) in Student Table.*/
	alter table student add City varchar(50)

/*17. Remove All BCX-3 Division Students.*/
	delete from student where division = 'BCX-3'

/*18. Change Column Name Email to EmailAddress.*/
	sp_rename 'student.email','EmailAddress'

/*19. Write an SQL query to clone a new table Student_New from Student table with all data.*/
	select * into Student_New from student
		
/*20. Remove All the Data from Student Table Using Truncate.*/
	truncate table student