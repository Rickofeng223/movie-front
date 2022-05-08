import React, {useState} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";


import {LOGIN, login} from '../../../actions'
import {useDispatch} from "react-redux";
const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]= useState('')
    const dispatch=useDispatch()
    const navigate= useNavigate()
    const [query,setQuery]= useSearchParams()
    return(
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <h2>Login</h2>
                    <p>
                        Welcome to Movie App. Write review as a critic and rate reviews as a fan. You can find all the latest movies as well as the throwbacks.
                    </p>
                    <div>

                        <label className="font-weight-bold" htmlFor="username">Username</label><br/>
                        <input value={username} onChange={(e)=>setUsername(e.target.value)} className="mb-4" type="text" id="username" placeholder="example@aol.com"/><br/>



                        <label className="font-weight-bold" htmlFor="password">Password</label><br/>
                        <input onChange={(e)=>setPassword(e.target.value)} className="mb-4"  type="password" id="password"/><br/>

                        <button

                            onClick={async ()=> {
                                try {
                                    console.log("onClick")
                                    const data = await login({username, password}, {dispatch})
                                    dispatch({type: LOGIN, user: data})

                                    console.log("UID",data._id)
                                    navigate( {
                                        pathname: `/home`,
                                        search: `?uid=${data._id}`
                                    })
                                }catch (e) {
                                    console.log(e)
                                    navigate('/error')
                                }

                            }
                            }
                            className="btn btn-primary btn-block rounded-pill mt-4 mb-2">
                            Login
                        </button>
                    </div>

                    <p>Don't have an account? <Link to="/signup">Create account</Link></p>
                </div>
            </div>
        </>
    )
};

export default Login;