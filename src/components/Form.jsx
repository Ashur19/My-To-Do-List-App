import React, { useState } from 'react';
import { Input } from '@mui/material';

const Form = props => {
    const [Description, setDescription] = useState("");
    const { handleAddItem } = props;
    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            Description
        });
        setDescription("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className='Form-List'>
                <div className='Form-Input'>
                    <Input required onInvalid={e => e.target.setCustomValidity("Please, write me. Why are you bad with me? :(")} onInput={e => e.target.setCustomValidity("")} type={Text} className='Form-Input-Text' value={Description} onChange={e => setDescription(e.target.value)} />
                </div>
            </div>
        </form>
    )
}

export default Form