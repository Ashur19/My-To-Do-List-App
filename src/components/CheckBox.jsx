import React, { Fragment } from 'react';
import { Checkbox } from '@mui/material';

const CheckBox = props => {
    const {
        onChange,
        data: { id, Description, done }
    } = props
    return (
        <Fragment>
            <label className='new-item'>
                <Checkbox name={id} type='checkbox' defaultChecked={done} onChange={onChange}/>
                <div className='all-text'>{Description}</div>
            </label>
        </Fragment>
    )
}

export default CheckBox