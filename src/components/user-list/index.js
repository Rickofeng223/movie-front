import React from "react";
import UserListItem from "./user-list-item";
import {Tab, Row, Col, Nav} from "react-bootstrap";

import usersNormal from '../data/users-normal.json'
import usersCritic from '../data/users-critic.json'
import usersAdmin from '../data/users-admin.json'

const UserList = () => {

    return(
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="normal">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="normal">Normal</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="critic">Critic</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="admin">Admin</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="normal">
                                {
                                    usersNormal.map(user => {
                                        return(
                                            <UserListItem user={user}/>
                                        );
                                    })
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="critic">
                                {
                                    usersCritic.map(user => {
                                        return(
                                            <UserListItem user={user}/>
                                        );
                                    })
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="admin">
                                {
                                    usersAdmin.map(user => {
                                        return(
                                            <UserListItem user={user}/>
                                        );
                                    })
                                }
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>


        </>
    );
}

export default UserList;