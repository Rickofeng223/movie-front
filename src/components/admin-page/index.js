import React from "react";
import {Tab, Tabs} from "react-bootstrap";

import ReviewList from "../review-list";
import UserList from "../user-list";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
    const user = useSelector(e => e.currentUser)
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

