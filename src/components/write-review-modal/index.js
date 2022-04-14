import React from "react";
import "./modal.css"

const WriteReviewModal = prop => {
    if (!prop.show) {
        return null
    }
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Write a Review</h4>
                    </div>
                    <div className="modal-body">
                        This is where the content will go
                    </div>
                    <div className="modal-footer">
                        <button className="button">Close</button>
                        <button className="button">Publish</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WriteReviewModal;