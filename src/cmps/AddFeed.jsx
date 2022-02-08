import React, { useState, useEffect } from 'react';
import { Feeds } from "../cmps/Feeds";
import { feedService } from "../services/feed.service.local.js";


export function AddFeed() {

    const [feedToAdd, setFeedToAdd] = useState({ email: '', txt: '' })

    useEffect(() => {
    }, [])

    const handleChange = ev => {
        const { name, value } = ev.target
        setFeedToAdd({ ...feedToAdd, [name]: value })
    }


    const onAddFeed = async ev => {
        ev.preventDefault()
        if (!feedToAdd.txt || !feedToAdd.email) return alert('All fields are required')
        await feedService.addFeed(feedToAdd)
        setFeedToAdd({ email: '', txt: '' })
    }
    //   if (!feeds) return <span>Loading..</span>;
    return (
        <>
            <section className='add-feed' >
                <form onSubmit={onAddFeed}>
                    <input name='email' placeholder=' Email' onChange={handleChange} value={feedToAdd.email} type="text"></input>
                    <textarea name='txt' placeholder=' Message' rows="4" cols="20" onChange={handleChange} value={feedToAdd.txt}></textarea>
                    <button>Submit</button>
                </form>
            </section>
            <hr className='hr1'/>
        </>
    );
}
