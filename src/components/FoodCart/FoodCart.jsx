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
        <div className="flex flex-col items-center">
          <h2>{name}</h2>
          <p className="mx-4">{recipe}</p>
          <div className="justify-end">
            <button className="bg-slate-100 border-0 border-b-4 px-3 rounded border-orange-400 mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCart;
