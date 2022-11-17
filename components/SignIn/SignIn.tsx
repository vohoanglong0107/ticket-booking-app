import Image from "next/image";
import React, { useState } from "react";
import facebookLogo from "@/assets/images/Facebook_Logo.png.webp";
import googleLogo from "@/assets/images/Google_Logo.svg.webp";
import twitterLogo from "@/assets/images/Twitter_Logo.png";
import asiaParkCover from "@/assets/images/AsiaPark_Cover.jpg";

export interface SignInProps {
  onSignIn: (email: string, password: string) => void;
  onSignUp: () => void;
}

export default function SignIn({ onSignIn, onSignUp }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle sign in failure
    onSignIn(email, password);
  };

  return (
    <div className="xl:w-10/12">
      <div className="block rounded-lg bg-white shadow-lg">
        <div className="g-0 lg:flex lg:flex-wrap ">
          <div className="border-black-500 border-r-2 px-4 md:px-0 lg:w-6/12">
            <div className="md:mx-6 md:p-12">
              <div className="text-center">
                <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold">
                  Bottom Social
                </h4>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="email"
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-8 pt-1 pb-1 text-center">
                  <button
                    className="mb-3 inline-block w-full rounded bg-cyan-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    type="submit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Log in
                  </button>
                  <a className="text-gray-500" href="#!">
                    Forgot password?
                  </a>
                </div>
                <div className="mb-5 flex items-center justify-around pb-6 ">
                  <div className="md:1/12 w-1/12 lg:w-1/12">
                    <Image src={facebookLogo} alt="facebookLogo"></Image>
                  </div>
                  <div className="md:1/12 w-1/12 lg:w-1/12">
                    <Image src={googleLogo} alt="googleLogo"></Image>
                  </div>
                  <div className="md:1/12 w-1/12 lg:w-1/12">
                    <Image
                      className="md:1/12 w-1/12 lg:w-1/12"
                      src={twitterLogo}
                      alt="twitterLogo"
                    ></Image>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-6">
                  <p className="mb-0 mr-2">{"Don't have an account?"}</p>
                  <button
                    type="button"
                    className="inline-block rounded px-6 py-2 text-xs font-medium uppercase leading-tight text-violet-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={() => onSignUp()}
                  >
                    SignUp
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
            <div className="hidden px-2 py-6 text-white md:mx-2 md:p-8 lg:block">
              <Image src={asiaParkCover} alt="cover"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
