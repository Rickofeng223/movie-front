import React from "react";
import {Tabs, Tab} from "react-bootstrap";

import ReviewList from "../review-list";

const AdminPage = () => {

    return (
        <>
            <h1 className="mt-4 mb-3">Manage Site</h1>

            <Tabs defaultActiveKey="users" id="admin-tabs" className="mb-3">
                <Tab eventKey="users" title="Users">
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old.
                    </p>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    <ReviewList/>
                </Tab>
            </Tabs>
        </>
    )
};

export default AdminPage;