import Image from "next/image";
import myProject from "./assites/nextjs-icon.png";
function MyProject() {
  return (
    <>
      <div className=" ">
        <div className="w-[80%]  mt-10  border-t m-auto"></div>
        <div className="my-7 text-center font-medium text-lg text-gray-600">
          <h1>MY PROJECT</h1>
        </div>
        <div className="my-8 rounded-lg h-48 w-96 m-auto overflow-hidden bg-gray-100 shadow-md flex justify-center items-center">
          <Image
            className=" w-[150px]"
            src={myProject}
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className=" font-semibold text-xl mt-3 text-gray-600">
          <h1>OLX.PK Clone Project</h1>
        </div>
        <div className="  font-normal text-base mt-3 text-gray-400">
          <p>
            Mobile app designed to help users discover and explore local
            restaurants and cuisines.
          </p>
        </div>
        <a href="https://oolx-clone.netlify.app/" target="_blank">
          <button className="bg-[#141414] text-white p-2 rounded-lg text-base  px-3 mt-5">
            {" "}
            SEE DETAIL
          </button>{" "}
        </a>
      </div>
    </>
  );
}

export default MyProject;