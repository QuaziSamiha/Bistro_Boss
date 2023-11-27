import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
// import menuImg from "../../../assets/menu/menu-bg.png";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
function Menu() {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <section>
        <Helmet>
          <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={menuImg} title="Our Menu" />
        {/* main cover */}
        <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
        {/* offered menu items */}
        <MenuCategory items={offered} />
        {/* dessert menu items */}
        <MenuCategory items={dessert} title="Dessert" img={dessertImg} />
        {/* pizza menu items */}
        <MenuCategory items={pizza} title="Pizza" img={pizzaImg} />
        <MenuCategory items={salad} title="salad" img={saladImg} />
        <MenuCategory items={soup} title="soup" img={soupImg} />
      </section>
    </>
  );
}

export default Menu;
