import { STUDENT_ID } from "../actions/types"

const initialState = {
    id: ""
}

const studentIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case STUDENT_ID:
            return {
                id: action.payload.id
            }
        default:
            return state
    }
}

export default studentIdReducer;