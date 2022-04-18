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
                        <textarea
                            className="form-control mb-4"
                            placeholder="What did you think? Tell us!">
                        </textarea>

                        <label htmlFor="customRange3" className="form-label">On a scale of 1-10, how would you rate this movie</label>
                        <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3"/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-secondary" onClick={props.onHide}>Cancel</Button>
                    <Button>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default WriteReviewModal;