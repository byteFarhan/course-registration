import Carts from "./components/Carts/Carts";
import EnrollmentCart from "./components/EnrollmentCart/EnrollmentCart";

function App() {
  return (
    <div className=" md:px-5 lg:px-10">
      <h1 className="text-3xl font-bold text-center ">Course Registration</h1>
      <div className="flex flex-col gap-10 lg:flex-row">
        <Carts></Carts>
        <EnrollmentCart></EnrollmentCart>
      </div>
    </div>
  );
}

export default App;
