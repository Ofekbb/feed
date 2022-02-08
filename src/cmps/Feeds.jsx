import React, { useState, useEffect } from "react";
import { Feed } from "./Feed";
import { Filter } from "./Filter.jsx";
import { feedService } from "../services/feed.service.local";

export function Feeds() {
  const [feeds, setFeeds] = useState([]);
  const [filterBy, setFilterBy] = useState(null);

  useEffect(() => {
    console.log("insdie:");
    loadFeeds();
    console.log("feed:", feeds);
  }, []);

  useEffect(() => {
    filterFeeds(filterBy);
  }, [filterBy]);

  const filterFeeds = (filterBy) => {
    const filteredFeeds = feeds.filter(
      (feed) => feed.email.includes(filterBy) || feed.comment.includes(filterBy)
    );
    setFeeds(filteredFeeds);
  };

  const loadFeeds = async (filterBy) => {
    const feedsToSet = await feedService.query(filterBy);
    console.log(feedsToSet);
    setFeeds(feedsToSet);
  };

  if (!feeds) return <span>Loading..</span>;

  return (
    <section className="feeds">
      <Filter setFilterBy={setFilterBy} />
      {feeds.map((feed) => (
        <Feed key={feedService.makeId()} feed={feed} />
      ))}
    </section>
  );
}
