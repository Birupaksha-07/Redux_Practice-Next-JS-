"use client"

import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { addUser, deleteAllUser, removeUser } from '@/redux/slice/userSlice';

function Student() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const addUserName = () => {
    dispatch(addUser(name))
  }
  const removeAllUser = () => {
    dispatch(deleteAllUser())
  }
  const deleteUserName = (id) => {
    dispatch(removeUser(id))
  }
  const data = useSelector((state) => {
    return state.users;  // ei state.user (user ta store er modhhe jeta ache otai)
  })

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col'>
            <h3 className='text-align-center'>List of all Students</h3>
          </div>

        </div>
        <div className='row'>
          <div className='col-7'>
            <div className='input-group mb-3'>
              <input type="text" placeholder='Enter Your Name'
                className='form-control'
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
              />
              <button className='btn btn-primary'
                onClick={() => addUserName()}
              >
                Add User
              </button>
              <button className='btn btn-danger ms-3'
                onClick={() => removeAllUser()}
              >Delete All</button>
            </div>
          </div>
          <div className='col-7'>
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, id) => {
                  return (
                    <tr key={id}>
                      <td>{item}</td>
                      <td>
                        <span onClick={()=>deleteUserName(id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </span>
                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student;
