// function prof() {
//     const data = [
//         { Name: "Mr Irfan Khan", post: "Professional Accountant", photo: "https://cdn-icons-png.freepik.com/512/6997/6997481.png" },
//         { Name: "Mr Mehtab", post: "Professional Accountant", photo: "https://cdn-icons-png.freepik.com/512/6997/6997481.png" },
//         { Name: "Mr Jitender Singh", post: "Professional Accountant", photo: "https://cdn-icons-png.freepik.com/512/6997/6997481.png" },

//     ]

//     return (

//         <>
//         <p className="text-6xl p-10 text-center font-bold bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-around">Professionals</p>
//             <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-around flex justify-around p-14">
//                 {
//                     data.map((user) => (
//                         <>
//                             <div className="text-center">


//                                 <img className="rounded-full w-50 h-50" src={user.photo} alt="img description" />
//                                 <p className="font-bold text-[18px]  ">
//                                     {user.post}
//                                 </p>
//                                 <p>
//                                    {user.Name}
//                                 </p>

//                                 <div className="flex items-center justify-center">
//                                     <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </>
//                     ))

//                 }


//             </div>

//         </>
//     )
// }

// export default prof



function Prof() {
    const data = [
        { Name: "Mr Irfan Khan", post: "Professional Accountant", photo: "https://cdn-icons-png.freepik.com/512/6997/6997481.png" },
        { Name: "Mr Mehtab", post: "Professional Accountant", photo: "https://cdn-icons-png.freepik.com/512/6997/6997481.png" },
        { Name: "Mr Jitender Singh", post: "Professional Accountant", photo: "https://cdn-icons-png.freepik.com/512/6997/6997481.png" },
    ];

    return (
        <>
            <p className="text-4xl md:text-6xl p-5 md:p-10 text-center font-bold bg-gradient-to-r from-cyan-500 to-blue-500">Professionals</p>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col md:flex-row justify-around p-5 md:p-14">
                {
                    data.map((user, index) => (
                        <div key={index} className="text-center mb-5 md:mb-0">
                            <img className="rounded-full w-24 h-24 md:w-32 md:h-32 mx-auto" src={user.photo} alt={user.Name} />
                            <p className="font-bold text-lg m-1">{user.post}</p>
                            <p>{user.Name}</p>
                            <div className="flex items-center justify-center mt-2">
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg><svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                {/* Repeat SVGs as needed */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Prof;
