import React, { useEffect, useState } from "react";

const Films = () => {
  // Loading state
  const [loading, setLoading] = useState(true);

  // Data state
  const [data, setData] = useState(null);

  // Error state
  const [error, setError] = useState(null);

  // use the useEffect() method to call the fetch method with parameters

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        if (!response.ok) {
          alert(`This is an HTTP Error: The status is ${response.status}`);
          throw new Error(
            `This is an HTTP Error: The status is ${response.status}`
          );
        }

        return response.json();
      })

      .then((actualData) => {
        setData(actualData.results);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setData(null);
      })

      .finally(() => {
        setLoading(false);
      });
  },);

  //Render the fetched data to the UI

  return (
    <div>
      {loading && <div className="message">Fetching data! Please wait...</div>}

      {error && <div className="message">{`There was a problem fetching your data! Check your internet connection.`}</div>}

      <div className="card-grid">
          {data &&
            data.map((item) => {
              return (
                <li className="film-card" key={item.episode_id}>
                    <h3 className="title">{item.title}</h3>
                    <p className="dates">{item.release_date}</p>
                    <p className="text">{item.opening_crawl}</p>
                    <div className='divider'></div>
                    <button className='butn'>More Info</button>
                  </li>
          
              );
            })}
        
      </div>
    </div>
  );
};

export default Films;
