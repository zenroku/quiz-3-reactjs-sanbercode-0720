import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Content = () => {
    const [dataFilm, setDataFilm] = useState(null)

    useEffect(() => {
        if (dataFilm === null) {
            axios.get('http://backendexample.sanbercloud.com/api/movies')
                .then((res) => {
                    setDataFilm(res.data.map((elm => {
                        return (
                            {
                                title: elm.title,
                                description: elm.description,
                                year: elm.year,
                                duration: elm.duration,
                                genre: elm.genre,
                                rating: elm.rating
                            }
                        )
                    }
                    )))

                })
        }
    }, [dataFilm])

    const minuteToHourConverter = (input) => {
        let hours = Math.round(input / 60)
        let minute = input % 60
        let text = ''

        if (minute === 0) {
            text = `${hours} jam`
        } else if (hours < 1) {
            text = `${minute} menit`
        } else if (isNaN(input)) {
            text = '-'
        } else {
            text = `${hours} jam ${minute} menit`
        }
        return text
    }

    return (
        <div id="article-list">
            <div>{
                dataFilm !== null && dataFilm.sort((a, b) => {
                    return (b.rating - a.rating)
                }).map((e, index) => {
                    return (
                        <div key={index}>
                            <h3 key={index}><a href="/">{e.title}</a></h3>
                            <div className="content_detail">
                                <p><strong>Rating {e.rating}</strong></p>
                                <p><strong>Durasi: {minuteToHourConverter(parseInt(e.duration))}</strong></p>
                                <p><strong>Genre: {e.genre}</strong></p>
                            </div>
                            <div className="content_deskripsi">
                                <p><strong>deskripsi: </strong></p>
                                <p>
                                    {e.description}
                                </p>
                            </div>
                        </div>
                    )
                })
            }

            </div>
        </div>
    )

}

export default Content