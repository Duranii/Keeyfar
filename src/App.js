import './App.css';

function App() {
  return (
    <div className="max-w-[1520px] mx-auto border-l-[18px] border-r-[18px] border-b-8 border-gray-500 bg-white">
        <div className="border-b-8 border-red-900">
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between">
                <div className="flex-auto">
                    <img className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%] h-24" src="./Assets/logo.png" alt="card-cards"/>
                </div>    
                <div className="flex flex-col justify-center sm:pr-6 md:pr-10 lg:pr-10 xl:pr-14 pl-4 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0">
                    <p className="md:pb-0 lg:pb-1 xl:pb-1 text-red-800 font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl border-black border-b-4 border- sm:tracking-wide md:tracking-widest lg:tracking-wider tracking-wider cursor-pointer hidden sm:block md:block lg:block xl:block">Call our office now!</p>
                    
                    <div className="font-extrabold text-[24px] sm:text-[30px] md:text-[35px] lg:text-[42px] xl:text-[42px] sm:h-7 md:h-10 lg:h-10 xl:h-10 leading-none md:tracking-widest lg:tracking-wider xl:tracking-wider hidden sm:block md:block lg:block xl:block">540.433.6906</div>
                    <div className="md:pb-1 lg:pb-0 xl:pb-0 font-normal sm:font-semibold md:font-semibold lg:font-semibold xl:font-semibold text-xs sm:text-xs lg:text-lg xl:text-lg text-gray-500 pt-0 tracking-tighter sm:tracking-wider md:tracking-wider lg:tracking-wider xl:tracking-wider hidden sm:block md:block lg:block xl:block">Get Your Question Answered Fast</div>                    
                </div>
            </div>
            <div className="w-[100%] h-8 bg-red-800 flex justify-end block sm:hidden md:hidden lg:hidden xl:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 96 960 960" width="48" fill="#c0c0c0"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></div>

            <div>
                <ul className="flex justify-end gap-2 sm:h-10 md:h-14 lg:h-14 xl:h-14 items-center sm:pr-5 md:pr-8 lg:pr-8 xl:pr-8 bg-red-800">
                    <li className="text-white font-bold sm:text-xs md:text-base lg-text-lg xl-text-lg sm:pr-1 md:pr-2 lg:pr-4 xl:pr-6 sm:pl-1 md:pl-2 lg:pl-4 xl:pl-6 sm:h-12 md:h-14 lg:h-14 xl:h-14 pt-4 hover:bg-slate-500 cursor-pointer hidden sm:block md:block lg:block xl:block">BIOGRAPHY</li>
                    <li className="text-white font-bold sm:text-xs md:text-base lg-text-lg xl-text-lg sm:pr-1 md:pr-2 lg:pr-4 xl:pr-6 sm:pl-1 md:pl-2 lg:pl-4 xl:pl-6 sm:h-12 md:h-14 lg:h-14 xl:h-14 pt-4 hover:bg-slate-500 cursor-pointer hidden sm:block md:block lg:block xl:block">HOME</li>
                    <li className="text-white font-bold sm:text-xs md:text-base lg-text-lg xl-text-lg sm:pr-1 md:pr-2 lg:pr-4 xl:pr-6 sm:pl-1 md:pl-2 lg:pl-4 xl:pl-6 sm:h-12 md:h-14 lg:h-14 xl:h-14 pt-4 hover:bg-slate-500 cursor-pointer hidden sm:block md:block lg:block xl:block">BLOG</li>
                    <li className="text-white font-bold sm:text-xs md:text-base lg-text-lg xl-text-lg sm:pr-1 md:pr-2 lg:pr-4 xl:pr-6 sm:pl-1 md:pl-2 lg:pl-4 xl:pl-6 sm:h-12 md:h-14 lg:h-14 xl:h-14 pt-4 hover:bg-slate-500 cursor-pointer hidden sm:block md:block lg:block xl:block">AREAS WE SERVE</li>
                    <li className="text-white font-bold sm:text-xs md:text-base lg-text-lg xl-text-lg sm:pr-1 md:pr-2 lg:pr-4 xl:pr-6 sm:pl-1 md:pl-2 lg:pl-4 xl:pl-6 sm:h-12 md:h-14 lg:h-14 xl:h-14 pt-4 hover:bg-slate-500 cursor-pointer hidden sm:block md:block lg:block xl:block">LIBRARY</li>
                    <li className="text-white font-bold sm:text-xs md:text-base lg-text-lg xl-text-lg sm:pr-1 md:pr-2 lg:pr-4 xl:pr-6 sm:pl-1 md:pl-2 lg:pl-4 xl:pl-6 sm:h-12 md:h-14 lg:h-14 xl:h-14 pt-4 hover:bg-slate-500 cursor-pointer hidden sm:block md:block lg:block xl:block">CONTACT</li>
                </ul>
            </div>

            <div className="lg:mx-10 xl:mx-14 pt-0 sm:pt-14 md:pt-14 lg:pt-14 xl:pt-14 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-6">
                <img className="lg:w-[110%] xl:w-[110%] shadow-2xl" src="./Assets/gurantee_banner.gif" alt="card-cards" />
                <div className="background-Image lg:w-[100%] xl:w-[100%] shadow-2xl bg-image bg-cover">
                    <div className=" flex gap-3 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                        <p cclassNamelass="font-semibold text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-white bg-red-700 pl-3 w-36 sm:w-52 md:w-52 lg:w-52 xl:w-52 h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 pt-1 pb-1">QUESTIONS?</p>
                        <p clclassNameass="text-black pt-2 font-bold text-2xl tracking-wide pl-4 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0">Have a <span className="font-bold text-4xl text-indigo-900">Question</span> <br /> About Your Case?</p>
                    </div>

                    <div className="mx-4 sm:mx-7 md:mx-7 lg:mx-7 xl:mx-7 pt-3 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0">
                        <p claclassNamess="font-semibold text-xl leading-tight sm:leading-none md:leading-none lg:leading-none xl:leading-none">Enter your information and get your question answered Quickly and discreetly or call us at: <span className="font-bold text-2xl">540.433.6906</span></p>
                        <div className="md:flex xl:flex md:justify-between lg:justify-between xl:gap-8 pt-3 ">

                            <div>
                                <form className="flex flex-col gap-y-6 "></form>
                                <div>
                                    <label className="ml-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 font-bold">Name:</label>
                                    <input className="ml-3 mt-2 h-7 w-36 sm:w-96 md:w-80 lg:w-[60%] xl:w-52" />
                                </div>
                                <div>
                                    <label className="ml-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 font-bold">Email:</label>
                                    <input  className="ml-4 mt-2 h-7 w-36 sm:w-96 md:w-80 lg:w-[60%] xl:w-52" />
                                </div>
                                <div>                                
                                    <label  className="ml-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 font-bold">Phone:</label>
                                    <input  className="ml-[9px] mt-2 h-7 w-36 sm:w-96 md:w-80 lg:w-[60%] xl:w-52" />
                                </div>
                            </div>
                            <img className="sm:w-52 md:w-52 lg:w-36 xl:w-36 h-9 md:rotate-12 xl:rotate-12 scale-y-150 mt-10 xl:scale-x-125" src="./Assets/confidential.png" alt="card-cards" />
                        </div>

                        <div>            
                            <textarea name="" className="textarea w-full font-semibold mt-6 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg sm:w-[100%] h-20 sm:h-24 md:h-24 lg:h-16 xl:h-16">  Tell us about you here...</textarea>
                        </div>

                        <div className="flex lg:justify-center xl:justify-between items-center">
                            <p className="font-normal lg:text-base italic text-gray-600 hidden xl:block">100% Privacy Guaranteed</p>
                            <button className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-80 xl:w-72 h-12 mt-3 mb-4 flex gap-4 sm:gap-8 md:gap-8 lg:gap-4 xl:gap-4 justify-center items-center bg-red-700 hover:bg-red-900 cursor-pointer shadow-2xl">
                                <p className="font-semibold text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl text-white">Ask Us About Your Case</p>
                                <img src="./Assets/bullet_white.gif" alt="card-cards"/>
                            </button>
                        </div>
                    </div>   
                </div>
            </div>

            <div className="sm:mx-6 md:mx-10 lg:mx-32 xl:mx-20 pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-10 gap-10 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0">
                <div className="flex flex-col justify-center items-center sm:flex-none md:flex-none lg:flex-none xl:flex-none text-center sm:text-left md:text-left lg:text-left xl:text-left border-r-2 border-gray-200 xl:col-span-3 order-1">
                    <p className="font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-gray-800">CHARGED WITH <span className="text-red-800">DUI?</span></p>
                    <p className="font-bold sm:text-base md:text-lg lg:text-lg xl:text-lg text-red-800">FREE CASE EVALUATION</p>
                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row sm:gap-0 md:gap-8 lg:gap-8 xl:gap-8 sm:pr-2 md:pr-0 lg:pr-0 xl:pr-0">
                        <div className="mx-2 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0">
                            <p className="text-gray-600 font-medium sm:text-[15px] md:text-base lg:text-base xl:text-base mb-5 mt-4 leading-tight tracking-wide">Being charged with a DUI <br className="hidden sm:hidden md:block lg:block xl:block" />can be scary. Get the help <br className="hidden sm:hidden md:block lg:block xl:block" />you deserve.</p>
                            <p className="text-gray-600 font-medium sm:text-[15px] md:text-base lg:text-base xl:text-base mb-5 mt-4 leading-tight tracking-wide">Click here to let us know <br className="hidden sm:hidden md:block lg:block xl:block" /> how we can help you with <br className="hidden sm:hidden md:block lg:block xl:block" />your case.</p>
                        </div>
                        <div className="m-auto"><img className=" sm:h-28 md:h-28 lg:h-28 xl:h-28" src="./Assets/paste_board.gif" alt="card-cards" /></div>
                    </div>
                    
                    <div>
                        <img className="sm:pl-20 md:pl-20 lg:pl-20 xl:pl-20 w-56 sm:w-[325px] md:w-[325px] lg:w-[325px] xl:w-[325px] h-[2px] mt-4" src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" />
                        <button className="w-32 sm:w-28 md:w-32 lg:w-36 xl:w-36 h-9 mb-4 ml-16 sm:ml-36 md:ml-36 lg:ml-36 xl:ml-36 flex gap-4 justify-center items-center bg-red-700 hover:bg-red-900 cursor-pointer shadow-2xl">
                            <p className="font-semibold sm:text-sm text-base text-white">CLICK HERE</p>
                            <img src="./Assets/bullet_white.gif" alt="card-cards" />
                        </button>   
                    </div>    
                </div>

                <div className="flex flex-col justify-center items-center sm:flex-none md:flex-none lg:flex-none xl:flex-none text-center sm:text-left md:text-left lg:text-left xl:text-left sm:pt-10 md:pt-10 lg:pt-16 xl:pt-0 lg:pb-6 xl:pb-0 xl:border-r-2 border-gray-200 xl:col-span-4 order-2 sm:order-3 md:order-3 lg:order-3 xl:order-2">
                    <div className="mx-2 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5">
                        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row sm:gap-10 md:gap-10 lg:gap-10 xl:gap-0">
                            <div>
                                <p className="font-bold sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-2xl text-gray-800">LAW <span className="text-red-800">BLOG</span></p>
                                <p className="text-gray-600 font-medium sm:text-[15px] md:text-base lg:text-base xl:text-base mb-5 mt-2 leading-tight tracking-wide">Learn more about <br className="hidden sm:block md:block lg:block xl:block" /> Virginia Traffic Laws.</p>
                                <img className="w-60 h-[2px]" src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" />
                                <button className="w-32 sm:w-28 md:w-32 lg:w-36 xl:w-36 h-9 mb-4 ml-14 flex gap-4 justify-center items-center bg-red-700 hover:bg-red-900 cursor-pointer shadow-2xl">
                                    <p className="font-semibold sm:text-sm text-base text-white">CLICK HERE</p>
                                    <img src="./Assets/bullet_white.gif" alt="card-cards" />
                                </button>   
                            </div>
                            <img className="sm:h-20 md:h-28 lg:h-28 xl:h-28 mt-4" src="./Assets/pic1.gif" alt="card-cards" />
                        </div>
                    </div>

                    <div className="mt-2 border-t-2 border-gray-200">
                        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-center items-center text-center sm:text-left md:text-left lg:text-left xl:text-left mx-5 sm:gap-10 md:gap-10 lg:gap-10 xl:gap-0">
                            <div className="pt-4">
                                <p className="font-bold sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-2xl text-gray-800">CASE <span className="text-red-800">RESULTS</span></p>
                                <p className="text-gray-600 font-medium sm:text-[15px] md:text-base lg:text-base xl:text-base mb-5 mt-2 leading-tight tracking-wide">See how we help our clients. <br className="sm:hidden md:block lg:block xl:block" /> Read our latest case results.</p>
                                <img className="w-60 h-[2px]" src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" />
                                <button className="w-32 sm:w-28 md:w-32 lg:w-36 xl:w-36 h-9 mb-4 ml-14 flex gap-4 justify-center items-center bg-red-700 hover:bg-red-900 cursor-pointer shadow-2xl">
                                    <p className="font-semibold sm:text-sm text-base text-white">CLICK HERE</p>
                                    <img src="./Assets/bullet_white.gif" alt="card-cards" />
                                </button>   
                            </div>
                            <img className="h-28 mt-4" src="./Assets/order_icon.gif" alt="card-cards" />
                        </div>
                    </div>
                </div>

                <div className="lg:pt-6 xl:pt-6 xl:col-span-3 order-3 sm:order-2 md:order-2 lg:order-2 xl:order-3">
                    <div className="mx-5 flex gap-5 justify-center ">
                        <img src="./Assets/qqq.gif" alt="card-cards" />
                        <img src="./Assets/national_college_small.gif" alt="card-cards" />
                    </div>

                    <div className="m-auto flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-center items-center text-center sm:text-left md:text-left lg:text-left xl:text-left mx-5 lg:justify-center">
                        <div className="pt-4">
                            <p className="font-bold sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-2xl text-gray-800">CERTIFICATES & <br /> <span className="text-red-800">CREDENTIALS</span></p>
                            <p className="text-gray-600 font-medium sm:text-[15px] md:text-base lg:text-base xl:text-base mb-5 mt-2 leading-tight tracking-wide">Keefer Law Firm has protected the <br className="hidden sm:hidden md:block lg:block xl:block" /> rights of Virginians for over 30 years.</p>
                            <img className="w-60 sm:w-[305px] md:w-[305px] lg:w-[305px] xl:w-[305px] h-[2px] pl-5" src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" />
                            <button className="w-32 sm:w-28 md:w-32 lg:w-36 xl:w-36 h-9 mb-4 mx-auto sm:ml-28 md:ml-28 lg:ml-28 xl:ml-28 flex gap-4 justify-center items-center bg-red-700 hover:bg-red-900 cursor-pointer shadow-2xl">
                                <p className="font-semibold sm:text-sm text-base text-white">CLICK HERE</p>
                                <img src="./Assets/bullet_white.gif" alt="card-cards" />
                            </button>   
                        </div>
                    </div>    
                </div>
            </div>
            <img className="pt-8 w-[100%]" src="./Assets/hr_shadow.png" alt="card-cards" />

            <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-14 pt-8 flex lg:gap-10 flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row">
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row sm:gap-6 md:gap-10 lg:gap-10 xl:gap-10">
                <div>
                    <p className="font-bold text-2xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-gray-800">PRACTICE <span className="text-red-800">AREAS</span></p>
                    <div className="flex-col">
                        <div className="flex pl-1 pt-4">
                            <img src="./Assets/pra_bg_red.gif" alt="card-cards" className="w-3 h-20 sm:h-14 md:h-20 lg:h-20 xl:h-20" />
                            <div className="bg-neutral-500 flex-col w-[100%] sm:w-56 md:w-72 lg:w-72 xl:w-72 sm:h-14 md:h-20 lg:h-20 xl:h-20" ><div className="font-bold text-white text-xl sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl pl-4 sm:pl-2 md:pl-4 lg:pl-4 xl:pl-4 pt-2 sm:pt-1 md:pt-2 lg:pt-2 xl:pt-2" >DUI & DWI</div>
                            <div className="flex items-center justify-end gap-x-2 pr-3 font-bold text-base sm:text-xs md:text-base lg:text-base xl:text-base text-white"><div className="pt-1 sm:pt-0 md:pt-1 lg:pt-1 xl:pt-1">LEARN MORE</div>  <div><img src="./Assets/bullet_red.gif" alt="card-cards" className="w-3 pt-2 sm:pt-0 md:pt-2 lg:pt-2 xl:pt-2" /></div></div>
                            </div>
                        </div>
                        <div> <img src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" className="sm:ml-5 md:ml-8 lg:ml-8 xl:ml-8" /></div>
                    </div>

                    <div className="flex-col">
                        <div className="flex pl-1 pt-4">
                            <img src="./Assets/pra_bg_red.gif" alt="card-cards" className="w-3 h-20 sm:h-14 md:h-20 lg:h-20 xl:h-20" />
                            <div className="bg-neutral-500 flex-col w-[100%] sm:w-56 md:w-72 lg:w-72 xl:w-72 sm:h-14 md:h-20 lg:h-20 xl:h-20" >
                                <div className="font-bold text-white text-xl sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl pl-4 sm:pl-2 md:pl-4 lg:pl-4 xl:pl-4 pt-2 sm:pt-1 md:pt-2 lg:pt-2 xl:pt-2" >RECKLESS DRIVING</div>
                                <div className="flex items-center justify-end gap-x-2 pr-3 font-bold text-base sm:text-xs md:text-base lg:text-base xl:text-base text-white">
                                    <div className="pt-1 sm:pt-0 md:pt-1 lg:pt-1 xl:pt-1">LEARN MORE</div>
                                    <img src="./Assets/bullet_red.gif" alt="card-cards" className="w-3 pt-2 sm:pt-0 md:pt-2 lg:pt-2 xl:pt-2" />
                                </div>
                            </div>
                        </div>
                        <div> <img src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" className="sm:ml-5 md:ml-8 lg:ml-8 xl:ml-8" /></div>
                    </div>

                    <div className="flex-col">
                        <div className="flex pl-1 pt-4">
                            <img src="./Assets/pra_bg_red.gif" alt="card-cards" className="w-3 h-20 sm:h-14 md:h-20 lg:h-20 xl:h-20" />
                            <div className="bg-neutral-500 flex-col w-[100%] sm:w-56 md:w-72 lg:w-72 xl:w-72 sm:h-14 md:h-20 lg:h-20 xl:h-20" ><div className="font-bold text-white text-xl sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl pl-4 sm:pl-2 md:pl-4 lg:pl-4 xl:pl-4 pt-2 sm:pt-1 md:pt-2 lg:pt-2 xl:pt-2" >SPEEDING TICKETS</div>
                            <div className="flex items-center justify-end gap-x-2 pr-3 font-bold text-base sm:text-xs md:text-base lg:text-base xl:text-base text-white"><div className="pt-1 sm:pt-0 md:pt-1 lg:pt-1 xl:pt-1">LEARN MORE</div>  <div><img src="./Assets/bullet_red.gif" alt="card-cards" className="w-3 pt-2 sm:pt-0 md:pt-2 lg:pt-2 xl:pt-2" /></div></div>
                            </div>
                        </div>
                        <div> <img src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" className="sm:ml-5 md:ml-8 lg:ml-8 xl:ml-8" /></div>
                    </div>

                    <div className="flex-col">
                        <div className="flex pl-1 pt-4">
                            <img src="./Assets/pra_bg_red.gif" alt="card-cards" className="w-3 h-20 sm:h-14 md:h-20 lg:h-20 xl:h-20" />
                            <div className="bg-neutral-500 flex-col w-[100%] sm:w-56 md:w-72 lg:w-72 xl:w-72 sm:h-14 md:h-20 lg:h-20 xl:h-20" ><p className="font-bold text-white text-xl sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl pl-4 sm:pl-2 md:pl-4 lg:pl-4 xl:pl-4 pt-2 sm:pt-1 md:pt-2 lg:pt-2 xl:pt-2" >TRAFFIC VIOLATION</p>
                            <div className="flex items-center justify-end gap-x-2 pr-3 font-bold text-base sm:text-xs md:text-base lg:text-base xl:text-base text-white"><div className="pt-1 sm:pt-0 md:pt-1 lg:pt-1 xl:pt-1">LEARN MORE</div>  <div><img src="./Assets/bullet_red.gif" alt="card-cards" className="w-3 pt-2 sm:pt-0 md:pt-2 lg:pt-2 xl:pt-2" /></div></div>
                            </div>
                        </div>
                        <div> <img src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" className="sm:ml-5 md:ml-8 lg:ml-8 xl:ml-8" /></div>
                    </div>

                    <p className="pt-10 font-bold text-3xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-gray-800">LEARN <span className="text-red-800">MORE</span> ABOUT</p>
                    <p className="pt-20 font-bold text-2xl pl-24 text-slate-300 hidden sm:block md:block lg:block xl:block">MENU <br />AREA <br />HERE</p>
                </div>

                <div className="lg:pl-8 xl:pl-0 pt-8">
                    <p className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-gray-800">PAGE TITLE HERE</p>
                    <p className="sm:pt-4 md:pt-3 lg:pt-8 xl:pt-8 font-normal sm:leading-tight text-slate-500">Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. Alamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum.<span class="sm:hidden md:block lg:block xl:block"> Allamco laboris nisi ut aliquip ex ea commodo consequat . Aser velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum.</span></p>
                </div>
                </div>

                <div className="pt-10 sm:pt-20 md:pt-20 lg:pt-20 xl:pt-0 lg:pl20 xl:pl-0 flex flex-col xl:items-end">
                    <div className="flex gap-8 sm:gap-auto md:gap-16 lg:gap-16 xl:gap-0 lg:justify-center flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-col">
                        <div className="flex flex-col items-center text-center ">
                            <p className="font-bold sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-gray-800">CLIENT <br/> <span className="text-red-800">TESTIMONIALS</span></p>
                            <p className="text-gray-600 font-medium sm:text-[15px] md:text-base lg:text-base xl:text-base mb-5 mt-2 leading-tight tracking-wide">Read what others say <br className="hidden sm:block md:block lg:block xl:block" /> about keeyfar law firm.</p>
                            <img className="w-60 h-[2px]" src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" />
                            <button className="w-32 sm:w-28 md:w-32 lg:w-36 xl:w-36 h-9 mb-4 ml-14 flex gap-4 justify-center items-center bg-red-700 hover:bg-red-900 cursor-pointer shadow-2xl">
                                <p className="font-semibold sm:text-sm text-base text-white">CLICK HERE</p>
                                <img src="./Assets/bullet_white.gif" alt="card-cards" />
                            </button>   
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <p className="font-bold sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-gray-800">DOWNLOAD <br/> <span className="text-red-800">FREE</span> REPORTS</p>
                            <p className="text-gray-600 font-medium sm:text-[15px] md:text-base lg:text-base xl:text-base mb-5 mt-2 leading-tight tracking-wide">Discover the truth about <br className="hidden sm:hidden md:hidden lg:block xl:block" /> Virginia law</p>
                            <img className="w-60 h-[2px]" src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" />
                            <button className="w-32 sm:w-28 md:w-32 lg:w-36 xl:w-36 h-9 mb-4 ml-14 flex gap-4 justify-center items-center bg-red-700 hover:bg-red-900 cursor-pointer shadow-2xl">
                                <p className="font-semibold sm:text-sm text-base text-white">CLICK HERE</p>
                                <img src="./Assets/bullet_white.gif" alt="card-cards" />
                            </button>   
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <p className="font-bold sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-gray-800">CONTACT<br /> <span className="text-red-800">OUR</span> OFFICES</p>
                            <p className="text-gray-600 font-medium sm:text-[15px] md:text-base lg:text-base xl:text-base mb-5 mt-2 leading-tight tracking-wide">Get your questions <br className="hidden sm:block md:block lg:block xl:block" />answered right now</p>
                            <img className="w-60 h-[2px]" src="./Assets/lf_bt_hr_shadow.png" alt="card-cards"/>
                            <button className="w-32 sm:w-28 md:w-32 lg:w-36 xl:w-36 h-9 mb-4 ml-14 flex gap-4 justify-center items-center bg-red-700 hover:bg-red-900 cursor-pointer shadow-2xl">
                                <p className="font-semibold sm:text-sm text-base text-white">CLICK HERE</p>
                                <img src="./Assets/bullet_white.gif" alt="card-cards"/>
                            </button>   
                        </div>
                    </div>    

                    <div className="pt-6 sm:pt-12 md:pt-14 lg:pt-14 xl:pt-0 flex gap-5 flex-col items-center">
                        <div className="flex gap-8 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-col">
                            <img src="./Assets/avo_rating_large.gif" alt="card-cards" />
                            <img src="./Assets/national_college_large.gif" alt="card-cards" />
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="pb-2 font-bold text-2xl text-gray-800">FOLLOW <span className="text-red-800">US</span></p>
                            <img src="./Assets/lf_bt_hr_shadow.png" alt="card-cards" />
                            <div className="pt-2 pb-32 flex gap-4">
                                <img src="./Assets/fb_icon.gif" alt="card-cards" />
                                <img src="./Assets/google_icon.gif" alt="card-cards" />
                                <img src="./Assets/twitter_icon.gif" alt="card-cards" />
                                <img src="./Assets/linked_icon.gif" alt="card-cards" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
