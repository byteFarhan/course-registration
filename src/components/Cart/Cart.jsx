import { LuDollarSign } from "react-icons/lu";
import { TfiBook } from "react-icons/tfi";
import PropTypes from "prop-types";
const Cart = ({ cart, handleSelectBtn }) => {
  //   console.log(cart);
  const { title, price, description, credit, cover } = cart;
  return (
    <>
      <div className="p-5 space-y-4 bg-white rounded-lg hover:shadow">
        <img src={cover} alt={description} className="w-full" />

        <div className="">
          <h2 className="text-xl font-bold ">{title}</h2>
          <p className=" text-paragrap">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5 ">
              <span className="text-2xl font-medium ">
                <LuDollarSign />
              </span>
              <p className="mt-1 font-medium">Price : {price}</p>
            </div>
            <div className="flex items-center gap-5 ">
              <span className="text-2xl font-medium ">
                <TfiBook />
              </span>
              <p className="mt-1 font-medium">Credit : {credit}hr</p>
            </div>
          </div>
          <button
            onClick={() => handleSelectBtn(title)}
            className="w-full text-white transition-all delay-100 bg-blue-500 btn hover:bg-blue-600"
          >
            Select
          </button>
        </div>
      </div>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  handleSelectBtn: PropTypes.func.isRequired,
};
export default Cart;

{
  /* <div className="shadow-xl card w-96 bg-base-100">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */
}
