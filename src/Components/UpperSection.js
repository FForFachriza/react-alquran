import React, { useEffect } from "react";

const UpperSection = () => {
  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

const [getTheme, setTheme] = React.useState("emerald");

const toggleTheme = () => {
  setTheme(getTheme === "emerald" ? "dark" : "emerald");
};

useEffect(() => {
  document.querySelector("html").setAttribute("data-theme", getTheme);
}, [getTheme]);

  return (
    <>
      <section className="bg-gradient-to-t h-72 from-[#19e191] to-[#9cc9c1] drop-shadow-lg">
        <div className="fixed justify-end flex w-full p-8">
          <label  className="swap swap-rotate text-white">
            <input onClick={toggleTheme} type="checkbox" />

            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        <div className="p-5 h-full flex justify-center flex-col items-center">
          <img src="https://quran.santrikoding.com/logo.png" alt="logo" className="w-20 h-20 rounded-full border-purple-400 mx-auto" />

          <h1 class="text-4xl font-bold text-center text-black">Al-Qur'an Online</h1>
          <p class="text-center text-black">Membaca Al-Qur'an dengan mudah dan nyaman dimanapun kapanpun</p>
        </div>
      </section>
      {/* <div class="form-control mt-4">
        <div class="input-group flex justify-center items-center">
          <label for="inputtext">
            <input onChange={onChangeHandler} type="text" name="inputtext" placeholder="Search…" class="input input-bordered" />
          </label>
          <button type="submit" class="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div> */}
    </>
  );
};

export default UpperSection;
