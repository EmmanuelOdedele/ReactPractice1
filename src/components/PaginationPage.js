import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import "../assets/styles/news.css"

function PaginationPage() {
  // useNavigate
  const navigate = useNavigate();
  // Handle navigation
  const handleNavigate = (event) => {
    event.preventDefault();
    navigate("/");
  };

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

  const newsItemsList = newsItems.map((item) => {
    return (
      <div className="news-item" key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <a href={item.url} target="_blank" rel="noreferrer">Read news</a>
      </div>
    );
  });

  return (
    <section className="main-page">
      <NavigationBar />
      <h1>Pagination</h1>
      <section className="news-item-container">{newsItemsList}</section>
      <button onClick={handleNavigate}>Go back to home</button>
    </section>
  );
}

export default PaginationPage;
