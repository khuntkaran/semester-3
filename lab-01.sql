1. Display Name of Student who belongs to either Semester 3 or 5. (Use IN & OR)
	select Name from Student where Sem in(3,5)
	select Name from Student where Sem =3 or sem = 5

2. Find Student Name & Enrollment No in which Student Id between 103 to 105.
	select Name,Enrollment from Student where Stuid between 103 and 105

3. Find Student Name & Enrollment No with their Email Who belongs to 5th Semester.
	select Name,Enrollment from Student where Email is null and Sem =5

4. Display All the Details of first three students.
	select top 3 * from Student

5. Display Name & Enrollment no of first 30% Students who’s contact number ends with 7.
	select top 30 percent name, enrollment from Student where ContactNo like '%7'

6. Display Unique Semesters.
	select distinct sem from student

7. Retrieve All the Students who have no Enrollment.
	select * from student where enrollment is null

8. Find All Students whose Name does not start with ‘V’.
	select name from student where name not like 'v%'

9. Find All Students in which Email Contains ‘3@G’ & Only Six Characters.
	select name from student where email like '%3@g%' and email like'______'

10. Find Out All the Students whose First Name Starts with F And third character must be R.
	select name from student where name like 'f_r%'

11. Find All the Student Details whose Contact No contains 877.
	select name from student where contactno like '%877%'

12. Display Student Name in Which Student belongs to Semester 3 & Contact Number Does Not Contains8 & 9.
	select name from student where sem = 3 and contactno not like '%8%9%'
	 
13. Find Students who born after date 01-01-1990.
	select name from student where birthdate >'1990-01-01'

14. Update Division to BCX-5 & Semester 5 whose Student Id Is 102.
	update student set Divsion = 'BCX-5',sem = 5 where stuid = 102

15. Change the Student’s Name to Firoz Sherasiya in which Email is Firoz.Me@Gmail.Com & Contact No is8885999922.
	update student set Email = 'Firoz.Me@Gmail.Com' ,ContactNo = '8885999922'  where  Name = 'Firoz Sherasiya'

16. Add one more Column City Varchar (50) in Student Table.
	alter table student add City varchar(50)

17. Remove All BCX-3 Division Students.
	delete from student where divsion = 'BCX-3'

18. Change Column Name Email to EmailAddress.
	sp_rename 'student.email','EmailAddress'

19. Write an SQL query to clone a new table Student_New from Student table with all data.
	select * into Student_New from student
		
20. Remove All the Data from Student Table Using Truncate.
	truncate table student
