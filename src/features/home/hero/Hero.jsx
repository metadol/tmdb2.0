import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './hero.scss'

import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'

import Img from '../../../components/lazy-image/Img'
import ContentWrapper from '../../../components/wrapper/Wrapper'



const Hero = () => {

    const [backgroundImage, setbackgroundImage] = useState('')
    const [query, setQuery] = useState('')

    const navigate = useNavigate()

    const imageurl = useSelector((state) => state.home.url);



    const { data, loading } = useFetch('/movie/upcoming',200)


    useEffect(() => {
        const bg = imageurl.backdrop +
            data?.results[Math.floor(Math.random() * data.results.length)]?.backdrop_path

        setbackgroundImage(bg)
        console.log(bg)
    }, [data])


    const searchQueryhandler = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }


    return (
        <div className='heroBanner'>
            {!loading && <div className="backdrop-img">
                <Img src={backgroundImage} />
            </div>}

            <div className="opacity-layer"/>

            <ContentWrapper>
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
            </ContentWrapper>
        </div>
    )
}

export default Hero