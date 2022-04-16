import React from "react";


const Login = () => {
    return(
        <>
            <div className="d-flex flex-column">
                <h2>Login</h2>
                <p>
                    Welocm to Movie App. Write and rate reviews on all the latest movies as well as the throwbacks.
                    For all movie lovers who want to be a critic.
                </p>
                <form>
                    <div className="row">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="example@aol.com"/>
                    </div>

                    <div className="row">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>

                    <button>
                        Login
                    </button>
                </form>

                <p>Don't have an account?</p>
                <a href="">Create account</a>

            </div>
        </>
    )
};

export default Login;