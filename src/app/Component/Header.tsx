import Image from "next/image"
import faizanImg from "./assites/faizan-img.jpg";


function Header() {
  return (<>
  <div className="">
    <div className="flex overflow-hidden  m-auto    justify-center">
      <Image className="mb-10 flex w-full rounded-3xl overflow-hidden   justify-center" src={faizanImg} alt="logo" width={200} height={200}/>
    </div>
    <div className="font-sans">
      <h1 className="text-gray-800 text-2xl sm:text-2xl md:text-3xl sm:mb-2 md:mb-2 mb-5 text-left font-bold ">Welcome to my Web Development Portofolio!</h1>
      <p className="text-gray-700 text-lg">I'm Faizan Raza, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.</p>
    </div>
    </div>
    </>
  )
}

export default Header
