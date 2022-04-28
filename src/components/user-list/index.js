import React, {useEffect, useRef, useState} from "react";
import UserListItem from "./user-list-item";
import {Col, Nav, Row, Tab} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_USER, GET_USERS, getUsers} from "../../actions/admin/usersActions";
import {useAsync} from "react-async";
import axios from "axios";

const UserList = ({uid}) => {
    const users = useSelector(e => e.users)
    const dispatch = useDispatch()



    //
    //
    // useEffect(() => {
    //
    //     return () => { mountedRef.current = false }
    // }, [dispatch])
        // // const [all,setUsers]= useState(_users)
        useEffect(()=>{
            getUsers(uid, dispatch)
            //.then(e=>setUsers(e))
        },[dispatch])

        return (
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

                              <Tab.Pane eventKey={'normal'}>
                                {
                                    users.filter((x) => x.role === "NORMAL").map(user => {
                                        return (
                                            <UserListItem key={user._id} uid={uid} user={user}/>
                                        );
                                    })
                                }
                            </Tab.Pane>
                              <Tab.Pane eventKey={'critic'}>
                                {
                                    users.filter((x) => x.role === "CRITIC").map(user => {
                                        return (
                                            <UserListItem key={user._id} uid={uid} user={user}/>
                                        );
                                    })
                                }
                            </Tab.Pane>
                              <Tab.Pane eventKey={'admin'}>
                                {
                                    users.filter((x) => x.role === "ADMIN").map(user => {
                                        return (
                                            <UserListItem key={user._id} uid={uid} user={user}/>
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
