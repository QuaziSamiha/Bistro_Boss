import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
// css parallax --- search and learn
function Featured() {
  return (
    <>
      <section className="featured-item bg-fixed text-white pt-8 my-24">
        <SectionTitle subHeading="check it out" heading="Featured Item" />
        <div className="md:flex justify-center items-center bg-opacity-60 bg-slate-500 px-16 pb-20 pt-12">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:pl-6">
            <p className="mb-1">Aug 20, 2029</p>
            <p className="uppercase mb-1">where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              porro aperiam accusantium veritatis neque voluptatum, nisi libero
              laborum repudiandae officiis ex atque id recusandae praesentium
              culpa tempora accusamus voluptates? Debitis architecto blanditiis,
              eum expedita recusandae natus illo corrupti nesciunt, perferendis
              nihil, eaque totam veritatis cumque praesentium doloremque
              dignissimos molestiae fuga.
            </p>
            <button className="mt-6 uppercase border-0 border-b-4 hover:bg-gray-400 hover:text-white  border-white text-white px-4 py-2 my-3 rounded">
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
