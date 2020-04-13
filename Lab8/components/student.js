import React from "react";
import Course from "./courses";

const Student = props => {
    let courses = []
    for(var i=0; i<props.enrolled; i++){
        courses.push(<Course enrolled={i} />)
    }
    return ( 
    <>
        <p>Student <b>{props.name}</b> with student number <b>{props.number}</b></p>
        <p>Student is enrolled in {courses}</p>
    </>
    );
}
 
export default Student;