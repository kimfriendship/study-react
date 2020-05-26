import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [data, setData] = useState(null);

  const getNews = async () => {
    try {
      const url =
        "/v2/top-headlines?country=kr&apiKey=72fb5a6e9f6e4a5c92b4c3336ac99755";
      const response = await axios.get(url);
      setData(response.data.articles);
      console.log(response.data.articles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <ul className={"newsList"}>
        {data &&
          data.map((news, i) => {
            return (
              <li className={"news"} key={i}>
                <a href={news.url} className={"title"}>
                  <strong>{news.title}</strong>
                </a>
                <img
                  className={"thumbnail"}
                  src={news.urlToImage}
                  alt="뉴스 썸네일"
                />
                <p className={"detail"}>
                  <strong>{news.publishedAt}</strong>
                  {news.description}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default News;
