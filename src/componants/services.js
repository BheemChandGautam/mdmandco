// function services() {
//     const data = [{ heading: "MSME", text: "Micro, Small, and Medium Enterprises are defined in India based on their investment in plant and machinery/equipment and their annual turnover. The current revised definitions, as of the Budget 2025.", img: "https://www.shutterstock.com/image-photo/msmse-ministry-micro-small-medium-260nw-2439189831.jpg" },
//     {heading: "GST Registration", text:"Absolutely! Getting your business registered for Goods and Services Tax (GST) is a significant step, especially if you're an MSME looking to grow and benefit from the GST ecosystem. Here's a comprehensive overview of GST registration", img: "https://www.accoxi.com/media/1993/gst-registration.jpg" },
//     {heading: "FSSAI Registration", text:"FSSAI (Food Safety and Standards Authority of India) registration. This is a mandatory requirement for all Food Business Operators (FBOs) in India to ensure the safety and quality of food products. Let's break down the key aspects", img: "https://www.chhotacfo.com/blog/wp-content/uploads/2024/07/fssai-state-license-scaled-1.jpg" },
//     {heading: "Income Tax Return", text:"Filing your Income Tax Return (ITR) is an essential annual task for individuals and entities earning income in India. It allows you to report your income, claim deductions and exemptions, and determine your tax liability or potential refund. Here's a comprehensive overview of Income Tax Returns", img: "https://images.cnbctv18.com/uploads/2024/07/itr-return-2024-07-0ce59c18cb4673782a56f5deac2a64d0.jpg" },
//     {heading: "GST Return", text:"We are a premier Chartered Accountancy firm committed to delivering top-notch financial and tax services. As GST experts, we specialize in providing comprehensive, accurate, and timely GST registration, compliance, and consultancy solutions tailored to your business needs.", img: "https://margbooks.com/blogs/wp-content/uploads/2024/06/Difference-Between-Monthly-and-Quarterly-GST-Return-min.webp" },
//     {heading: "TAx Audit", text:"we pride ourselves on being one of the leading Chartered Accountancy firms, renowned for our expertise in tax audits and compliance. Our dedicated team of professionals brings a wealth of experience and in-depth knowledge to ensure that your business meets all regulatory requirements while maximizing tax efficiency.", img: "https://s31898.pcdn.co/wp-content/uploads/2019/04/audit-1-e92ef1503cd33c4b9473ede1eae4c5268af43508de6f68de4879dbec028d5cf0-e1554790941143-800x430.jpg" },
//     ]


//     return (
//         <>
//             <p className="text-6xl m-10 text-center font-bold">Services</p>
//             <div className="m-30 flex flex-wrap justify-center gap-15">
//                 {
//                     data.map((user) => (
//                         <div className="max-w-sm bg-white drop-shadow-xl/50 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//                             <a href="#">
//                                 <img className="rounded-t-lg" src={user.img} alt="" />
//                             </a>
//                             <div className="p-5">
//                                 <a href="#">
//                                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.heading}</h5>
//                                 </a>
//                                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.text}</p>
//                                 <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                     Read more
//                                     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                                     </svg>
//                                 </a>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>



//             {/* <div className="m-30 flex gap-10">
//                 <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//                     <a href="#">
//                         <img className="rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1679922389798-8b38c78b5670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNjb3VudHN8ZW58MHx8MHx8fDA%3D" alt="" />
//                     </a>
//                     <div className="p-5">
//                         <a href="#">
//                             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GST Registration</h5>
//                         </a>
//                         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                             Read more
//                             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                             </svg>
//                         </a>
//                     </div>
//                 </div>

//             </div> */}
//         </>
//     )
// }

// export default services

// import React from 'react';

// const services = [
//   {
//     title: 'GST Registration',
//     description: 'Get your business registered under GST with expert guidance and hassle-free process.',
//     icon: (
//       <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h4m4 8V7a2 2 0 00-2-2H7l-4 4v8a2 2 0 002 2h11a2 2 0 002-2z" />
//       </svg>
//     ),
//   },
//   {
//     title: 'TDS Filing',
//     description: 'Accurate and timely deduction and filing of Tax Deducted at Source for your business obligations.',
//     icon: (
//       <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m2 6H7a2 2 0 01-2-2V7a2 2 0 012-2h3.5l3.5 3.5H17a2 2 0 012 2v6a2 2 0 01-2 2z" />
//       </svg>
//     ),
//   },
//   {
//     title: 'ITR Filing',
//     description: 'Expert assistance in Income Tax Return filing ensuring maximized refunds and compliance.',
//     icon: (
//       <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v2h6v-2c0-1.657-1.343-3-3-3z" />
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m7-7h-2m-10 0H5" />
//       </svg>
//     ),
//   },
//   {
//     title: 'Business Consulting',
//     description: 'Professional advice to sustain and grow your business efficiently and compliantly.',
//     icon: (
//       <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M11 11V7a4 4 0 018 0v4m-7 4h6a2 2 0 110 4h-6a2 2 0 110-4z" />
//       </svg>
//     ),
//   },
// ];

// const ServiceCards = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
//       {services.map(({ title, description, icon }) => (
//         <div
//           key={title}
//           className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start space-y-4 hover:shadow-xl transition-shadow cursor-pointer"
//         >
//           <div>{icon}</div>
//           <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//           <p className="text-gray-600 text-sm">{description}</p>
//           <button className="mt-auto text-blue-600 font-semibold hover:underline">
//             Learn More &rarr;
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServiceCards;

// import React from 'react';

const services = [
  {
    title: 'GST Registration',
    description: 'Seamless GST registration for your business with expert support.',
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M9 17v-6a2 2 0 012-2h4" />
        <path d="M13 7V4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-7h-5" />
      </svg>
    ),
  },
  {
    title: 'TDS Filing',
    description: 'Timely and accurate Tax Deducted at Source filing services.',
    icon: (
      <svg
        className="w-10 h-10 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M9 12h6" />
        <path d="M12 16v-8" />
        <path d="M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2h-4" />
        <path d="M12 3L7 7h10l-5-4z" />
      </svg>
    ),
  },
  {
    title: 'ITR Filing',
    description: 'Accurate income tax return filing to maximize your refunds.',
    icon: (
      <svg
        className="w-10 h-10 text-yellow-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M4 17v-6a4 4 0 018 0v6" />
        <path d="M8 21h8a2 2 0 002-2v-5H6v5a2 2 0 002 2z" />
        <path d="M9 10H7v4h2v-4z" />
      </svg>
    ),
  },
  {
    title: 'MSME Registration',
    description: 'Simplify MSME registration and avail government benefits.',
    icon: (
      <svg
        className="w-10 h-10 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'FSSAI Registration',
    description: 'Get FSSAI license for your food business without hassle.',
    icon: (
      <svg
        className="w-10 h-10 text-orange-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    ),
  },
  {
    title: 'Income Tax Return',
    description: 'Expert filing of income tax returns with focus on accuracy.',
    icon: (
      <svg
        className="w-10 h-10 text-red-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10z" />
      </svg>
    ),
  },
  {
    title: 'Tax Audit',
    description: 'Comprehensive and compliant tax audit services customized for you.',
    icon: (
      <svg
        className="w-10 h-10 text-teal-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M8 17l4-4 4 4" />
        <path d="M12 12v9" />
        <path d="M20 21H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 2h7a2 2 0 012 2v12a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Company Incorporation',
    description: 'Full support for company registration and legal compliance.',
    icon: (
      <svg
        className="w-10 h-10 text-indigo-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 7h18M3 12h18M4 17h16" />
        <path d="M9 17V7" />
        <path d="M15 17V7" />
      </svg>
    ),
  },
];

const ServiceCards = () => {
  return (
    <div className="">

      <div>

        <p className="text-4xl md:text-6xl font-bold text-center pt-6">Services</p>,
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="mb-5">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 text-sm flex-grow">{description}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ServiceCards;

