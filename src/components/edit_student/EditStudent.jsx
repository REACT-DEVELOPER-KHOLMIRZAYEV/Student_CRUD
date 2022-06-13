import React, { useState } from 'react'
import c from "./EditStudent.module.css"
import { FiX } from "react-icons/fi"
import user_register from '../../api/privite_api';
import { toast } from 'react-toastify';

function EditStudent({ setEditModal, data }) {
    const [newfullName, setNewFullName] = useState(data?.fullName)
    const [newuniversityName, setNewUniversityName] = useState(data?.universityName)
    const [newentranceYear, setNewUntranceYear] = useState(data?.entranceYear)
    const [newgraduationYear, setNewGraduationYear] = useState(data?.graduationYear)
    const [newfaculty, setNewFaculty] = useState(data?.faculty)
    const [newspeciality, setNewSpeciality] = useState(data?.speciality)
    const [newstudyType, setNewStudyType] = useState(data?.studyType)
    const [newacademicType, setNewAcademicType] = useState(data?.academicType)
    const [newdiplomaSerial, setNewDiplomaSerial] = useState(data?.diplomaSerial)
    const [newdiplomaRegistrationNumber, setNewDiplomaRegistrationNumber] = useState(data?.diplomaRegistrationNumber)
    const [newgivenDate, setNewGivenDate] = useState(data?.givenDate)
    const [newacademicLevel, setNewAcademicLevel] = useState(data?.academicLevel)
    const [newappendixNumber, setNewAppendixNumber] = useState(data?.appendixNumber)
    const [neworganizationId, setNewOrganizationId] = useState(data?.organizationId)

    const EditStudent = async (e) => {
        e.preventDefault()
        if (newfullName.replace(/ /g, "").length && newuniversityName.replace(/ /g, "").length &&
            newentranceYear.replace(/ /g, "").length && newgraduationYear.replace(/ /g, "").length &&
            newfaculty.replace(/ /g, "").length && newspeciality.replace(/ /g, "").length &&
            newstudyType.replace(/ /g, "").length && newacademicType.replace(/ /g, "").length &&
            newdiplomaRegistrationNumber.replace(/ /g, "").length &&
            newdiplomaSerial.replace(/ /g, "").length && newgivenDate.replace(/ /g, "").length &&
            newacademicLevel.replace(/ /g, "").length && newappendixNumber.replace(/ /g, "").length) {
            let formdata = {
                id: data.id,
                fullName: newfullName, universityName: newuniversityName, entranceYear: newentranceYear, graduationYear: newgraduationYear, faculty: newfaculty, speciality: newspeciality, studyType: newstudyType,
                academicType: newacademicType, diplomaSerial: newdiplomaSerial, diplomaRegistrationNumber: newdiplomaRegistrationNumber, givenDate: newgivenDate, academicLevel: newacademicLevel, appendixNumber: newappendixNumber, organizationId: +neworganizationId
            }
            if (formdata) {
                await user_register
                    .post("/student/update", formdata)
                    .then((result) => {
                        if (result?.data.data.success) {
                            console.log("edited", result);
                            setNewFullName("")
                            setNewUniversityName("")
                            setNewUntranceYear("")
                            setNewGraduationYear("")
                            setNewFaculty("")
                            setNewSpeciality("")
                            setNewStudyType("")
                            setNewAcademicType("")
                            setNewDiplomaSerial("")
                            setNewDiplomaRegistrationNumber("")
                            setNewGivenDate("")
                            setNewAcademicLevel("")
                            setNewAppendixNumber("")
                            setNewOrganizationId("")
                            setEditModal(false)
                            toast.success("Student infos updated!")
                            toast.warning("To see updated studend info, Refresh to the site")
                        }
                    })
                    .catch((error) => {
                        console.log("error", error)
                        toast.error("Something wrong!")
                    });
            }
            else {
                toast.error("Please write all infos!")
            }
        }
    }

    return (
        <div className={c.modal} onClick={() => setEditModal(false)}>
            <div className={c.modal_wrapper} onClick={(e) => e.stopPropagation()}>
                <FiX className={c.fix} onClick={() => setEditModal(false)} />
                <h2>Edit Student</h2>
                <form onSubmit={EditStudent}>
                    <input className={c.student_input} type="text" placeholder='Fullname' value={newfullName} onChange={(e) => setNewFullName(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='University Name' value={newuniversityName} onChange={(e) => setNewUniversityName(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Entrance Year' value={newentranceYear} onChange={(e) => setNewUntranceYear(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Graduation Year' value={newgraduationYear} onChange={(e) => setNewGraduationYear(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Faculty' value={newfaculty} onChange={(e) => setNewFaculty(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Speciality' value={newspeciality} onChange={(e) => setNewSpeciality(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='StudyType' value={newstudyType} onChange={(e) => setNewStudyType(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='AcademicType' value={newacademicType} onChange={(e) => setNewAcademicType(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Diplom Serial' value={newdiplomaSerial} onChange={(e) => setNewDiplomaSerial(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Diploma Registration Number' value={newdiplomaRegistrationNumber} onChange={(e) => setNewDiplomaRegistrationNumber(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Given Date' value={newgivenDate} onChange={(e) => setNewGivenDate(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Academic Level' value={newacademicLevel} onChange={(e) => setNewAcademicLevel(e.target.value)} />
                    <input className={c.student_input} type="text" placeholder='Appendix Number' value={newappendixNumber} onChange={(e) => setNewAppendixNumber(e.target.value)} />
                    <input className={[c.student_input, c.number].join(" ")} type="number" placeholder='Organization Id' value={neworganizationId} onChange={(e) => setNewOrganizationId(e.target.value)} />
                    <button type="submit" className={c.student_btn}>Edit Student</button>
                </form>
            </div>
        </div>
    )
}

export default EditStudent