import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carts from "./components/Carts/Carts";
import EnrollmentCart from "./components/EnrollmentCart/EnrollmentCart";

function App() {
  const [enrollments, setEnrollments] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelectBtn = (course, newCredit, newPrice) => {
    const totalCredit = credit + newCredit;
    if (totalCredit > 20) {
      toast("You don't have enough credit hours!");
      const uniceEnrollments1 = [];
      console.log(enrollments);
      for (const enrollment of enrollments) {
        if (!uniceEnrollments1.includes(enrollment)) {
          uniceEnrollments1.push(enrollment);
        }
      }

      setEnrollments(uniceEnrollments1);
      setCredit(credit);
      setPrice(price);
    } else {
      const uniceEnrollments = [];
      const newEnrollments = [...enrollments, course];
      for (const enrollment of newEnrollments) {
        if (!uniceEnrollments.includes(enrollment)) {
          uniceEnrollments.push(enrollment);
          setCredit(totalCredit);
          setPrice(price + newPrice);
        } else {
          setCredit(credit);
          setPrice(price);
          toast("You have alrady selected this course!");
        }
      }
      setEnrollments(uniceEnrollments);
    }
  };

  return (
    <div className=" md:px-5 lg:px-10">
      <h1 className="text-3xl font-bold text-center ">Course Registration</h1>
      <div className="flex flex-col gap-10 my-10 lg:flex-row">
        <Carts handleSelectBtn={handleSelectBtn}></Carts>
        <EnrollmentCart
          enrollments={enrollments}
          credit={credit}
          price={price}
        ></EnrollmentCart>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
