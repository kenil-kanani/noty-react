import React, { useState, useContext } from 'react'
import NotyDiv from '../NotyDiv/NotyDiv'
import './NotyStack.style.css'
import NotyContext from '../../context/NotyContext'
import { AddNoty } from '../../Coponents/index'

const NotyStack = () => {

    const { stack } = useContext(NotyContext)
    const [options, setOptions] = useState({
        text: '',
        type: 'success',
    })
    
    return (
        <>
            <AddNoty options={options} setOptions={setOptions} />
            <div className='noty-stack'>
                {
                    stack.map((item) => (
                        <NotyDiv
                            key={item.id}
                            text={item.text}
                            type={item.type}
                            id={item.id}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default NotyStack