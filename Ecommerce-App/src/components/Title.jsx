// import React from 'react'

// const Title = ({ text1, text2 }) => {
//     return (
//         <div className='inline-flex items-center gap-2 mb-3'>
//             <p className="text-gray-500 ">{text1} <span className="text-gray-700 font-medium">{text2}</span></p>
//             <p className='w-8 sm:w-12 sm:h-[2px] bg-gray-700'></p>
//         </div>
//     )
// }

// export default Title




import React from "react";
import { FiStar } from "react-icons/fi"; // using a lightweight icon

const Title = ({ text1, text2, showIcon = true }) => {
    return (
        <div className="inline-flex items-center gap-2 mb-3">
            {/* Optional decorative icon */}
            {showIcon && (
                <span className="text-gray-400 text-sm sm:text-base">
                    <FiStar />
                </span>
            )}

            {/* Text part */}
            <p className="text-gray-500">
                {text1}{" "}
                <span className="text-gray-700 font-medium">{text2}</span>
            </p>

            {/* Decorative line */}
            <p className="w-8 sm:w-12 sm:h-[2px] bg-gray-700 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.2)]"></p>
        </div>
    );
};

export default Title;
