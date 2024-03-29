import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Carts = ({ handleSelectBtn }) => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  return (
    <div className="grid grid-cols-1 gap-5 lg:w-3/4 md:grid-cols-2 lg:grid-cols-3">
      {carts &&
        carts?.map((cart) => (
          <Cart
            key={cart.id}
            cart={cart}
            handleSelectBtn={handleSelectBtn}
          ></Cart>
        ))}
    </div>
  );
};

Carts.propTypes = {
  handleSelectBtn: PropTypes.func.isRequired,
};
export default Carts;
