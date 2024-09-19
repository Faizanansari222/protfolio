import Image from "next/image";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Working from "./Component/Working";
import MySkills from "./Component/MySkills";


export default function Home() {
  return (
    <>
      <div className="mb-20">
<Navbar/>
<Header/>
<Working/>
<MySkills/>


        
      </div>
    </>
  );
}
