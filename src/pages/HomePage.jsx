import React, { useState, useEffect } from "react";
import { Feeds } from "../cmps/Feeds";

// Services
import { feedService } from "../services/feed.service.local.js";

export function HomePage() {
  // const [isWorkerOn, setWorkerState] = useState(false)
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    console.log("insdie:");
    loadFeeds();
    console.log("feed:", feeds);
  }, []);

  const loadFeeds = async () => {
    const feedsToSet = await feedService.query();
    console.log(feedsToSet);
    setFeeds(feedsToSet);
  };

  if (!feeds) return <span>Loading..</span>;
  return (
    <section className="home-page">
      <div className="main-cmp">
        <Feeds feeds={feeds} />
      </div>
    </section>
  );
}
