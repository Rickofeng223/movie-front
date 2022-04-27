import React, { useState } from "react";
import { postLogin } from "../../services/services";


const Login = () => {
    const username = "Amelie_Wisozk62";
    const password = "Tthd7nt7xVkLHyO";
    const [user,setUser]  = useState("");
    let loginStuff = async () => {
        let response = await postLogin({username,password})
        setUser(response.data)
    }
    // useEffect(() => {
    //     loginStuff()
    // }, []);
    return(
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <h2>Login</h2>
                    <p>
                        Welocm to Movie App. Write review as a critic and rate reviews as a fan. You can find all the latest movies as well as the throwbacks.
                    </p>
                    <form>

                        <label className="font-weight-bold" htmlFor="username">Username</label><br/>
                        <input className="mb-4" type="text" id="username" placeholder="example@aol.com"/><br/>



                        <label className="font-weight-bold" htmlFor="password">Password</label><br/>
                        <input className="mb-4"  type="password" id="password"/><br/>


                        <button className="btn btn-primary btn-block rounded-pill mt-4 mb-2" onClick={loginStuff}>
                            Login
                        </button>
                    </form>

                    <p>Don't have an account? <a href="">Create account</a></p>
                </div>
            </div>
        </>
    )
};

export default Login;