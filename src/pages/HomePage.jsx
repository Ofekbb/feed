import React, { useState, useEffect } from 'react';
import { avatarService } from '../services/avatar.service.js'

// Services
import { feedService } from '../services/feed.service.local.js'

export function HomePage() {

    // const [isWorkerOn, setWorkerState] = useState(false)
    const [feeds, setFeeds] = useState([])

    useEffect(() => {
        loadFeeds()
        console.log('feed:', feeds)
    }, [])


    const loadFeeds = async () => {
        const feedsToSet = await feedService.query()
        console.log(feedsToSet);
        setFeeds(feedsToSet);
    }


    return (
        <section className="home-page">
            <h1>asdfasdasd</h1>
        </section>
    )
}
