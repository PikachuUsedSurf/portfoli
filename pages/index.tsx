import Landpage from "./components/Landpage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <div className="flex bg-black h-screen w-screen ">
      <div className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Navbar />
        <Landpage />
     </div>
    </div>
    </>
  )
}
