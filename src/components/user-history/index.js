import React from "react";

import history from '../data/reviewRatingCombo.json';
import UserHistoryItem from "./user-history-item";

const UserHistory = () => {

    return (
        <>
            <ul>
                {
                    history.map(history => {
                        return(
                            <UserHistoryItem/>
                        );
                    })
                }
            </ul>
        </>
    )
};

export default UserHistory;