import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
function Featured() {
  return (
    <>
      <section className="featured-item bg-fixed text-white pt-8 my-20">
        <SectionTitle subHeading="check it out" heading="Featured Item" />
        <div className="md:flex justify-center items-center bg-opacity-60 bg-slate-500 px-16 pb-20 pt-12">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:pl-6">
            <p>Aug 20, 2029</p>
            <p className="uppercase">where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              porro aperiam accusantium veritatis neque voluptatum, nisi libero
              laborum repudiandae officiis ex atque id recusandae praesentium
              culpa tempora accusamus voluptates? Debitis architecto blanditiis,
              eum expedita recusandae natus illo corrupti nesciunt, perferendis
              nihil, eaque totam veritatis cumque praesentium doloremque
              dignissimos molestiae fuga.
            </p>
            <button className="uppercase border-b-4 hover:bg-black hover:text-white border border-black text-black px-2 my-3 rounded">
              Order Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
