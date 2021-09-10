import React, { useState, useEffect } from 'react'
import "./css/style.css"
import axios from 'axios'


function Tempapp() {
    const [city, setcity] = useState(null)
    const [search, setsearch] = useState(null)

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ff1ee767a150b4ecee982e991a3e9ef1`)
            .then(res => {
                console.log(res.data)

                setcity(res.data)

            }).catch(err => {
                console.log(err);
            })






    }, [search])





    return (
        <div className='box'>
            <div className='inputData'>
                <input
                    type='search'
                    className='inputFiled'
                    value={search}
                    onChange={(event) => {
                        setsearch(event.target.value)

                    }}

                />

            </div>

            {!city ? (
                <>
                <h3>Search Your city for weather updates</h3>

                <p className='errorMsg'> Currently no data  is found </p>
                </>


            ) : (<div>
                <div className="info">
                    <h2 className='location'>
                    <i className="fas fa-street-view"></i>{search}</h2>
                    <h1 className='temp'>
                        {city.main.temp}
                    </h1>
                    <h3 className="tempmin_max"> Min:{city.main.temp_min} | Max :{city.main.temp_max} </h3>


                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>


            )}
           


        </div>
    )
}

export default Tempapp
