import React, { useEffect } from "react";

const UpperSection = () => {
  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

const [getTheme, setTheme] = React.useState("emerald");



  return (
    <>
      <section className="bg-gradient-to-t h-72 from-[#19e191] to-[#9cc9c1] drop-shadow-lg">
       
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
