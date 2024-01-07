function MenuItem({ item }) {
  const { name, image, price, recipe } = item;
  return (
    <>
      <div className="flex space-x-4">
        <img
          style={{ borderRadius: `0 200px 200px 200px` }}
          className="w-[100px]"
          src={image}
          alt=""
        />
        <div className="text-[#6d6d6d]">
          <h3 className="uppercase mb-2">{name}-----------</h3>
          <p className="text-sm">{recipe}</p>
        </div>
        <p className="text-[#d1923d]">${price}</p>
      </div>
    </>
  );
}

export default MenuItem;
