import React, { useState, useEffect } from 'react';
import { Feeds } from "../cmps/Feeds";
import { AddFeed } from "../cmps/AddFeed";

// Services
// import { feedService } from "../services/feed.service.local.js";

export function HomePage() {

    useEffect(() => {
    }, [])



    //   if (!feeds) return <span>Loading..</span>;
    return (
        <section className="home-page">
            <div className="main-cmp">
                <AddFeed/>
                <Feeds />
            </div>
        </section>
    );
}
