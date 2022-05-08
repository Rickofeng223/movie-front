import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {useNavigate,Link} from "react-router-dom";
// import {signup} from '../../reducers/userReducer'
import {signup} from '../../../actions'
const CreateAccount = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [first_name, setFirst] = useState('')
    const [last_name, setLast] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPass] = useState('')
    const [email_id, setEmail] = useState('')
    const [phone_id, setPhone] = useState('')
    const [DOB, setDOB] = useState('')
    const [role, setRole] = useState("NORMAL")
    const [genres, setGenres] = useState(new Set())
    // value={first_name} onChange={(event=> setFirst(event.target.value))}

    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <h2>Create Account</h2>

                    <div>
                        <label className="font-weight-bold" htmlFor="name">First Name *</label><br/>
                        <input required className="mb-4" type="text" id="fname"
                               value={first_name} onChange={(event => {
                                setFirst(event.target.value)
                            }
                        )}/><br/>

                        <label className="font-weight-bold" htmlFor="name">Last Name *</label><br/>
                        <input required className="mb-4" type="text" id="lname"
                               value={last_name} onChange={(event => setLast(event.target.value))}/><br/>

                        <label className="font-weight-bold" htmlFor="username">Username *</label><br/>
                        <input required className="mb-4" type="text" id="username"
                               value={username} onChange={(event => setUsername(event.target.value))}/><br/>

                        <label className="font-weight-bold" htmlFor="password">Password *</label><br/>
                        <input required className="mb-4" type="password" id="password"
                               value={password} onChange={(event => setPass(event.target.value))}/><br/>

                        <label className="font-weight-bold" htmlFor="email">Email<br/>
                        <input className="mb-4" type="email" id="email" placeholder="email@domain.com"
                               value={email_id} onChange={(event => setEmail(event.target.value))}/></label><br/>

                        <label className="font-weight-bold" htmlFor="phone">Phone Number
                        <br/>
                        <input className="mb-4" type="text" id="phone" placeholder="6175478890"
                               value={phone_id} onChange={(event => setPhone(event.target.value))}/></label>
                        <br/>

                        <label className="font-weight-bold" htmlFor="dob">Date of Birth

                        <br/>
                        <input className="mb-4" type="date" id="dob"
                               value={DOB} onChange={(event => setDOB(event.target.value))}/>
                        </label>
                        <br/>

                        <label className="font-weight-bold">Account type: *</label><br/>
                        <input required  type="radio" value="NORMAL"
                            name="radio-account-type"
                            id="radio-normal"
                               className="mr-2"
                               onClick={(event) => {
                                   setRole("NORMAL")
                                   // event.target.checked

                               }}
                        />
                        <label htmlFor="radio-normal">Normal</label><br/>
                        <input required type="radio" value="CRITIC"
                            name="radio-account-type"
                            id="radio-critic"
                               onClick={() => setRole("CRITIC")}

                               className="mr-2"/>
                        <label htmlFor="radio-critic">Critic</label><br/>
                        <input required type="radio" value="ADMIN"
                            name="radio-account-type"
                            id="radio-admin"
                               onClick={() => setRole("ADMIN")}
                               className="mr-2"/>
                        <label htmlFor="radio-admin">Admin</label><br/>

                        <button onClick={
                            () => signup({
                                password,
                                userData: {
                                    first_name, last_name, username, email_id,  phone_id, DOB, role
                                }
                            }, {navigate, dispatch})
                        } className="btn btn-primary btn-block rounded-pill mt-4 mb-2">
                            Create Account
                        </button>
                    </div>

                    <p>Already have an account? <Link to={"/login"}>Login</Link></p>

                </div>
            </div>

        </>
    )

};

export default CreateAccount;
