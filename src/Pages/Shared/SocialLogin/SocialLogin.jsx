import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);

        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          //   .then((data) => {
          //     if (data.insertedId) { // no need to check, as 
          //       console.log(from);
          //       navigate(from, { replace: true });
          //     }
          //   });
          .then(() => {
            navigate(from, { replace: true });
          });

        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-8">
        <button onClick={handleGoogleSignIn}>
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
