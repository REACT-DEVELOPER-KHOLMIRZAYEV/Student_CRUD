import React from 'react';
import c from './Modal.module.css';
import user_register from '../../api/privite_api';

const Modal = (props) => {
  console.log(props);

  const DeleteStudent = async (e) => {
    e.preventDefault()
    if (props.data) {
      await user_register
        .delete(`/student/delete/${props.data?.id}`)
        .then((result) => {
          props.yes(false)
        })
        .catch((error) => {
          console.log("error", error)
        });

    } else {
      console.log("DeleteStudentrrrrr", props.data.id);
    }
  }

  return (
    <div className={c.modalfade}>
      <div className={c.modal__container}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className={c.button__wrapper}>
          <button onClick={() => {
            props.yes() ? props.yes() : DeleteStudent()
            props.no(false);
          }}>Yes</button>
          <button onClick={() => props.no(false)}>No</button>
        </div>
      </div>
    </div>

  )
}

export default Modal
