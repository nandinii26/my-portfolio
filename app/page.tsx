import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Cards from "@/components/cards";

export default function Home() {
  return (
    <><Navbar />
    <div className="flex flex-col flex-1 items-center justify-center  h-200 
    bg-gradient-to-r from-purple-800 to-black">  
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16  dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold text-center sm:text-left text-blue-500 font-serif text-center sm:text-center animate-pulse">NANDINI SRIVASTAVA</h1>
        <Cards/>
      </main>
    </div>
    <Footer />
    </>
  );
}

