import React from "react";

const CreateAccount = () => {
    return(
        <>
            <div className="d-flex flex-column">
                <h2>Create Account</h2>

                <form>
                    <div className="row">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="example@aol.com"/>
                    </div>

                    <div className="row">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="example@aol.com"/>
                    </div>

                    <div className="row">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>

                    <button>
                        Create Account
                    </button>
                </form>

                <p>Already have an account?</p>
                <a href="">Login</a>

            </div>
        </>
    )
};

export default CreateAccount;