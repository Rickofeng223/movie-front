import * as redux from 'react-redux'
import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getUserState} from "../../actions/userActions";
import {useSearchParams} from "react-router-dom";
import axios from "axios";

const WriteReviewModal = props => {
    const {review, show, onHide,movie}= props
    let [reviewModal, setReviewModal] = useState('');
    //let [reviewsState, setReviewsState] = props.reviewsState;
    const dispatch = useDispatch();
    //const revs = useSelector(s=>s.reviews);
    const [content,setReviewText] = useState('')
    const [rating,setReviewNum] = useState(0)

    const reviewClickHandler = async () => {
        //console.log(reviewModal)
        if(!user){
         await getUserState(query.get("uid"),dispatch)
        }
        const {data:  crit} = await axios.get(`http://localhost:4000/api/users/${user._id}/critics/?user=${user._id}`)
         const {data:  {_id:_movie}} = await axios.get(`http://localhost:4000/api/movies/tid/${movie.id}/?user=${user._id}`)
         const _review = {time:Date.now(),content, rating,likes:0,dislikes:0 ,movie:_movie , critic:crit._id}

        await axios.post(`http://localhost:4000/api/reviews/?user=${user._id}`, {..._review})
        dispatch({type: 'create-review',  review:_review });
        //setReviewsState(revs);
        //console.log(revs);
    }
    const[query,setQuery]=useSearchParams()



    const user = useSelector(e => e.currentUser)
     useEffect(() => {

        if (user&& user._id) {
            setQuery({uid: user._id,movie:query.get("movie")})
        } else if (query.get("uid") !== undefined) {
            getUserState(query.get("uid"),  dispatch )
        }

    }, [dispatch])



    return (
        <>
            <Modal
                {...props}
                movie={movie}
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
                            value={content}
                            onChange={(event =>
                                setReviewText(event.target.value))}
                            className="form-control mb-4"
                            placeholder="What did you think? Tell us!">
                        </textarea>

                        <label htmlFor="slider" className="form-label">On a scale of 1-10, how would you rate this movie</label>
                        <input type="range" onChange={(e)=>setReviewNum(parseFloat(e.target.value))} className="form-range" min="0" max="10" step="0.5" id="slider"/>
                        <label htmlFor="slider" className="float-start">0</label>
                        <label htmlFor="slider" className="float-end">10</label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-secondary" onClick={props.onHide}>Cancel</Button>
                    <Button onClick={()=>{ reviewClickHandler() ; props.onHide()}}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default WriteReviewModal;