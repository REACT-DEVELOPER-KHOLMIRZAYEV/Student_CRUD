import React, { useEffect, useState } from 'react'
import c from "./Table.module.css"
import { FiEdit, FiEye, FiTrash2 } from 'react-icons/fi';
import CreateStudent from '../../components/create_student/CreateStudent'
import EyeStudent from '../../components/eye_student/EyeStudent';
import EditStudent from '../../components/edit_student/EditStudent';
import DeleteStudent from '../../components/delete_student/DeleteStudent';
import user_register from '../../api/privite_api';
import { useDispatch, useSelector } from 'react-redux';
import { user_failauthentication } from '../../redux/actions/auth';
import { Redirect, useLocation } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import { toast } from 'react-toastify';

function Table() {
  const [createModal, setCreateModal] = useState(false)
  const [eyeModal, setEyeModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [logOutModal, setLogOutModal] = useState(false)
  const [mapData, setMapData] = useState([])
  const [uniqueData, setUniqueData] = useState([])

  const location = useLocation();
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const usersData = useSelector(state => state.allData.dataArr);

  useEffect(() => {
    usersData.forEach(({ data }) => {
      user_register
        .get(`/student/get/${data}`)
        .then((result) => {
          if (result?.data?.data?.success) {
            setMapData(prev => [...prev, result?.data?.data])
          }
        })
        .catch((error) => {
          toast.error("Something wrong with connection!")
        })
    })
  }, [usersData])

  const eyeFunction = (e, id) => {
    e.preventDefault()
    setEyeModal(true)
    setUniqueData(mapData.filter(i => i.data.id === id)[0].data)
  }

  const editFunction = (e, id) => {
    e.preventDefault()
    setEditModal(true)
    setUniqueData(mapData.filter(i => i.data.id === id)[0].data)
  }

  const deleteFunction = (e, id) => {
    e.preventDefault()
    setDeleteModal(true)
    setUniqueData(mapData.filter(i => i.data.id === id)[0].data)
  }

  const LogOut = () => {
    dispatch(user_failauthentication({ message: false }))
    console.log("logged out");
  }

  return !auth.authorized ? <Redirect
    to={{
      pathname: "/",
      state: {
        from: location.pathname,
      },
    }}
  /> : (<div className={c.table}>
    <div className={c.table_nav}>
      <button onClick={() => setLogOutModal(true)}>Log out</button>
      <button onClick={() => setCreateModal(true)}>+  Register Student</button>
    </div>

    {logOutModal && <Modal title="Log Out" description="Do you want to logged out?" yes={LogOut} no={setLogOutModal} modal={logOutModal} />}
    {createModal && <CreateStudent setCreateModal={setCreateModal} setMapData={setMapData} />}
    {eyeModal && <EyeStudent setEyeModal={setEyeModal} data={uniqueData} />}
    {editModal && <EditStudent setEditModal={setEditModal} data={uniqueData} />}
    {deleteModal && <DeleteStudent setDeleteModal={setDeleteModal} data={uniqueData} />}

    <div className={c.table_wrapper}>
      <table>
        <thead>
          <tr>
            <th> ID</th>
            <th> Fullname</th>
            <th> University Name</th>
            <th> Entrance Year</th>
            <th> Graduation Year</th>
            <th> Faculty</th>
            <th> Speciality</th>
            <th> StudyType</th>
            <th> AcademicType</th>
            <th> Diplom Serial</th>
            <th> Diploma Registration Number</th>
            <th> Given Date</th>
            <th> Academic Level</th>
            <th> Appendix Number</th>
            <th> Organization Id</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {
            mapData?.map(({ data }, inx) => <tr key={inx}>
              <td>{data?.id && data?.id}</td>
              <td>{data?.fullName && data?.fullName}</td>
              <td>{data?.universityName && data?.universityName}</td>
              <td>{data?.entranceYear && data?.entranceYear}</td>
              <td>{data?.graduationYear && data?.graduationYear}</td>
              <td>{data?.faculty && data?.faculty}</td>
              <td>{data?.speciality && data?.speciality}</td>
              <td>{data?.studyType && data?.studyType}</td>
              <td>{data?.academicType && data?.academicType}</td>
              <td>{data?.diplomaSerial && data?.diplomaSerial}</td>
              <td>{data?.diplomaRegistrationNumber && data?.diplomaRegistrationNumber}</td>
              <td>{data?.givenDate && data?.givenDate}</td>
              <td>{data?.academicLevel && data?.academicLevel}</td>
              <td>{data?.appendixNumber && data?.appendixNumber}</td>
              <td>{data?.organizationId && data?.organizationId}</td>
              {
                data && <td>
                  <FiEye onClick={(e) => eyeFunction(e, data?.id)} />
                  <FiEdit onClick={(e) => editFunction(e, data?.id)} />
                  <FiTrash2 onClick={(e) => deleteFunction(e, data?.id)} />
                </td>
              }
            </tr>)
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Table