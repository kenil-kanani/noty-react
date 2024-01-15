import React, { useContext } from 'react'
import { useState } from 'react'
import './NotyDiv.style.css'
import NotyContext from '../../context/NotyContext'

const NotyDiv = ({ text, type, id }) => {

    const [start, setStart] = useState(true)
    const { notyDispatch } = useContext(NotyContext)

    return (
        <>
            <div className={`noty-div shadow-lg rounded-lg ${start ? "noty_effects_open" : "noty_effects_close"}  ${type.toLowerCase()}`}>
                <div className="flex justify-between  items-center">
                    <h4 className="text-lg font-semibold">{type.toUpperCase() || "Notification"}</h4>
                    <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        <XIcon
                            className="h-4 w-4"
                            onClick={() => {
                                setStart(false)
                                setTimeout(() => {
                                    notyDispatch({
                                        type: 'REMOVE_NOTY',
                                        payload: { id }
                                    })
                                }, 500);
                            }}
                        />
                    </button>
                </div>
                <p className={`mt-2 text-sm ${type.toLowerCase() + "-text"}`}>{text || "Type your message here!"}</p>
            </div>
        </>
    )
}
export default NotyDiv


function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}