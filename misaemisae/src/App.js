import React from "react";
import axios from "axios";
import "./App.css";
import useAsync from "./useAsync.js";

const getMisae = async () => {
  const response = await axios.get(
    "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99"
  );
  return response;
};

function App() {
  const [state, fetchMisae] = useAsync(getMisae, []);

  const { misae, error, loading } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!misae) return null;

  return (
    <>
      <ul className={"misaeLists"}>
        {misae.map((m) => {
          return (
            <li
              key={m.MSRSTE_NM}
              style={{
                background: m.IDEX_NM === "좋음" ? "skyblue" : "seagreen",
              }}
            >
              {m.MSRSTE_NM}
              <span className={"state"}>{m.IDEX_NM}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={() => fetchMisae()} className={"fetchBtn"}>
        Refetch
      </button>
    </>
  );
}

export default App;
