import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [data, setData] = useState(null);

  const getNews = async () => {
    try {
      const url =
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=72fb5a6e9f6e4a5c92b4c3336ac99755";

      const response = await axios.get(url);
      // , {
      //   headers: {
      //     "x-apikey": "72fb5a6e9f6e4a5c92b4c3336ac99755",
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET, PUT, DELETE, PATCH, OPTIONS",
      //     "Access-Control-Allow-Credentials": true,
      //   },
      //   responseType: "json",
      // });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   getNews();
  // }, []);

  return (
    <div>
      <div>Today's</div>
      <button onClick={getNews}>불러오기</button>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default News;
