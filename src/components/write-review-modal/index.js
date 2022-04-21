import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";

const WriteReviewModal = props => {
    let [reviewModal, setReviewModal] = useState('');
    const dispatch = useDispatch();
    const reviewClickHandler = () => {
        console.log(reviewModal)
        dispatch({type: 'create-review',
        review: reviewModal
        });
    }
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
                            value={reviewModal}
                            onChange={(event =>
                                setReviewModal(event.target.value))}
                            className="form-control mb-4"
                            placeholder="What did you think? Tell us!">
                        </textarea>

                        <label htmlFor="customRange3" className="form-label">On a scale of 1-10, how would you rate this movie</label>
                        <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3"/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-secondary" onClick={props.onHide}>Cancel</Button>
                    <Button onClick={reviewClickHandler}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default WriteReviewModal;