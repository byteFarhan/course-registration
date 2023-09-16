import PropTypes from "prop-types";
const EnrollmentCart = ({ enrollments, credit, price }) => {
  const remainingCredit = 20 - credit;
  return (
    <div className=" lg:w-1/4">
      <div className="px-10 pt-5 pb-10 space-y-5 bg-white rounded-lg hover:shadow">
        <h1 className="text-2xl font-bold text-blue-600 ">
          Credit Hour Remaining {remainingCredit} hr
        </h1>
        <hr className="border-b border-gray-100 " />
        <div className="pb-5 ">
          <h2>Course Name</h2>
          <ol className="space-y-1 text-lg font-medium ">
            {enrollments.map((enrollment, idx) => (
              <li key={idx}>{enrollment}</li>
            ))}
          </ol>
        </div>
        <hr className="border-b border-gray-100 " />
        <p className="font-semibold ">Total Credit Hour : {credit}</p>
        <hr className="border-b border-gray-100 " />
        <p className="font-bold ">Total Price : {price.toFixed(2)} USD</p>
      </div>
    </div>
  );
};

EnrollmentCart.propTypes = {
  enrollments: PropTypes.array.isRequired,
  credit: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
export default EnrollmentCart;
