import PropTypes from "prop-types";
const EnrollmentCart = ({ enrollments }) => {
  return (
    <div className=" lg:w-1/4">
      <div className="px-10 pt-5 pb-10 space-y-5 bg-white rounded-lg hover:shadow">
        <h1 className="text-2xl font-bold text-blue-600 ">
          Credit Hour Remaining 7 hr
        </h1>
        <hr className="border-b border-gray-100 " />
        <div className="pb-5 ">
          <h2>Course Name</h2>
          <ol className="space-y-1 text-lg font-medium ">
            {enrollments.map((enrollment, idx) => (
              <li key={idx}>{enrollment}</li>
            ))}
            {/* {enrollments.map((enrollment) => console.log(enrollment))} */}
          </ol>
        </div>
        <hr className="border-b border-gray-100 " />
        <p className="font-semibold ">Total Credit Hour : 13</p>
        <hr className="border-b border-gray-100 " />
        <p className="font-bold ">Total Price : 48000 USD</p>
      </div>
    </div>
  );
};

EnrollmentCart.propTypes = {
  enrollments: PropTypes.array.isRequired,
};
export default EnrollmentCart;
