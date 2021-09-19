import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FcSearch } from 'react-icons/fc';
import { useHistory } from "react-router-dom"

const SearchPage = () => {
    const [photos, setPhotos] = useState([]);
    const [query, setquery] = useState("Image")
    const history = useHistory();
    console.log(history);

    const fetchPhoto = () => {
        axios.get(`https://pixabay.com/api/?key=23445539-48caca144f81304e9b55a1ef8&q=${query}`)
            .then(res => {
                console.log(res.data.hits);
                setPhotos(res.data.hits)
            })
            .catch(err => console.log(err))
    }

    const submit = (e) => {
        e.preventDefault()
        fetchPhoto()
    }

    const addCaption = (pic) => {
        history.push({
            pathname: "/addcap",
            state: pic,
        })
    }

    useEffect(() => {
        fetchPhoto()
    }, [])


    return (
        <div className="root">
            <div className="heading">
                <h2 className="name">Name : Anuj Negi</h2>
                <h2 className="email">Email : negianuj27@gmail.com</h2>
            </div>

            <div className="main" >
                <div >
                    <form className="search" onSubmit={e => submit(e)}>
                        <input type="text" className="input" value={query} onChange={(e) => setquery(e.target.value)} />
                        <FcSearch className="icon" onClick={fetchPhoto} />
                    </form>
                </div>


                <div className="imgGallery">
                    {
                        photos.length !== 0 ? photos.map(pic => {
                            return (
                                <div className="card" key={pic.id}>
                                    <img src={pic.webformatURL} />
                                    <button className="btn" onClick={() => addCaption(pic.webformatURL)}>Add Caption</button>
                                </div>
                            )
                        })

                            :
                            <h3>No Match Found</h3>
                    }
                </div>

            </div>
        </div>
    )
}

export default SearchPage
