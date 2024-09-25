function MyResume() {
  return (
    <>
      <div className="w-[80%] pt-8 mt-10 border-t m-auto"></div>
      <div className=" font-bold text-3xl text-gray-800">
        <h1>My Github</h1>
      </div>
      <div >
        <p className="  font-normal text-base mt-3 text-gray-400 w-[70%]" >
          Highly skilled and creative Web Developer with 5+ years of experience
          in crafting visually stunning and functionally robust websites and web
          applications.
        </p>
      </div>

      <div>
        <button className="hover:gb-gray flex items-center gap-2 text-gray-800 font-bold text-xs my-4">VIEW MORE <svg className="font-bold" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"/></svg></button>
      </div>
    </>
  );
}

export default MyResume;
