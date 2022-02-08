import React from "react";

export function Filter({ setFilterBy }) {
  const handleChange = ({ target }) => {
    const filterBy = target.value;
    setFilterBy(filterBy);
  };
  return (
    <section className="filter">
      <input placeholder="Filter feed" onChange={handleChange} />
    </section>
  );
}
