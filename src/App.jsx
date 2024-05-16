import "./App.css";
import { Summary } from "./components";
import { summaryresultsData } from "./data";

function App() {
  const summaryElements = summaryresultsData?.map((data, index) => (
    <Summary
      key={index}
      icon={data.icon}
      score={data.score}
      category={data.category}
    />
  ));

  return (
    <>
      <main className="  min-h-dvh w-full bg-pale-blue text-pretty grid place-items-start Tablet:place-items-center  ">
        
        <div className="   grid-cols-1 grid w-full Tablet:w-[45rem]  Tablet:grid-cols-2  bg-white h-full Tablet:h-fit  Tablet:rounded-[2rem] summary-container relative summary-container  ">

          <section
            className=" bg-gradient-to-b from-light-slate-blue-bg to-light-royal-blue-bg text-white 
          Tablet:p-[2.375rem_3.375rem_2.875rem] rounded-b-[2rem]   Tablet:rounded-[2rem] flex flex-col items-center justify-center w-full h-fit Tablet:h-full p-[1.2rem_0rem_2.2rem_0rem]    text-center result-container "
          >
           <div className=" flex flex-col gap-10">
           <h1 className=" text-light-lavender font-bold text-[1.3rem] Tablet:text-[1.4rem]">
              Your Result
            </h1>
            <div className="rounded-full bg-gradient-to-b from-violet-blue-circle to-persian-blue-circle flex flex-col justify-center gap-2 Tablet:w-48 Tablet:h-48 w-40 h-40 m-auto score-container  ">
              <h2 className=" text-6xl Tablet:text-7xl font-bold self-center">
                76
              </h2>
              <p className=" text-light-lavender font-bold  ">of 100</p>
            </div>

            <div>
              <h2 className=" font-bold text-2xl Tablet:text-[2rem] mb-3">
                Great
              </h2>
              <p className=" max-w-[33ch] text-light-lavender text-[15px]  Tablet:text-[1.1rem] m-auto ">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
           </div>
          </section>
          <section className="p-10 flex flex-col gap-8 summary-container  ">
            <h1 className=" text-dark-gray-blue font-bold text-2xl">Summary</h1>
            <div className=" flex flex-col gap-5  ">{summaryElements}</div>
            <button className=" w-full bg-dark-gray-blue text-white p-3 rounded-full font-semibold hover:bg-gradient-to-b hover:from-light-slate-blue-bg  hover:to-light-royal-blue-bg transition-colors ">
              Continue
            </button>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
