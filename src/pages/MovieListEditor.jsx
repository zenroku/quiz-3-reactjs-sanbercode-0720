import React from 'react'
import FormInput from '../components/FormInput'
import Table from '../components/Table'
import { MovieProvider } from '../context/MovieContext'

const MovieListEditor = () => {
    return (
        <>
            <MovieProvider>
                <FormInput />
                <Table />
            </MovieProvider>
        </>
    )
}

export default MovieListEditor