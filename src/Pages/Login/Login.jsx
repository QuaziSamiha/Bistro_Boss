import {
  useContext,
  useEffect,
  // useRef,
  useState,
} from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  // LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

function Login() {
  // const captchaRef = useRef(null);
  const [loginDisable, setLoginDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    // const user_captcha_value = captchaRef.current.value;
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setLoginDisable(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="min-h-screen bg-base-200 my-28 px-12">
        <div className="flex flex-col md:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem culpa veniam pariatur dolor atque necessitatibus,
              blanditiis in at ad iste.
            </p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="mt-2">
                <label>
                  <span>Email</span> <br />
                </label>
                <input type="email" name="email" placeholder="email" />
              </div>
              <div className="mt-2">
                <label>
                  <span>Password</span> <br />
                </label>
                <input type="text" name="password" placeholder="password" />
              </div>
              {/* ----------------pause captcha for development purpose ------ */}

              <div className="mt-2">
                <label>
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  // ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="type the text above"
                />
                <br />
                <button onClick={handleValidateCaptcha} className="mt-2">
                  Validate
                </button>
              </div>
              <div className="mt-6">
                <input disabled={loginDisable} type="submit" value="Login" />
              </div>
              {/* TODO: make button disable for captcha */}
              {/* <div className="mt-6">
                <input disabled={false} type="submit" value="Login" />
              </div> */}
            </form>
            <p>
              <small>
                New Here? <Link to="/signup">Create an accout</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
