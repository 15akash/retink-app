import { Fragment } from "react";
import "./Login.css";
import NavigationBar from "../NavigationBar";

function Login() {
  const submitHandler = (event) => {
    console.log("clicked");
    event.preventDefault();
  };

  return (
    <Fragment>
      <NavigationBar />
      <div className="login">
        <div className="m-auto form">
          <form
            className="bg-white text-comet-800 flex-col pt-10 pb-7 px-10 mx-10 shadow-2xl drop-shadow-2xl rounded-xl"
            onSubmit={submitHandler}
          >
            <div className="mb-10">
              <label className="block pb-2 text-lg" htmlFor="email">
                Email Id
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <label className="block pb-2 pt-5 text-lg" htmlFor="password">
                Password
              </label>
              <input
                placeholder="Enter your password"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex">
              <div className="flex px-2 pt-2">
                <p className="text-xs">
                  &copy;2020 Retink Corp. All rights reserved.
                </p>
              </div>

              <div className="flex justify-end pl-16 ml-8">
                <button
                  className="bg-blue-600 hover:bg-blue-800 text-white  px-5 py-2 rounded-md"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
