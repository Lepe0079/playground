import React from "react";

const row = "flex flex-wrap -mx-3 mb-6"
const labelClass = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
const labelSide = "w-1/8 px-3 mb-6 md:mb-0"
const fieldSide = "w-full md:w-1/2 px-3 mb-6 md:mb-0"
const fieldContainerHorizontal = "flex flex-row -mx-3 mb-6"
const fieldClass = "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"

export const Card = () => {
  return (
    <form className="w-full">
      <div id="nameentry" className={row}>     
        <div className={labelSide}>
          <label className={labelClass}>
              First Name
          </label>
        </div>
        <div className={fieldSide}>
          <div className={fieldContainerHorizontal}>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input className={fieldClass} id="first-name" type="text" placeholder="First Name"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input className={fieldClass} id="last-name" type="text" placeholder="Last Name"/>
            </div>
          </div>
        </div>
      </div>

      <div id="emailentry" className={row}>
        <div className={labelSide}>
          <label className={labelClass}>Email</label>
        </div>
        <div className={fieldSide}>
          <div className={fieldContainerHorizontal}>
            <div className="w-full px-3 mb-6 md:mb-0">
              <input className={fieldClass} id="email" type="text" placeholder="Email"/>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
