import React from "react";
import {Tabs, Tab} from "react-bootstrap";

import ReviewList from "../review-list";
import UserList from "../user-list";

const AdminPage = () => {

    return (
        <>
            <h1 className="mt-4 mb-3">Manage Site</h1>

            <Tabs defaultActiveKey="users" id="admin-tabs" className="mb-3">
                <Tab eventKey="users" title="Users">
                    <UserList/>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    <ReviewList/>
                </Tab>
            </Tabs>
        </>
    )
};

export default AdminPage;