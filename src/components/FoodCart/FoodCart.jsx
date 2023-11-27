function FoodCart({ item }) {
  const { name, image, price, recipe } = item;
  return (
    <>
      <div className="w-96 bg-base-100 shadow-xl m-4 rounded">
        <figure>
          <img src={image} alt="" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div>
          <h2>{name}</h2>
          <p className="mx-4">{recipe}</p>
          <div className="justify-end">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCart;
