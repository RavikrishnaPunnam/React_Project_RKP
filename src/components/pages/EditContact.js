import React from 'react'
import { Link,useParams } from 'react-router-dom';

export const EditContact = () => {
    const{id} = useParams();
    return (
        <div className="container">
        <h1 className="display-3 my-5 text-center">
               Edit Student {id}
               </h1>
           <div className="row">
              
               <div className="col-md-6 shadow mx-auto p-5">
                  <form>
                      <div style={{margin:5}}  className="form-group">
                       <input type="text" placeholder="Name" className="form-control"/>
                      </div>

                      <div style={{margin:5}}  className="form-group">
                       <input type="email" placeholder="Email" className="form-control"/>
                      </div> 
                      
                      <div style={{margin:5}} className="form-group">
                       <input type="number" placeholder="Phone number" className="form-control"/>
                      </div> 
                      
                      <div className="form-group" style={{margin:10}}>
                       <input type="Submit" value="Update Student" className="btn  btn-dark"/>
                       <Link style={{marginLeft:5}} to="/contacts" className="btn btn-danger">Cancel</Link>

                      </div>
                  </form>
               </div>
           </div>
       </div>
    )
}
