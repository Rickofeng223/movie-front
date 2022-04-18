import React from "react";
import {Button, Modal} from "react-bootstrap";

const WriteReviewModal = props => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Write a Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <textarea>
                            What did you think? Tell us!
                        </textarea>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Cancel</Button>
                    <Button>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default WriteReviewModal;