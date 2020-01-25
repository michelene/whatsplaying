import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import TrailerContainer from "./TrailerContainer";

function App() {
  const searchOptions = {
    key: process.env.REACT_APP_TMD_KEY,
    api: "https://api.themoviedb.org/3/movie/now_playing",
    language: "en-US",
    page: 1
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [getData]);

  function getData() {
    const url = `${searchOptions.api}?api_key=${searchOptions.key}&language=${searchOptions.language}&page=${searchOptions.page}`;
    console.log("getData", url);

    // fetch(url)
    //   .then(response => response.json())
    //   .then(response => {
    //     setImages(response.data);
    //   })
    //   .catch(console.error);
  }

  return (
    <div className="App">
      <Header />
      <TrailerContainer />
    </div>
  );
}

export default App;
