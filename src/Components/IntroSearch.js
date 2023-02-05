import React from "react";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import UpperSection from "./UpperSection";
import { BrowserRouter, Link, Route } from "react-router-dom";

const IntroSearch = () => {
  const [getApi, setApi] = React.useState([]);
  const [getLoading, setLoading] = React.useState(false);
  const [getDataDesc, setDataDesc] = React.useState([]);
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://quran-api.santrikoding.com/api/surah`);
        const data = await response.json();
        return setApi(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const [getSearchInput, setSearchInput] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const [getSearchResult, setSearchResult] = useState([]);
  useEffect(() => {
    if (getSearchInput.length > 0) {
      const result = getApi.filter((data) => {
        return data.nama_latin.match(getSearchInput);
      });
      setSearchResult(result);
    }
    else {
      setSearchResult(getApi);
    }
  }, [getSearchInput, getApi]);

  console.log(getApi);

  return (
    <>
      <UpperSection />
      {/* ============================================== */}
      <section className={`p-6 min-h-screen ${getLoading ? "" : "bg-base-200"}`}>
        <div className="flex justify-center items-center pb-6">
          <div className="form-control">
            <div className="input-group ">
              <input type="text" value={getSearchInput} onChange={searchHandler} placeholder="Search…" className="input input-bordered" />
              <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:gap-6 gap-4 mx-3 grid-cols-1 md:grid-cols-3">
          {getLoading ? (
            <div style={style}>
              <PropagateLoader color="#000000" />
            </div>
          ) : (
            getSearchResult.map((data, index) => (
              <Link to={`/surah/${data.nomor}`}>
                <div key={data.nomor} className="card  hover:-translate-y-2 transition-all rounded-lg bg-base-100 shadow-md ">
                  <div className="card-body p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 font-bold btn-circle btn scale-75 border-none text-white bg-[#119179] hover:bg-[#196f5d]">
                        {data.nomor}.
                      </div>
                      <div className="ml-5 w-0 flex-1 ">
                        <p className="font-bold">
                          {data.nama_latin}&nbsp;({data.jumlah_ayat})
                        </p>
                        <small>
                          <p className="text-gray-500">{data.arti}</p>
                        </small>
                      </div>
                      <div className="Arab">{data.nama}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default IntroSearch;
