import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

function FoodCart({ item }) {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = { foodId: _id, name, image, price, email: user.email };
      fetch(`http://localhost:5000/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success",
          // });
          //----------------- not dynamically setting navition option ----------------------
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <div className="w-96 bg-base-100 shadow-xl m-4 rounded">
        <figure>
          <img src={image} alt="" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="flex flex-col items-center">
          <h2>{name}</h2>
          <p className="mx-4">{recipe}</p>
          <div className="justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-slate-100 border-0 border-b-4 px-3 rounded border-orange-400 mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCart;
