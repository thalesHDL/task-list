import * as type from '../env/actionsTypes';


const initialState = {
    isFetching: false,
    tasks: [],
    pendingTasks: [],
    completedTasks: [],
    error: null,
};

const panelReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_TASKS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case type.FETCH_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload,
                pendingTasks: action.payload.filter(task => task.status === 'PENDING'),
                completedTasks: action.payload.filter(task => task.status === 'COMPLETED'),
                isFetching: false,
            };
        case type.FETCH_TASKS_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };
        default:
            return state;
    }
};


export default panelReducer
