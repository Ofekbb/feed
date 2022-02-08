import React from "react";
import { Feed } from "./Feed";
import { Filter } from "./Filter.jsx";
import { feedService } from "../services/feed.service.local";

export function Feeds({ feeds }) {
  return (
    <section className="feeds">
      <Filter />
      {feeds.map((feed) => (
        <Feed key={feedService.makeId()} feed={feed} />
      ))}
    </section>
  );
}
