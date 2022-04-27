import React, {useEffect, useState} from "react";
import {postSignup} from "./services";
import axios from "axios";
 import {useDispatch} from 'react-redux'
import {LOGIN} from "../../reducers/userReducer";
import {useNavigate} from "react-router-dom";
import {signup } from '../../reducers/userReducer'
const CreateAccount = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

     const [first_name, setFirst] = useState('')
    const [last_name, setLast] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
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

                        <label className="font-weight-bold" htmlFor="email">Email</label><br/>
                        <input className="mb-4" type="email" id="email" placeholder="email@domain.com"
                               value={email} onChange={(event => setEmail(event.target.value))}/><br/>

                        <label className="font-weight-bold" htmlFor="phone">Phone Number</label><br/>
                        <input className="mb-4" type="text" id="phone" placeholder="6175478890"
                               value={phone} onChange={(event => setPhone(event.target.value))}/><br/>

                        <label className="font-weight-bold" htmlFor="dob">Date of Birth</label><br/>
                        <input className="mb-4" type="date" id="dob"
                               value={DOB} onChange={(event => setDOB(event.target.value))}/><br/>

                        <label className="font-weight-bold">Account type: *</label><br/>
                        <input required checked type="radio" value="NORMAL"
                               // name="radio-account-type"
                               // id="radio-normal"
                               className="mr-2"
                               onChange={() => setRole("NORMAL")}
                        />
                        <label htmlFor="radio-normal">Normal</label><br/>
                        <input required type="radio" value="CRITIC"
                               // name="radio-account-type"
                               // id="radio-critic"
                               onChange={() => setRole("CRITIC")}
                               className="mr-2"/>
                        <label htmlFor="radio-critic">Critic</label><br/>
                        <input required type="radio" value="ADMIN"
                               // name="radio-account-type"
                               // id="radio-admin"
                               onChange={() => setRole("ADMIN")}
                               className="mr-2"/>
                        <label htmlFor="radio-admin">Admin</label><br/>

                        {/*<label className="font-weight-bold">Favorite movie genres:</label>*/}
                        {/*<br/>*/}

                        {/*<input type="checkbox" value="action"*/}
                        {/*       name="check-genre" id="check-action"*/}
                        {/*        className="mr-2"/>*/}
                        {/*<label htmlFor="check-action">Action</label> <br/>*/}
                        {/*<input type="checkbox" value="comedy"*/}
                        {/*       name="check-genre" id="check-comedy"*/}
                        {/*       className="mr-2"/>*/}
                        {/*<label htmlFor="check-action">Comedy</label> <br/>*/}
                        {/*<input type="checkbox" value="Drama"*/}
                        {/*       name="check-genre" id="check-drama"*/}
                        {/*       className="mr-2"/>*/}
                        {/*<label htmlFor="check-drama">Drama</label> <br/>*/}
                        {/*<input type="checkbox" value="Fantasy"*/}
                        {/*       name="check-genre" id="check-fantasy"*/}
                        {/*       className="mr-2"/>*/}
                        {/*<label htmlFor="check-fantasy">Fantasy</label> <br/>*/}
                        {/*<input type="checkbox" value="horror"*/}
                        {/*       name="check-genre" id="check-horror"*/}
                        {/*       className="mr-2"/>*/}
                        {/*<label htmlFor="check-horror">Horror</label> <br/>*/}
                        {/*<input type="checkbox" value="mystery"*/}
                        {/*       name="check-genre" id="check-mystery"*/}
                        {/*       className="mr-2"/>*/}
                        {/*<label htmlFor="check-mystery">Mystery</label> <br/>*/}
                        {/*<input type="checkbox" value="romance"*/}
                        {/*       name="check-genre" id="check-romance"*/}
                        {/*       className="mr-2"/>*/}
                        {/*<label htmlFor="check-romance">Romance</label> <br/>*/}
                        {/*<input type="checkbox" value="thriller"*/}
                        {/*       name="check-genre" id="check-thriller"*/}
                        {/*       className="mr-2"/>*/}
                        {/*<label htmlFor="check-thriller">Thriller</label> <br/>*/}
                        {/*<input type="checkbox" value="western"*/}
                        {/*       name="check-genre" id="check-western"*/}
                        {/*       className="mr-2"/>*/}
                        {/*<label htmlFor="check-western">Western</label> <br/>*/}

                        {/*<Form.Radio label="Male" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')} />*/}
                        {/*{first_name,last_name,username,password,email,phone,DOB,role}*/}
                        <button onClick={
                            ()=>signup({
                                password,
                                userData: {
                                    first_name, last_name, username, email, phone, DOB, role
                                }
                            }, {navigate, dispatch})
                        } className="btn btn-primary btn-block rounded-pill mt-4 mb-2">
                            Create Account
                        </button>
                    </div>

                    <p>Already have an account? <a href="">Login</a></p>

                </div>
            </div>

        </>
    )
};

export default CreateAccount;