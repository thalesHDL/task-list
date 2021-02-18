import * as type from '../env/actionsTypes'



export function fetchTasks() {
    return dispatch => {
        function request() {
            return {
                type: type.FETCH_TASKS_REQUEST
            }
        }
        function success(tasks) {
            return {
                type: type.FETCH_TASKS_SUCCESS,
                payload: tasks
            }
        }
        function fail(error) {
            return {
                type: type.FETCH_TASKS_FAIL,
                payload: error
            }
        }
        dispatch(request());
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        };
        fetch('http://localhost:8081/api/tasks', options)
            .then(res => res.json())
            .then(tasks => dispatch(success(tasks)))
            .catch(error => dispatch(fail(error)));
    };
}
