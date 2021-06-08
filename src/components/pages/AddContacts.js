import React from 'react'

export const AddContacts = () => {
    return (
        <div className="container">
            <h1 className="display-3 my-5 text-center">
                Add Student
                    </h1>
            <div className="row">

                <div className="col-md-6 shadow mx-auto p-5">
                    <form>
                        <div style={{ margin: 5 }} className="form-group">
                            <input type="text" placeholder="Name" className="form-control" />
                        </div>

                        <div style={{ margin: 5 }} className="form-group">
                            <input type="email" placeholder="Email" className="form-control" />
                        </div>

                        <div style={{ margin: 5 }} className="form-group">
                            <input type="number" placeholder="Phone number" className="form-control" />
                        </div>
ßß

                        <div className="form-group" style={{ margin: 10 }}>
                            <input type="Submit" value="Add Student" className="btn btn-block btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
