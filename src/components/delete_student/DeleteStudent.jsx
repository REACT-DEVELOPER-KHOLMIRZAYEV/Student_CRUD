import React from 'react'
// import  { useEffect, useState } from 'react'
import c from "./DeleteStudent.module.css"
import user_register from '../../api/privite_api';
import { toast } from 'react-toastify';

function DeleteStudent({ setDeleteModal, data }) {
  console.log("DeleteStudent", data);
  // const [refresh, setRefresh] = useState(false)
  const DeleteStudentF = async (e) => {
    e.preventDefault()
    if (data) {
      await user_register
        .delete(`/student/delete/${data?.id}`)
        .then((result) => {
          if (result?.data.data.success) {
            console.log("deteddddddddddddd", result);
            setDeleteModal(false)
            toast.success("Student infos deleted!")
            toast.warning("To see updated studend info, Refresh to the site")
          }
        })
        .catch((error) => {
          console.log("error", error)
          toast.error("Student infos isn't deleted!")
          toast.error("Something Wrong!")
          //   setLoading(false);
        });
    }
    else {
      toast.error("Something Wrong with connection!")
      console.log("DeleteStudentrrrrr", data.id);
    }
  }

  // useEffect(() => {
  //   refresh && window.location.reload(refresh)
  // }, [refresh])
  return (
    <div className={c.modal} onClick={() => setDeleteModal(false)}>
      <div className={c.modal_wrapper} onClick={(e) => e.stopPropagation()}>
        <h2>Delete Student</h2>
        <h3>Are you sure?   Do you want to delete this infos?</h3>
        <div className={c.button__wrapper}>
          <button onClick={(e) => DeleteStudentF(e)}>Yes</button>
          <button onClick={() => setDeleteModal(false)}>No</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteStudent