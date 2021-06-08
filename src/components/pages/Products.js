import React from 'react';
import '../../App.css';
import useInput from '../../Hooks/useInput';

export default function Products() {
  const[firstName,bindFirstName,resetFirstName] = useInput('');
  const[lastName,bindLastName,resetLastName] = useInput('');
  const submitHandler = e =>{
    e.preventDefault()
    alert(`HHello ${firstName}  ${lastName}`)
    resetFirstName();
    resetLastName();

  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input{...bindFirstName}  type='text' />
        </div>
        <div>
          <label>Last Name</label>
          <input  {...bindLastName} type='text'/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
