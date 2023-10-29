import { Fragment, useContext, useState } from "react";
import Context from "../store/Context";
import cartIcon from "../cart/cart.png";

const AddingForm = (props) => {
  const ctx = useContext(Context);
  console.log(ctx);

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const nameHandeler = (event) => {
    setName(event.target.value);
  };
  const descriptionHandeler = (event) => {
    setDescription(event.target.value);
  };
  const priceHandeler = (event) => {
    setPrice(event.target.value);
  };
  const quantityHandeler = (event) => {
    setQuantity(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    props.user(name, description, price, quantity);
  };

  return (
    <Fragment>
      <form
        style={{ display: "flex", justifyContent: "space-around" }}
        onSubmit={submit}
      >
        <div>
          Medicine Name <br /> <input onChange={nameHandeler} />
        </div>
        <div>
          Description <br /> <input onChange={descriptionHandeler} />
        </div>
        <div>
          Price <br /> <input onChange={priceHandeler} />
        </div>
        <div>
          Quantity Available
          <br /> <input onChange={quantityHandeler} />
        </div>
        <div>
          <br />
          <button type="submit">Add Product</button>
        </div>
        <div>
          <img src={cartIcon} />
        </div>
      </form>
    </Fragment>
  );
};
export default AddingForm;
