import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { MovieContext } from '../context/MovieContext'

const Table = () => {
    const [dataFilm, setDataFilm, , setInputUser, , setSelectedId, , setIsUpdate] = useContext(MovieContext)


    useEffect(() => {
        if (dataFilm === null) {
            axios.get('http://backendexample.sanbercloud.com/api/movies')
                .then(res => {
                    setDataFilm(res.data.map(elm => {
                        return ({
                            id: elm.id,
                            title: elm.title,
                            description: elm.description,
                            year: elm.year,
                            duration: elm.duration,
                            genre: elm.genre,
                            rating: elm.rating
                        })
                    }))
                })
        }
    })

    const handleEdit = (event) => {
        const editId = parseInt(event.target.value)
        const dataWillEdit = dataFilm.find(e => e.id === editId)
        setInputUser({
            title: dataWillEdit.title,
            description: dataWillEdit.description,
            year: dataWillEdit.year,
            duration: dataWillEdit.duration,
            genre: dataWillEdit.genre,
            rating: dataWillEdit.rating
        })
        setIsUpdate(true)
        setSelectedId(editId)
    }

    const handleDelete = (event) => {
        const delId = parseInt(event.target.value)
        let newDataFilm = dataFilm.filter(e => e.id !== delId)

        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${delId}`)
            .then(res => {
                console.log(res)
            })
        setDataFilm([...newDataFilm])
    }

    return (
        <div className="table_container">
            <h1>Data Film yang ada</h1>
            <table className="table_content">
                <thead className="table_head">
                    <tr>
                        <th className="table_th">Title</th>
                        <th className="table_th">Description</th>
                        <th className="table_th">Year</th>
                        <th className="table_th">Duration</th>
                        <th className="table_th">Genre</th>
                        <th className="table_th">Rating</th>
                        <th className="table_th">Action</th>
                    </tr>
                </thead>
                <tbody className="table_body">
                    {
                        dataFilm !== null && dataFilm.map((e, index) => {
                            return (
                                <tr key={index}>
                                    <td className="table_td">{e.title}</td>
                                    <td className="table_td">{e.description}</td>
                                    <td className="table_td">{e.year}</td>
                                    <td className="table_td">{e.duration} minutes</td>
                                    <td className="table_td">{e.genre}</td>
                                    <td className="table_td">{e.rating}</td>
                                    <td className="table_td_button">
                                        <button onClick={handleEdit} value={e.id}>Edit</button>
                                        <button onClick={handleDelete} value={e.id}>Delete</button>
                                    </td>
                                </tr>

                            )
                        })

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table