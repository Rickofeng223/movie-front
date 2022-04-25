import * as redux from 'react-redux'
import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const WriteReviewModal = props => {
    let [reviewModal, setReviewModal] = useState('');
    //let [reviewsState, setReviewsState] = props.reviewsState;
    const dispatch = useDispatch();
    //const revs = useSelector(s=>s.reviews);
    const reviewClickHandler = () => {
        //console.log(reviewModal)
        dispatch({type: 'create-review',
        review: reviewModal
        });
        //setReviewsState(revs);
        //console.log(revs);
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

                        <label htmlFor="slider" className="form-label">On a scale of 1-10, how would you rate this movie</label>
                        <input type="range" className="form-range" min="0" max="10" step="0.5" id="slider"/>
                        <label htmlFor="slider" className="float-start">0</label>
                        <label htmlFor="slider" className="float-end">10</label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-secondary" onClick={props.onHide}>Cancel</Button>
                    <Button onClick={()=>{reviewClickHandler(); props.onHide()}}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default WriteReviewModal;