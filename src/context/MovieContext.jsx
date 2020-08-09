import React, { createContext, useState } from 'react'

export const MovieContext = createContext()

export const MovieProvider = props => {
    const [dataFilm, setDataFilm] = useState(null)
    const [inputUser, setInputUser] = useState({ title: '', description: '', year: '', duration: '', genre: '', rating: '' })
    const [selectedId, setSelectedId] = useState(0)
    const [isUpdate, setIsUpdate] = useState(false)

    return (
        <MovieContext.Provider value={[dataFilm, setDataFilm,
            inputUser, setInputUser,
            selectedId, setSelectedId,
            isUpdate, setIsUpdate
        ]}>
            {props.children}
        </MovieContext.Provider>
    )
}

