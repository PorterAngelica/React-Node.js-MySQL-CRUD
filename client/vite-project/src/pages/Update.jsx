
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {

//to enter info from the frontend to the db
const [book, setBook] = useState({
    title: "",
    description: "",
    cover:"",
})

const navigate = useNavigate()
const location = useLocation()
const bookId = location.pathname.split("/")[2]
console.log(location.pathname.split("/")[2])

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]:e.target.value }));
    }

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/books/"+bookId, book)
            navigate("/")

        }catch(err){
            console.log(err)
        }

    }


return (
    <div className="form">
        <h1>Update book</h1>

        <input type="text"
        placeholder='title'
        onChange={handleChange}
        name='title'/>

        <input type="text"
        placeholder='description'
        onChange={handleChange}
        name='description'/> 


        <input type="text"
        placeholder='cover'
        onChange={handleChange}
        name='cover'/>

        <button onClick={handleClick}>Update</button>
    </div>
)
}

export default Update
