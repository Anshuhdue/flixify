import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <main className="pt-[72px] sm:pt-28 lg:pt-0 flex justify-center items-start w-full">
      {" "}
      <div className="w-[140px] h-[100vh] hidden lg:block"></div>
      <div className="lg:w-[100%] w-[100%] flex flex-col justify-center items-center lg:mt-14">
        <SearchBar />
        <Trending />
      </div>
    </main>
  );
}
