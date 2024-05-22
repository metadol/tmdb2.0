import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './hero.scss'



const Hero = () => {

    const [backgroundImage, setbackgroundImage] = useState('')
    const [query, setQuery] = useState('')

    const navigate = useNavigate()

    const searchQueryhandler = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }


    return (
        <div className='heroBanner'>
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className='title'>Welcome</span>
                    <span className='subTitle'>Millions of movies, TV Shows and people to discover. Explore now</span>

                    <div className='searchInput'>
                        <input
                            type='text'
                            placeholder='Search....'
                            onKeyUp={searchQueryhandler}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero