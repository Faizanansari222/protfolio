import Image from "next/image";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Working from "./Component/Working";
import MySkills from "./Component/MySkills";
import MyProject from "./Component/MyProject";
import MyResume from "./Component/MyResume";

export default function Home() {
  return (
    <>
        <Navbar />
      <div className="mb-20 p-6">
        <Header />
        <Working />
        <MySkills />
        <MyProject />
        <MyResume/>
      </div>
    </>
  );
}
