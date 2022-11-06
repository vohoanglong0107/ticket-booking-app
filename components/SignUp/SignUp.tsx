import React from "react";
export default function SignUp({ onClick }) {
  return (
    <div className="bg-grey-lighter flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <input
            type="text"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="username"
            placeholder="UserName"
          />

          <input
            type="text"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full rounded bg-cyan-500 py-3 px-6 py-2.5 text-center text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            Create Account
          </button>

          <div className="text-grey-dark mt-4 text-center text-sm">
            Designed by{" "}
            <a
              className="border-grey-dark text-grey-dark border-b font-bold no-underline"
              href="#"
            >
              Bottom Social Dev Team
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?{" "}
          <a
            className="border-blue border-b text-violet-600 no-underline"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}
