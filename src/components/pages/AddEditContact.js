import React, { useState, useRef, useEffect } from 'react'
import { addContact, editContact, getAllContacts } from '../../Redux/actions/actions';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function AddEditContact({ addContact, editContactData, editContact }) {
  const savedSuccess = () => toast("Saved Successfully!!!");
  const updatedSuccess = () => toast("Updated Successfully!!!");

  const [contact, setContact] = useState({
    name: '',
    phoneNumber: '',
    email: ''
  })
  useEffect(() => {

    setContact(editContactData);

  }, [editContactData])
  const handleChange = (name, value) => {
    const oldContact = { ...contact };
    oldContact[name] = value;
    setContact(oldContact);
  }
  const handleSubmitChange = () => {
    if (contact.id !== null && contact.id !== undefined) {
      editContact(contact, contact.id);
      let oldContact = { ...contact };
      oldContact.id = null;
      setContact(oldContact);
      // updatedSuccess();

    }
    else {
      addContact(contact);
      // savedSuccess();

    }
    setContact({
      name: '',
      phoneNumber: ' ',
      email: ' '
    })
    console.log("Check Contacts ", contact);
    closeRef.current.click();
  }
  const closeRef = useRef();
  return (
    <div className="modal-content">
            <ToastContainer />

      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Add/Edit Contact </h5>
        <button type="button" ref={closeRef} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" placeholder="Enter Name" value={contact.name} onChange={(e) => handleChange('name', e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Phone Number</label>
            <input type="number" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"
              placeholder="Enter Phone Number" value={contact.phoneNumber} onChange={(e) => handleChange('phoneNumber', e.target.value)} />
          </div> <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp"
              placeholder="Enter Email" value={contact.email} onChange={(e) => handleChange('email', e.target.value)} />
          </div>

        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" onClick={() => handleSubmitChange()}>Submit</button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // getAllContacts: () => dispatch(getAllContacts()),
    addContact: (contact) => dispatch(addContact(contact)),
    editContact: (contact, id) => dispatch(editContact(contact, id))


  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddEditContact)