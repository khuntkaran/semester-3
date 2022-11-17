import {useEffect, useState} from 'react'
const StudentName = ()=>{
     const [data, setdata] = useState([]);
     useEffect(()=>{
        fetch('http://localhost:3003/studentname',{
            method:"GET"
        })
     .then((res)=>res.json())
     .then((res)=>{setdata(res)})
    },[])
    console.log(data);
    const AllStudentName = data.map((stu) => {
        return <h1>{stu.Name}</h1>;
      });
    return(
        <>
            {AllStudentName}
        </>
    )
}

export default StudentName;