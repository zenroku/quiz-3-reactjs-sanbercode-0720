import React, { useContext } from 'react'
import axios from 'axios'
import { MovieContext } from '../context/MovieContext'

const FormInput = () => {
    const [, , inputUser, setInputUser, selectedId, setSelectedId, isUpdate, setIsUpdate] = useContext(MovieContext)

    const handleInput = (event) => {
        const typeOfInput = event.target.name

        switch (typeOfInput) {
            case 'title':
                {
                    setInputUser({ ...inputUser, title: event.target.value })
                    break
                }
            case 'description':
                {
                    setInputUser({ ...inputUser, description: event.target.value })
                    break
                }
            case 'year':
                {
                    setInputUser({ ...inputUser, year: event.target.value })
                    break
                }
            case 'duration':
                {
                    setInputUser({ ...inputUser, duration: event.target.value })
                    break
                }
            case 'genre':
                {
                    setInputUser({ ...inputUser, genre: event.target.value })
                    break
                }
            case 'rating':
                {
                    setInputUser({ ...inputUser, rating: event.target.value })
                    break
                }
            default:
                { break }
        }

    }

    const maxYear = new Date().getFullYear()

    const handleSubmit = (event) => {

        event.preventDefault()
        if (inputUser['title'].replace(/\s/g, '') !== '' &&
            inputUser['description'].replace(/\s/g, '') !== '' &&
            String(inputUser['year']).replace(/\s/g, '') !== '' &&
            String(inputUser['duration']).replace(/\s/g, '') !== '' &&
            inputUser['genre'].replace(/\s/g, '') !== '' &&
            String(inputUser['rating']).replace(/\s/g, '') !== '') {

            if (isUpdate === false) {
                axios.post('http://backendexample.sanbercloud.com/api/movies', {
                    title: inputUser.title,
                    description: inputUser.description,
                    year: inputUser.year,
                    duration: inputUser.duration,
                    genre: inputUser.genre,
                    rating: inputUser.rating
                })
                    .then((res) => {
                        console.log(res)
                    })
            } else {
                axios.put(`http://backendexample.sanbercloud.com/api/movies/${selectedId}`, {
                    title: inputUser.title,
                    description: inputUser.description,
                    year: inputUser.year,
                    duration: inputUser.duration,
                    genre: inputUser.genre,
                    rating: inputUser.rating
                })
                    .then(res => {
                        console.log(res)
                    })
            }
            setSelectedId(0)
            setIsUpdate(false)
            setInputUser({ title: '', description: '', year: '', duration: '', genre: '', rating: '' })
        }
    }


    return (
        <div className="formInput_container">
            <h1>Form Input Data Film</h1>
            <form className="formInput" onSubmit={handleSubmit}>
                <label className="formInput_label">Title</label>
                <input type="text" name="title" className="formInput_input" onChange={handleInput} value={inputUser.title}></input>
                <label className="formInput_label">Description</label>
                <textarea maxLength="500" name="description" className="formInput_input" onChange={handleInput} value={inputUser.description}></textarea>
                <label className="formInput_label">Year</label>
                <input min="1888" max={maxYear} type="number" name="year" className="formInput_input" placeholder="year format only" onChange={handleInput} value={inputUser.year}></input>
                <label className="formInput_label">Duration</label>
                <input min="1" type="number" name="duration" className="formInput_input" placeholder="in minutes" onChange={handleInput} value={inputUser.duration}></input>
                <label className="formInput_label">Genre</label>
                <input type="text" name="genre" className="formInput_input" placeholder="separate with comma ','" onChange={handleInput} value={inputUser.genre}></input>
                <label className="formInput_label">Rating</label>
                <input min="1" max="10" type="number" name="rating" className="formInput_input" placeholder="min 1 max 10" onChange={handleInput} value={inputUser.rating}></input>
                <button className="button_formInput">Submit</button>
            </form>
        </div >
    )
}

export default FormInput