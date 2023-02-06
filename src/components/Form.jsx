import React, { useState } from 'react';

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
                    <input type={Text} className='Form-Input-Text' value={Description} onChange={e => setDescription(e.target.value)} />
                    <button className='Form-Input-Button' disabled={Description ? "" : "Disabled"}>
                        Add
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form