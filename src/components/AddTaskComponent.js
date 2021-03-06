import React, { useContext, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { TaskContext } from '../contexts/TaskContext';
import { Action } from '../reducers/taskReducer';
import uuid from 'uuid/dist/v1';

const AddTaskComponent = () => {

    const { dispatch } = useContext(TaskContext);
    const [description, setDescription] = useState('');

    const onAddTask = (e) => {

        e.preventDefault();

        dispatch({
            type: Action.ADD_TASK,
            task: {
                id:uuid(),
                isChecked:false,
                created:new Date(),
                description:description
            }
        });
        setDescription('')
    }
    return (
        <form onSubmit={onAddTask}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">

                <TextField
                    label="Add Task"
                    variant="outlined"
                    size="small"
                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                />

            </Grid>
        </form>
    );
}

export default AddTaskComponent;