import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import PropagateLoader from "react-spinners/PropagateLoader";

const Surah = () => {
  const { id } = useParams();
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  const [getApi, setApi] = React.useState([]);
  const [getLoading, setLoading] = React.useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://quran-api.santrikoding.com/api/surah/${id}`);
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

  // const [getSurat, setSurat] = React.useState(false);
  // useEffect(() => {
  //   getApi.surat_sebelumnya === false ? setSurat(false) : setSurat(true);
  // }, []);
  console.log(getApi.surat_sebelumnya);
  const playAudio = () => {
    const audio = new Audio(getApi.audio);
    audio.play();
  };

  return (
    <>
      <div className="bg-base-200 min-h-screen pb-32 p-4 md:p-12">
        <div class="flex-inline  space-y-4 md:space-y-0 md:flex justify-center items-center md:justify-between">
          <div className={`${getApi.surat_sebelumnya ? "" : "hidden"} `}>
            <a href={`/surah/${getApi.surat_sebelumnya?.id}`}>
              <button className="btn w-full">← Surat Sebelumnya</button>
            </a>
          </div>
          <div className="">
            {/* <Link to={`/surah/${getApi.surat_selanjutnya?.id}`}>
            </Link> */}
            <a href={`/surah/${getApi.surat_selanjutnya?.id}`}>
              <button className="btn w-full">Surat Selanjutnya →</button>
            </a>
          </div>
        </div>
        {getLoading ? (
          <div style={style}>
            <PropagateLoader color="#000000" />
          </div>
        ) : (
          <>
            <div className="card bg-base-100 shadow-xl my-4">
              <div className="card-body">
                <div onClick={playAudio} class="card-actions absolute right-[35px] md:-right-[-80px]">
                  <button class="btn btn-square btn-sm w-12 ">▶</button>
                </div>
                <h2 className="card-title">
                  {getApi.nama_latin} - {getApi.nama}
                </h2>
                <ul>
                  <li className="card-subtitle">Jumlah Ayat: {getApi.jumlah_ayat}</li>
                  <li className="card-subtitle">Tempat Turun: {getApi.tempat_turun}</li>
                </ul>
              </div>
            </div>
            {/* data */}
            {getApi.ayat?.map((item, index) => (
              <div className="card mt-8 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="grid overflow-hidden gap-4 md:grid-cols-2 grid-cols-1 grid-rows-1 md:grid-rows-2">
                    <div className="box order-1 md:order-none">
                      {item.surah}:{item.nomor}
                    </div>
                    <div className="box order-3 md:order-none flex justify-end">{item.ar}</div>
                    <div className="box order-2 md:order-none text-justify ">{item.idn}</div>
                    <div className="box order-4 md:order-none italic flex justify-end">
                      <div className="" dangerouslySetInnerHTML={{ __html: item.tr }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="grid overflow-hidden gap-4 md:grid-cols-2 grid-cols-1 grid-rows-1 md:grid-rows-2">
                  <div className="box order-1 md:order-none">1:1</div>
                  <div className="box order-3 md:order-none flex justify-end">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
                  <div className="box order-2 md:order-none text-justify ">Dengan nama Allah Yang Maha Pengasih, Maha Penyayang. </div>
                  <div className="box order-4 md:order-none italic flex justify-end">bismillāhir-raḥmānir-raḥīm(i)</div>
                </div>
              </div>
            </div> */}
          </>
        )}
      </div>
    </>
  );
};

export default Surah;
