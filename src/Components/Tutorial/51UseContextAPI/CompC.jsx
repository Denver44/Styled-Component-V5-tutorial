import React from "react";
import { Fname } from "./App"; // must be in a comma as same as u export.
// So this is hell so we use UseContext.
const CompC = () => {
  return (
    <>
      <Fname.Consumer>
        {/* As It except a function  */}
        {/* so whatever we have written in fname we will get here as meta */}
        {(Fname) => <h1>I am in Component C {Fname}</h1>}
      </Fname.Consumer>
    </>
  );
};

// so if we have to add another we have write the it agin the same way we wrote this one but only after return.
export default CompC;

// import React from "react";
// import { Fname, Lname } from "./App"; // must be in a comma as same as u export.

// const CompC = () => {
//   return (
//     <>
//       <Fname.Consumer>
//         {/* Consumer alaways Except a Function */}
//         {(Fname) => {
//           return (
//             <Lname.Consumer>
//               {(Lname) => {
//                 return (
//                   <h1>
//                     I am in Component C {Fname} {Lname}
//                   </h1>
//                 );
//               }}
//             </Lname.Consumer>
//           );
//         }}
//       </Fname.Consumer>
//     </>
//   );
// };

// export default CompC;
