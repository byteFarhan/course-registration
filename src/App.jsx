import { useState } from "react";
import Carts from "./components/Carts/Carts";
import EnrollmentCart from "./components/EnrollmentCart/EnrollmentCart";

function App() {
  const [enrollments, setEnrollments] = useState([]);
  const handleSelectBtn = (course) => {
    // console.log(course);
    const uniceEnrollments = [];
    const newEnrollments = [...enrollments, course];
    for (const enrollment of newEnrollments) {
      if (!uniceEnrollments.includes(enrollment)) {
        uniceEnrollments.push(enrollment);
      } else alert("Your are alrady enrolled!");
    }
    setEnrollments(uniceEnrollments);
  };

  return (
    <div className=" md:px-5 lg:px-10">
      <h1 className="text-3xl font-bold text-center ">Course Registration</h1>
      <div className="flex flex-col gap-10 my-10 lg:flex-row">
        <Carts handleSelectBtn={handleSelectBtn}></Carts>
        <EnrollmentCart enrollments={enrollments}></EnrollmentCart>
      </div>
    </div>
  );
}

export default App;
