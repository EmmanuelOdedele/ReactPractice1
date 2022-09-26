import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import "../assets/styles/news.css";

function PaginationPage() {
  // useNavigate
  const navigate = useNavigate();
  // Handle navigation
  const handleNavigate = (event) => {
    event.preventDefault();
    navigate("/");
  };

  // Setup our state
  const [currentPosition, setCurrentPosition] = useState(0);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  // Setup initial state
  useEffect(() => {
    // List new items
    const newsItems = [
      {
        title: "BBC News",
        url: "https://www.bbc.com/news",
        description: "Latest news from BBC",
      },
      {
        title: "CNN News",
        url: "https://www.cnn.com/",
        description: "Latest news from CNN",
      },
      {
        title: "Google News",
        url: "https://www.google.com/",
        description: "Latest news from Google",
      },
      {
        title: "TechCrunch",
        url: "https://www.techcrunch.com/",
        description: "Latest news from TechCrunch",
      },
      {
        title: "The Verge",
        url: "https://www.theverge.com/",
        description: "Latest news from The Verge",
      },
    ];
    const item = newsItems[currentPosition];

    // Set state
    setListItems(newsItems);

    // Set our state
    setNews(item);
    setLoading(false);
  }, [currentPosition]);

  // Handle next
  const handlePrevious = (event) => {
    event.preventDefault();
    if (currentPosition > 0) {
      setCurrentPosition((prev) => prev - 1);
    } else {
      setCurrentPosition(0);
    }
  };

  // Handle previous
  const handleNext = (event) => {
    event.preventDefault();
    //Update our state

    const length = listItems.length;
    const count = length - 1;
    if (currentPosition < count) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
  };

  // Implementing pagination, we need to get rid of this

  // const newsItemsList = newsItems.map((item) => {
  //   return (
  //     <div className="news-item" key={item.id}>
  //       <h2>{item.title}</h2>
  //       <p>{item.description}</p>
  //       <a href={item.url} target="_blank" rel="noreferrer">
  //         Read news
  //       </a>
  //     </div>
  //   );
  // });

  return (
    <section className="main-page">
      <NavigationBar />
      <h1>Pagination</h1>
      <section className="news-item-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="news-item">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url} target="_blank" rel="noreferrer">
              Read news
            </a>
          </div>
        )}
      </section>
      <div>
        <button className="prev" onClick={handlePrevious}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
      <button onClick={handleNavigate}>Go back to home</button>
    </section>
  );
}

export default PaginationPage;
