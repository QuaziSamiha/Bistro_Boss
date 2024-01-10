/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

// ------------WHAT IS CURL? ------------- 'SEE URL OR CURL' ---- COMMAND LINE TOOL

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  console.log(image_hosting_api);
  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
    FormData.append("image", data.image[0]);

    fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        if (imageData.success) {
          const imgURL = imageData.data.display_url;
          //   console.log(imgURL);

          //   -----------------------1st version------------------
          //   const menuItem = data;
          //   menuItem.image = imgURL;
          //   console.log(data, imgURL);
          //  ------------------------2nd version ----------------------
          const { name, price, category, recipe } = data;
          //   const menuItem = { name, price, category, recipe, image: imgURL };
          const menuItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(menuItem);
          axiosSecure.post("/menu", menuItem).then((data) => {
            console.log("after posting new menu item", data);
            if (data.insertedId) {
              // return 'thanks'
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "wow",
                timer: 1500,
              });
            }
          });
        }
      });

    // image upload to imgbb and then get an url
    // const imageFile = { image: data.image[0] }
    // const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
    // });
    //     // if (res.data.success) {
    //     //     // now send the menu item data to the server with the image url
    //     //     const menuItem = {
    //     //         name: data.name,
    //     //         category: data.category,
    //     //         price: parseFloat(data.price),
    //     //         recipe: data.recipe,
    //     //         image: res.data.data.display_url
    //     //     }
    //         //
    //         const menuRes = await useAxiosSecure.post('/menu', menuItem);
    //         console.log(menuRes.data)
    //         if(menuRes.data.insertedId){
    //             // show success popup
    //             reset();
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: `${data.name} is added to the menu.`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //     }
    //     console.log( 'with image url', res.data);
  };
  return (
    <>
      <section className="w-full">
        <SectionTitle subHeading={"what&apos;s new"} heading={"Add An Item"} />
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Recipe Name*</span>
              </label>
              <input
                type="text"
                placeholder="Recipe Name"
                {...register("name", { required: true, maxLength: 120 })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex gap-6">
              {/* category */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              {/* price */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* recipe details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>
              <textarea
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </div>

            <div className="form-control w-full my-6">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>

            <button className="btn">
              Add Item <FaUtensils className="ml-4"></FaUtensils>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddItem;
