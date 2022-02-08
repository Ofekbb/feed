import React, { useState, useEffect } from 'react';
import { Feeds } from "../cmps/Feeds";

// Services
// import { feedService } from "../services/feed.service.local.js";

export function HomePage() {

    useEffect(() => {
    }, [])



    //   if (!feeds) return <span>Loading..</span>;
    return (
        <section className="home-page">
            <div className="main-cmp">
                <Feeds />
            </div>
        </section>
    );
}
