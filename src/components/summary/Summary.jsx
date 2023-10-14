import Feature from "./feature";
import { features } from "../../data.js";

export default function Summary() {
    return (
      <div className="flex flex-col h-full bg-white  rounded-[2rem] md:flex-row md:h-[28rem] md:w-[42rem] md:shadow-lg">
          <div className="flex flex-col gap-5 items-center rounded-b-[2rem]  h-[26rem]  p-[2.5rem] bg-customGradient md:w-[21rem] md:rounded-[2rem] md:h-full">
            <p className="font-medium text-[1.25rem] text-gray-300">Your Result</p>
            <div className="flex flex-col justify-center items-center w-[10rem] h-[10rem] rounded-full bg-gradient-to-b from-[#4e21ca] to-[#2421ca\[.33]]">
                <p className="text-white text-[4rem] font-bold -mt-3">
                    <span className="">76</span>
                </p>
                <p className="text-gray-400 font-semibold -mt-2"> of 100</p>
            </div>
            <h1 className="text-white font-bold text-[1.75rem]">Great</h1>
            <p className="text-gray-300 text-center -mt-2 mx-3">You scored higher than 65% of the people who have taken these tests.</p>
          </div>

          <div className="flex flex-col m-6 gap-5 md:gap-8 md:m-auto">
            <p className=" text-xl font-bold text-darkGrayBlue md:text-2xl">Summary</p>
            <div className="flex flex-col gap-4">
                { features.map(element => (
                    <Feature element={element}/>
                ))}
            </div>
            <button className="bg-darkGrayBlue text-white h-[3rem] rounded-full  hover:bg-customGradient ">Continue</button>
          </div>
      </div>
    );
}