import Image from "next/image";
import faizanImg from "./assites/faizan-image.jpg";

function Navbar() {
  return (
    <>
      <div className=" px-4 p-2 flex items-center justify-between bg-gray-200">
        <div className="flex text-gray-700  font-semibold items-center gap-2 ">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <Image
              className="w-full h-full object-cover"
              src={faizanImg}
              alt=""
              width={200}
              height={200}
            />
          </div>
          Faizan Raza
        </div>
        <div>
          <svg
            className="md:hidden sm:hidden text-3xl text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Navbar;
