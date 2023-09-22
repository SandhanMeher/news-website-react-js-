import React from "react";
import { useEffect, useState } from "react";
import CardNw from "./CardNw";
import Loading from "./Loading";

export default function News({ pages,search }) {
  const [state, setstate] = useState([]);
  const [pg, setPg] = useState(1);
  const [abc, setAbc] = useState(false);

  useEffect(() => {
    fun();
  }, [pg,search]);
  const fun = async () => {
    setAbc(true);
    console.log(abc);
    const url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=35a720ee94694582ae22cfe1a566a00b&pageSize=${pages}&page=${pg}`;
    // `${search}`.charAt(0).toUpperCase +`${search}`.slice(1)
    let a=search
    document.title=a.charAt(0).toUpperCase() + a.slice(1);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setAbc(false);
      console.log(abc);
      console.log(result);
      console.log(result);
      setstate(result.articles);
    } catch {
      console.log("Error");
    }
  };

  function handlePgPrevious() {
    if (pg === 1) {
      setPg(1);
    } else {
      setPg(pg - 1);
    }
  }
  function handlePgNext() {
    if (pages * pg <= 100 - pages) {
      setPg(pg + 1);
    }
  }
  return (
    <div>
        <h1 style={{ textAlign: "center" }}>EchoAlerts-{search}</h1>
      {abc && <Loading />}
      <div className="container  ">
        <div className="row">
          {state.map((elem) => {
            return (
              elem.urlToImage && (
                <div className="col-md-4 my-4" key={elem.url}>
                  <CardNw obj={elem} />
                </div>
              )
            );
          })}
        </div>
        <div className="d-flex justify-content-around my-5">
          <button
            type="button"
            disabled={pg === 1 ? true : false}
            className="btn btn-dark"
            onClick={handlePgPrevious}
          >
            &larr; Previous
          </button>
          <a
            href="#nav"
            color="white"
            style={pages * pg <= 100 - pages ? null : { pointerEvents: "none" }}
          >
            {" "}
            <button
              type="button"
              disabled={pages * pg <= 100 - pages ? false : true}
              className="btn btn-dark"
              onClick={handlePgNext}
            >
              {" "}
              ( {pg} ) Next &rarr;
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
