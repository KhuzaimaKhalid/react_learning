import React, { useEffect } from 'react'

const navbar = ({color}) => {

    useEffect(() => {
        alert("i will run on every render")
    })

    useEffect(() => {
        alert("Hey welcome to my page. This is the first render")
    }, [])

    useEffect(() => {
        alert("Hey I am running because color was changed")
    }, [color])


    useEffect(() => {
        alert("Hey welcome to my page. This is the first render of app.jsx")

        return () => {
            alert("component was unmounted")
        }
    }, [])



    return (
        <div>
            I am navbar of {color} color hehe
        </div>
    )
}

export default navbar
