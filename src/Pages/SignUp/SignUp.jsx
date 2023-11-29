import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function SignUp() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="min-h-screen bg-base-200 my-28 px-12">
        <div className="flex flex-col md:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem culpa veniam pariatur dolor atque necessitatibus,
              blanditiis in at ad iste.
            </p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-2">
                <label>
                  <span>Name</span> <br />
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  {...register("name")}
                />
              </div>
              <div className="mt-2">
                <label>
                  <span>Email</span> <br />
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  {...register("email")}
                />
              </div>
              <div className="mt-2">
                <label>
                  <span>Password</span> <br />
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  {...register("password")}
                />
              </div>
              <div className="mt-6">
                {/* <button>Sign Up</button> */}
                <input type="submit" value="Sign Up" />
              </div>
            </form>
            <p>
              <small>
                already have an account?
                <Link to="/login">Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
