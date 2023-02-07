import React, { Fragment } from 'react';

const CheckBox = props => {
    const {
        onChange,
        data: { id, Description, done }
    } = props
    return (
        <Fragment>
            <label className='new-item'>
                <input className='all-state' name={id} type='checkbox' defaultChecked={done} onChange={onChange} />
                <div className='all-text'>{Description}</div>
            </label>
        </Fragment>
    )
}

export default CheckBox