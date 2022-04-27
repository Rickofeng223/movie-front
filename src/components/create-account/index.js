import React from "react";

const CreateAccount = () => {
    return(
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <h2>Create Account</h2>

                    <form>
                        <label className="font-weight-bold" htmlFor="name">First Name *</label><br/>
                        <input required className="mb-4" type="text" id="fname"/><br/>

                        <label className="font-weight-bold" htmlFor="name">Last Name *</label><br/>
                        <input required className="mb-4" type="text" id="lname" /><br/>

                        <label className="font-weight-bold" htmlFor="username">Username *</label><br/>
                        <input required className="mb-4" type="text" id="username"/><br/>

                        <label className="font-weight-bold" htmlFor="password">Password *</label><br/>
                        <input required className="mb-4" type="password" id="password"/><br/>

                        <label className="font-weight-bold" htmlFor="email">Email</label><br/>
                        <input required className="mb-4" type="email" id="email" placeholder="email@domain.com"/><br/>

                        <label className="font-weight-bold" htmlFor="phone">Phone Number</label><br/>
                        <input required className="mb-4" type="text" id="phone" placeholder="6175478890"/><br/>

                        <label className="font-weight-bold" htmlFor="dob">Date of Birth</label><br/>
                        <input className="mb-4" type="date" id="dob"/><br/>

                        <label className="font-weight-bold">Account type: *</label><br/>
                        <input required type="radio" value="NORMAL"
                               name="radio-account-type" id="radio-normal"
                               className="mr-2"/>
                        <label htmlFor="radio-normal">Normal</label><br/>
                        <input required type="radio" value="CRITIC"
                               name="radio-account-type" id="radio-critic"
                               className="mr-2"/>
                        <label htmlFor="radio-critic">Critic</label><br/>
                        <input required type="radio" value="ADMIN"
                               name="radio-account-type" id="radio-admin"
                               className="mr-2"/>
                        <label htmlFor="radio-admin">Admin</label><br/>

                        <label className="font-weight-bold">Favorite movie genres:</label>
                        <br/>
                        <input type="checkbox" value="action"
                               name="check-genre" id="check-action"
                                className="mr-2"/>
                        <label htmlFor="check-action">Action</label> <br/>
                        <input type="checkbox" value="comedy"
                               name="check-genre" id="check-comedy"
                               className="mr-2"/>
                        <label htmlFor="check-action">Comedy</label> <br/>
                        <input type="checkbox" value="Drama"
                               name="check-genre" id="check-drama"
                               className="mr-2"/>
                        <label htmlFor="check-drama">Drama</label> <br/>
                        <input type="checkbox" value="Fantasy"
                               name="check-genre" id="check-fantasy"
                               className="mr-2"/>
                        <label htmlFor="check-fantasy">Fantasy</label> <br/>
                        <input type="checkbox" value="horror"
                               name="check-genre" id="check-horror"
                               className="mr-2"/>
                        <label htmlFor="check-horror">Horror</label> <br/>
                        <input type="checkbox" value="mystery"
                               name="check-genre" id="check-mystery"
                               className="mr-2"/>
                        <label htmlFor="check-mystery">Mystery</label> <br/>
                        <input type="checkbox" value="romance"
                               name="check-genre" id="check-romance"
                               className="mr-2"/>
                        <label htmlFor="check-romance">Romance</label> <br/>
                        <input type="checkbox" value="thriller"
                               name="check-genre" id="check-thriller"
                               className="mr-2"/>
                        <label htmlFor="check-thriller">Thriller</label> <br/>
                        <input type="checkbox" value="western"
                               name="check-genre" id="check-western"
                               className="mr-2"/>
                        <label htmlFor="check-western">Western</label> <br/>

                        <button className="btn btn-primary btn-block rounded-pill mt-4 mb-2">
                            Create Account
                        </button>
                    </form>

                    <p>Already have an account? <a href="">Login</a></p>

                </div>
            </div>

        </>
    )
};

export default CreateAccount;