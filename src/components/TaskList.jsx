import React from 'react';
import CheckBox from './CheckBox';
import Button from '@mui/material/Button'


const TaskList = props => {
    const { list, setList } = props;
    const onChangeStatus = e => {
        const { name, checked } = e.target;
        const updateList = list.map(item => ({
            ...item,
            done : item.id === name ? checked : item.done
        }));
        setList(updateList);
    };
    const onClickRemoveItem = () => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };
    const check = list.map(item => (
        <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
    ));
    return (
        <div className="Form-List">
            {list.length ? check : "No tasks"}
            {list.length ? (
                <p>
                    <Button variant="contained" onClick={onClickRemoveItem}>
                        Delete all done
                    </Button>
                </p>
            ) : null}
        </div>
    )
}


export default TaskList