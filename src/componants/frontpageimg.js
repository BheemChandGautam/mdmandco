// function Frontpage() {
//     return (
//         <>
//             {/* <div className="w-[19px]"> */}
//             <div className="h-140 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-around">
//                 <div className="w-[50%]">
//                     <p className=" pt-15 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//                         Chartered Accountant
//                     </p>
//                     <p className="text-justify mt-5 w-[90%]">
//                     Our CA firm stands as a beacon of excellence, where accounting precision meets unparalleled taxation expertise. We are a collective of dedicated professionals, committed to navigating the complexities of finance with clarity and insight. Our strength lies in our meticulous approach and our unwavering dedication to empowering our clients with sound financial strategies. We strive not just to meet expectations, but to consistently exceed them, ensuring peace of mind and fostering long-term success.
//                     </p>
//                 </div>
//                 <div>

//                     <img className="rounded-full w-100 h-100 mb-4 p-15" src="https://www.printasia.in/media/wysiwyg/ca_Chartered_Accountants_new_logo.png" alt="image description" />

//                 </div>

//             </div>
//             {/* <img className="w-full object-fill h-[80vh] " src="https://png.pngtree.com/thumb_back/fh260/background/20240412/pngtree-internal-control-on-virtual-screen-accounting-and-audit-image_15656836.jpg" alt="image description" /> */}
//             {/* </div> */}

//         </>
//     )
// }

// export default Frontpage;


function Frontpage() {
    return (
        <>
            <div className="min-h-screen md:min-h-[72vh] bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col-reverse md:flex-row justify-around items-center p-6">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:ml-30">
                    <p className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Chartered Accountant
                    </p>
                    <p className="text-justify mt-5 w-full md:w-4/5 text-lg text-gray-800">
                        Our CA firm stands as a beacon of excellence, where accounting precision meets unparalleled taxation expertise. We are a collective of dedicated professionals, committed to navigating the complexities of finance with clarity and insight. Our strength lies in our meticulous approach and our unwavering dedication to empowering our clients with sound financial strategies. We strive not just to meet expectations, but to consistently exceed them, ensuring peace of mind and fostering long-term success.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img className="rounded-full w-50 h-50 md:w-80 md:h-80 mb-4" src="https://www.printasia.in/media/wysiwyg/ca_Chartered_Accountants_new_logo.png" alt="Chartered Accountant Logo" />
                </div>
            </div>
        </>
    );
}

export default Frontpage;
