import React from 'react'
import c from "./EyeStudent.module.css"
import { FiX } from "react-icons/fi"

function EyeStudent({ setEyeModal, data }) {

  return (
    <div className={c.modal} onClick={() => setEyeModal(false)}>
      <div className={c.modal_wrapper} onClick={(e) => e.stopPropagation()}>
        <FiX className={c.fix} onClick={() => setEyeModal(false)} />
        <h2>Eye Student</h2>
        <div className={c.eye_info}><h1>ID :</h1> <p>{data.id && data.id}</p></div>
        <div className={c.eye_info}><h1>Fullname :</h1>  <p>{data.fullName && data.fullName}</p></div>
        <div className={c.eye_info}><h1>University Name :</h1>  <p>{data.universityName && data.universityName}</p></div>
        <div className={c.eye_info}><h1>Entrance Year :</h1>  <p>{data.entranceYear && data.entranceYear}</p></div>
        <div className={c.eye_info}><h1>Graduation Year :</h1>  <p>{data.graduationYear && data.graduationYear}</p></div>
        <div className={c.eye_info}><h1>Faculty :</h1>  <p>{data.faculty && data.faculty}</p></div>
        <div className={c.eye_info}><h1>Speciality :</h1>  <p>{data.speciality && data.speciality}</p></div>
        <div className={c.eye_info}><h1>Study Type :</h1>  <p>{data.studyType && data.studyType}</p></div>
        <div className={c.eye_info}><h1>Academic Type :</h1>  <p>{data.academicType && data.academicType}</p></div>
        <div className={c.eye_info}><h1>Diplom Serial :</h1>  <p>{data.diplomaSerial && data.diplomaSerial}</p></div>
        <div className={c.eye_info}><h1>Diploma Registration Number :</h1>  <p>{data.diplomaRegistrationNumber && data.diplomaRegistrationNumber}</p></div>
        <div className={c.eye_info}><h1>Given data :</h1>  <p>{data.givenDate && data.givenDate}</p></div>
        <div className={c.eye_info}><h1>Academic Level :</h1>  <p>{data.academicLevel && data.academicLevel}</p></div>
        <div className={c.eye_info}><h1>Appendix Number :</h1>  <p>{data.appendixNumber && data.appendixNumber}</p></div>
        <div className={c.eye_info}><h1>Organization Id :</h1>  <p>{data.organizationId && data.organizationId}</p></div>
      </div>
    </div>
  )
}

export default EyeStudent