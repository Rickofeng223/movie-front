import React from "react";

const AdminPage = () => {

    return (
        <>
            <h1>Manage Site</h1>

            <Tabs defaultActiveKey="users" id="admin-tabs" className="mb-3">
                <Tab eventKey="users" title="Users">
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old.
                    </p>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    <p>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                        below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                        Bonorum et Malorum" by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the 1914 translation
                        by H. Rackham.
                    </p>
                </Tab>
            </Tabs>
        </>
    )
};

export default AdminPage;