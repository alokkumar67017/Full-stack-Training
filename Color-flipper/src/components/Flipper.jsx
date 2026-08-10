import React, { useEffect, useState, useRef } from 'react'
import './style.css'

function Flipper(){
    const colors = [
        'red',
        'blue',
        'green',
        'purple',
        'orange',
        'teal',
        'gold',
        '#ff66cc',
        '#00b894',
        '#6c5ce7',
    ]

    const [color, setColor] = useState(colors[0])
    const [auto, setAuto] = useState(true)
    const intervalRef = useRef(null)

    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])

    useEffect(() => {
        if (auto) {
            intervalRef.current = setInterval(() => {
                setColor(prev => {
                    let next = prev
                    while (next === prev) {
                        next = colors[Math.floor(Math.random() * colors.length)]
                    }
                    return next
                })
            }, 1500)
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [auto])

    const changeBackground = () => {
        let nextColor = color
        while (nextColor === color) {
            nextColor = colors[Math.floor(Math.random() * colors.length)]
        }
        setColor(nextColor)
    }
// this use for button sto and start 
    // return (
    //     <div className="flipper-container" style={{ backgroundColor: color }}>
    //         <h1>Color Flipper</h1>
    //         <p>Current color: <strong>{color}</strong></p>
    //         <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
    //             <button onClick={() => setAuto(a => !a)}>{auto ? 'Start' : 'stop'}</button>
    //             {/* <button onClick={changeBackground}>Change Color</button> */}
    //         </div>
    //     </div>
    // )
}

export default Flipper
