import React, { useState } from 'react'
import c from "./CreateStudent.module.css"
import { FiX } from "react-icons/fi"
import user_register from '../../api/privite_api';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { studendIdAction } from '../../redux/actions/studentId';

function CreateStudent({ setCreateModal, setMapData }) {
    const [fullName, setFullName] = useState("")
    const [universityName, setUniversityName] = useState("")
    const [entranceYear, setUntranceYear] = useState("")
    const [graduationYear, setGraduationYear] = useState("")
    const [faculty, setFaculty] = useState("")
    const [speciality, setSpeciality] = useState("")
    const [studyType, setStudyType] = useState("")
    const [academicType, setAcademicType] = useState("")
    const [diplomaSerial, setDiplomaSerial] = useState("")
    const [diplomaRegistrationNumber, setDiplomaRegistrationNumber] = useState("")
    const [givenDate, setGivenDate] = useState("")
    const [academicLevel, setAcademicLevel] = useState("")
    const [appendixNumber, setAppendixNumber] = useState("")
    const [organizationId, setOrganizationId] = useState("")

    const dispatch = useDispatch();

    const createStudent = async (e) => {
        e.preventDefault()
        if (fullName.replace(/ /g, "").length && universityName.replace(/ /g, "").length &&
            entranceYear.replace(/ /g, "").length && graduationYear.replace(/ /g, "").length &&
            faculty.replace(/ /g, "").length && speciality.replace(/ /g, "").length &&
            academicType.replace(/ /g, "").length && diplomaSerial.replace(/ /g, "").length &&
            diplomaRegistrationNumber.replace(/ /g, "").length && givenDate.replace(/ /g, "").length &&
            academicLevel.replace(/ /g, "").length && appendixNumber.replace(/ /g, "").length &&
            organizationId.replace(/ /g, "").length) {
            let data = {
                fullName, universityName, entranceYear, graduationYear, faculty, speciality, studyType,
                academicType, diplomaSerial, diplomaRegistrationNumber, givenDate, academicLevel, appendixNumber, organizationId
            }
            if (data) {
                await user_register
                    .post("/student/create", data)
                    .then((result) => {
                        if (result?.data.data.success) {
                            console.log("11111111111111111", result?.data?.data);
                            dispatch(studendIdAction({ id: result?.data?.data?.data }))
                            console.log("2222222222222222", result?.data?.data);
                            dispatch({ type: "allDataAction", payload: result?.data?.data })
                            // dispatch(allDataAction({ dataArr: result?.data?.data}))
                            console.log("3333333333333333", "Ishladi");
                            setFullName("")
                            setUniversityName("")
                            setUntranceYear("")
                            setGraduationYear("")
                            setFaculty("")
                            setSpeciality("")
                            setStudyType("")
                            setAcademicType("")
                            setDiplomaSerial("")
                            setDiplomaRegistrationNumber("")
                            setGivenDate("")
                            setAcademicLevel("")
                            setAppendixNumber("")
                            setOrganizationId("")
                            toast.success("Student infos created successfully!")
                            setMapData([])
                            setCreateModal(false)
                        }
                    })
                    .catch((error) => {
                        console.log("errorerrrrrrrrrrr", error)
                        toast.warning("Something wrong with create!")
                    });
            }
        }
        else {
            toast.error('Please enter all info correctly!')
        }


    }
    return (
        <div className={c.modal} onClick={() => setCreateModal(false)}>
            <div className={c.modal_wrapper} onClick={(e) => e.stopPropagation()}>
                <FiX className={c.fix} onClick={() => setCreateModal(false)} />
                <h2>Create Student</h2>
                <form onSubmit={createStudent}>
                    <input className={c.student_input} type="text" placeholder='Fullname' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='University Name' value={universityName} onChange={(e) => setUniversityName(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Entrance Year' value={entranceYear} onChange={(e) => setUntranceYear(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Graduation Year' value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Faculty' value={faculty} onChange={(e) => setFaculty(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Speciality' value={speciality} onChange={(e) => setSpeciality(e.target.value)} />

                    <input className={c.student_input} type="text" placeholder='StudyType' value={studyType} onChange={(e) => setStudyType(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='AcademicType' value={academicType} onChange={(e) => setAcademicType(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Diplom Serial' value={diplomaSerial} onChange={(e) => setDiplomaSerial(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Diploma Registration Number' value={diplomaRegistrationNumber} onChange={(e) => setDiplomaRegistrationNumber(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Given Date' value={givenDate} onChange={(e) => setGivenDate(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Academic Level' value={academicLevel} onChange={(e) => setAcademicLevel(e.target.value)} />

                    <input className={c.student_input} type="text" placeholder='Appendix Number' value={appendixNumber} onChange={(e) => setAppendixNumber(e.target.value)} />
                    <input className={[c.student_input, c.number].join(" ")} type="number" placeholder='Organization Id' value={organizationId} onChange={(e) => setOrganizationId(e.target.value)} />
                    <button type="submit" className={c.student_btn}>Create Student</button>
                </form>
            </div>
        </div>
    )
}

export default CreateStudent