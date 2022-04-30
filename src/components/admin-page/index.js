import React, {useEffect} from "react";
import {Tab, Tabs} from "react-bootstrap";

import ReviewList from "../review-list";
import UserList from "../user-list";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {getUserState} from "../../actions/userActions";

const AdminPage = () => {
    const [query,setQuery]= useSearchParams();


    const _userId = query.get("uid")
    const dispatch = useDispatch()
    const user = useSelector(e => e.currentUser)
    useEffect(()=>{
        getUserState(query.get("uid"),dispatch)

    },[dispatch])
    const navigate = useNavigate()
    return (
        <>{user && user.role === "ADMIN" ? (<>
            <h1 className="mt-4 mb-3">Manage Site</h1>

            <Tabs defaultActiveKey="users" id="admin-tabs" className="mb-3">
                <Tab eventKey="users" title="Users">
                    <UserList uid={user._id}/>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    <ReviewList/>
                </Tab>
            </Tabs>

            </>) : navigate('/')}
        </>
    )
};

export default AdminPage;

