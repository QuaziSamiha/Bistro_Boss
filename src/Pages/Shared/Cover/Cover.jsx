import { Parallax } from "react-parallax";

function Cover({ img, title }) {
  return (
    <>
      <Parallax
        blur={{ min: -50, max: 50 }}
        // bgImage={require("path/to/another/image.jpg")}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
      >
        {/* <div className="h-[700px]" style={{ backgroundImage: `url("${img}")` }}> */}
        <div className="h-[700px] mt-16 flex items-center justify-center">
          <div className="bg-opacity-40"></div>
          <div className="text-center text-neutral-100">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                pariatur dolores ipsam repellat odio corrupti quo impedit eius!
                Magni, modi.
              </p>
            </div>
          </div>
        </div>
        {/* Blur transition from min to max
        <div style={{ height: "200px" }} /> */}
      </Parallax>
    </>
  );
}

export default Cover;
