import { useState } from "react";
import orderCoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
// import FoodCart from "../../../components/FoodCart/FoodCart";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Order() {
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  //   console.log(category)
  //   const [tabIndex, setTabIndex] = useState(0);
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <>
      <section>
        <Helmet>
          <title>Bistro Boss | Order Food</title>
        </Helmet>
        <div>
          <Cover img={orderCoverImg} title="Order Food" />
          {/* <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}> */}
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
              {/* <div className="grid grid-cols-3 gap-10">
                {salad.map((item) => (
                  <FoodCart key={item._id} item={item} />
                ))}
              </div> */}
              <OrderTab items={salad} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={dessert} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks} />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default Order;
