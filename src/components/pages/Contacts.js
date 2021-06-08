import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact, getAllContacts, getSingleContact } from '../../Redux/actions/actions';
import AddEditContact from './AddEditContact';

function Contacts({ getAllContacts, contacts, getSingleContact, contact, deleteContact }) {
  const notify = () => toast("Toast message which is been used");

  useEffect(() => {
    getAllContacts()
    // return () => {
    //     cleanup
    // }
  }, [])
  const handleDelete = (index) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      deleteContact(index);
    }
  }
  return (

    // // <nav 
    // // // className="navbar navbar-expand-lg navbar-dark br-dark py-2"
    // // >
    //     {/* React Redux


    <div>
      <div className="container d-flex flex-row justify-content-between mt-4">
        <h1>All Contacts</h1>
        <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"> Add Contacts</button>

      </div>
      <div className="container mt-4">
        {contacts.length === 0 && <h2 className="text-danger text-center">No Contacts found!!!</h2>}
        {contacts.length > 0 && <table className="table">
          <thead>
            <tr >
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <th >{index + 1}</th>
                <td>{contact.name}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td>
                  <button className="btn btn-primary" data-toggle="modal"
                    data-target="#exampleModalCenter" onClick={() => getSingleContact(index)}>Edit</button> &nbsp;

         < button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>

                </td>
              </tr>

            ))}

          </tbody>
        </table>}

        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">

            <AddEditContact editContactData={contact} />
          </div>
        </div>
      </div>


      {/* <button style={{ margin: 20 }} onClick={notify}>Notify!</button>
      <ToastContainer /> */}
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link className="btn btn-outline-primary"
            to='/contacts/addContacts'>
            Add Contacts
               </Link>
        </div>
      </div>


    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    contact: state.contact
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllContacts: () => dispatch(getAllContacts()),
    getSingleContact: (index) => dispatch(getSingleContact(index)),
    deleteContact: (index) => dispatch(deleteContact(index))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contacts)