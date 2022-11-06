import React from "react";
// import '../../styles/globals.css'

export default function SignIn({ onClick }) {
  return (
    <section className="gradient-form h-full bg-gray-200 md:h-screen">
      <div className="container h-full py-12 px-6">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
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
                    <form>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mb-8 pt-1 pb-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded bg-cyan-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          onClick={onClick}
                        >
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">
                          Forgot password?
                        </a>
                      </div>
                      <div className="mb-5 flex items-center justify-around pb-6 ">
                        <img
                          className="md:1/12 w-1/12 lg:w-1/12"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                          alt="facebookLogo"
                        ></img>
                        <img
                          className="md:1/12 w-1/12 lg:w-1/12"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                          alt="facebookLogo"
                        ></img>
                        <img
                          className="md:1/12 w-1/12 lg:w-1/12"
                          src="https://cdn.freebiesupply.com/logos/large/2x/twitter-3-logo-png-transparent.png"
                          alt="facebookLogo"
                        ></img>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">{"Don't have an account?"}</p>
                        <button
                          type="button"
                          className="inline-block rounded px-6 py-2 text-xs font-medium uppercase leading-tight text-violet-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          SignUp
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                  <div className="hidden px-2 py-6 text-white md:mx-2 md:p-8 lg:block">
                    <img src="https://media.mia.vn/uploads/blog-du-lich/kham-pha-asia-park-da-nang-khu-vui-choi-giai-tri-hang-dau-viet-nam-9-1636361876.jpg"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
