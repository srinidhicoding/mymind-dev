import { useNavigate } from "react-router-dom";


const MainPage = () => {
    const navigate=useNavigate()

  return (
    <>
      <main className="flex justify-center items-start bg-[#f1f2f4]">
        <div className="w-[72%] h-[100vh]  flex flex-col justify-center relative bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
          <div>
            <div className="w-[65%] h-[91%] absolute left-[16.5%] -top-[28px] rounded-full bg-white shadow-[0_0_150px_50px_rgba(255,185,115,0.6),0_0_150px_50px_rgba(255,170,170,0.6)]"></div>
            {/* <div className="border border-black w-[55%] h-[80%] rounded-full absolute left-[22%] -top-[28px] "></div> */}
            <div className="w-[80%] z-50 absolute top-52 left-36" style={{lineHeight:"120px"}}>
              <p className="text-[110px] text-center font-Lato">
                Remember everything Organize nothing
              </p> 
                <div className=" absolute left-[270px] h-40 w-[50%] text-center mt-20">
                    <p className="text-lg"><span className="text-xl opacity-75">All your</span> 
                    <span className="px-4 py-1 ml-2 text-center border border-orange-400 text-orange-500 rounded-full">notes</span>
                    <span className="px-4 py-1 ml-2 border border-pink-400 text-pink-500 rounded-full">bookmarks</span>
                     <span className="px-4 py-1 ml-2  border border-blue-400 text-blue-500 rounded-full">inspiration</span>
                    </p> 
                    <p className="text-lg mt-5 text-center"><span className="px-4 py-1 ml-3 border border-red-400 text-red-500 rounded-full mr-1">articles</span> <span className="text-xl opacity-75">and</span>  <span className="px-4 py-1 ml-1 mr-2 border border-yellow-400 text-yellow-500 rounded-full">images</span> <span className="text-xl opacity-75">in one single, private place</span></p>
                </div> 

            </div>
          </div>
          {/* -----Navbar----- */}
          <nav className="w-[91%] h-12  sticky top-0 z-90  -mt-[60%] ml-12 flex items-center justify-between">
 
              <div>
                <p className="text-xl font-segeo font-medium">mymind</p>
              </div>
              <div className="flex justify-center gap-8  w-[50%] list-none text-lg font-Inter opacity-65 ml-12">
                <li className="flex justify-center items-center gap-2">
                  <section className="w-[6px] h-[6px] rounded-full bg-[#ff5924]"></section>
                  What
                </li>
                <li className="flex justify-center items-center gap-2 ">
                  <section className="w-[6px] h-[6px] rounded-full bg-[#ffe926]"></section>
                  Why
                </li>
                <li className="flex justify-center items-center gap-2 ">
                  <section className="w-[6px] h-[6px] rounded-full bg-[#ff7dd3]"></section>
                  How
                </li>
                <li className="flex justify-center items-center gap-2 ">
                  <section className="w-[6px] h-[6px] rounded-full bg-[#5cb13e]"></section>
                  What's New
                </li>
              </div>
              <div className="flex justify-center items-center gap-5">
                <div>
                <button onClick={() => navigate("/login")}>Log in</button>
                </div>
                <button onClick={() => navigate("/signup")} className="w-24 h-10 bg-[#ff5924] text-white rounded-3xl flex justify-center items-center font-Nunito">
                  Sign up
                </button>
              </div>
 
          </nav>
        </div>
      </main>
    </>
  );
};
export default MainPage;
