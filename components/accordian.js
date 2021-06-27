// import React, { useState } from 'react'
// import { Transition } from '@headlessui/react'

// const Accordian = () => {
//   const [question, setquestion] = useState(true)
//   return (
//     <div className="pt-16">
//       <div className="container mx-auto pt-16 bg-gray-100">
//         <div className="w-10/12 mx-auto">
//           <ul>
//             <li className="py-6 border-gray-200 border-solid border-b transition duration-150 ease-in-out">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
//                   What does lorem ipsum actually mean?
//                 </h3>
//                 <div
//                   className="cursor-pointer transition duration-150 ease-in-out"
//                   onClick={() => (question === true ? setquestion(null) : setquestion(true))}
//                 >
//                   {question === true ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width={36}
//                       height={36}
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="#A0AEC0"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       aria-label="Close"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" />
//                       <circle cx={12} cy={12} r={9} />
//                       <line x1={9} y1={12} x2={15} y2={12} />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width={36}
//                       height={36}
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="#A0AEC0"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       aria-label="Open"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" />
//                       <circle cx={12} cy={12} r={9} />
//                       <line x1={9} y1={12} x2={15} y2={12} />
//                       <line x1={12} y1={9} x2={12} y2={15} />
//                     </svg>
//                   )}
//                 </div>
//               </div>
//               {question === true && (
//                 <Transition
//                   show={question}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//                 >
//                   <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
//                     Find the latest events updates or create events, concerts, conferences,
//                     workshops, exhibitions, and cultural events in all cities of the US. The aim of
//                     Eventistan is to promote healthy and entertaining event. Greatest appreciation
//                     to you and your team for the outstanding job you did for us. The website is just
//                     what we wanted, and we were thrilled with the speed your team exercised.{' '}
//                   </p>
//                 </Transition>
//               )}
//             </li>

//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Accordian
