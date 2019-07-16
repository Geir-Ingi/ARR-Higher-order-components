import {SAVE_COMMENT, FETCT_COMMENTS} from 'actions/types';

export default function(state = [], action){
    switch (action.type){
        case SAVE_COMMENT:
            return [...state, action.payload];
        case FETCT_COMMENTS:            
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        default:
            return state;
    }
}