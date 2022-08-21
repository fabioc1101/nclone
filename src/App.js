
import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import "./Nav.css";

function App() {
  return (
    <div className="App">
     <Nav />
     <Banner />
      <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title ="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow/>
      <Row title ="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
      <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
      <Row title ="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
