import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

function MenuCategory({ items, title, img }) {
  return (
    <>
      <div className="pt-8">
        {title && <Cover img={img} title={title} />}
        <div className="grid md:grid-cols-2 gap-10 my-16">
          {items.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <Link to={`/order/${title}`}>
          <button className="uppercase border-b-4 hover:bg-black hover:text-white border border-black text-black px-2 my-3 rounded">
            Order Now
          </button>
        </Link>
      </div>
    </>
  );
}

export default MenuCategory;
