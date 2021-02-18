import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';

import {fetchTasks} from '../actions/panelActions';
import TaskList from './TaskList';
import { useDispatch } from 'react-redux';


function Panel() {
    const panel  = useSelector(state => state.panel);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    function handleSelect(task) {
        // TODO
    }

    function handleFinalize(task) {
        // TODO
    }

    return (
        <div>
            <div><TaskList tasks={panel.tasks} onSelect={handleSelect} onFinalize={handleFinalize} /></div>
            <div><TaskList tasks={panel.pendingTasks} onSelect={handleSelect} onFinalize={handleFinalize} /></div>
            <div><TaskList tasks={panel.completedTasks} onSelect={handleSelect} onFinalize={handleFinalize} /></div>
        </div>
    );
}


export default Panel;
