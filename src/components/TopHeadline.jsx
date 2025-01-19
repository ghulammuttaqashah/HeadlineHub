import { useState, useEffect } from "react";
import Card from "./Card";

function TopHeadline({ category }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = 'fc236399eb4846afb214a29ab79006b3';

  const apiFetch = async () => {
    setIsLoading(true);
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      if (category) {
        url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
      }

      // Adding headers for security
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      setArticles(data.articles.slice(0, 5));  
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    apiFetch();
  }, [category]);

  return (
    <div className="top-headline">
      <h1>{category ? `${category} News` : "Top Headlines"}</h1>
      <div className="articles">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          articles.map((article, index) => (
            <Card
              key={index}
              title={article.title}
              imageUrl={article.urlToImage}
              source={article.source.name}
              description={article.description}
              url={article.url}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TopHeadline;