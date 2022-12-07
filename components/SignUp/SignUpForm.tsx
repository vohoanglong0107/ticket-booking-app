import React from "react";
export interface SignUpFormProps {
  onSignUp: (
    name: string,
    email: string,
    password: string,
    role: string
  ) => void;
  loginPath: string;
  errors?: string[];
}
export default function SignUpForm({
  onSignUp,
  loginPath,
  errors,
}: SignUpFormProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("USER");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSignUp(name, email, password, role);
  };
  return (
    <div className="bg-grey-lighter flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-8 text-center text-3xl">Sign up</h1>
            <input
              type="text"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <div className="mb-4 flex flex-row">
              <div className="mr-2 flex flex-1 cursor-pointer items-center rounded border border-gray-200 pl-4">
                <input
                  checked={role === "USER"}
                  id="bordered-radio-1"
                  type="radio"
                  value={role}
                  name="role"
                  className="h-4 w-4 cursor-pointer bg-gray-100 text-blue-600"
                  onChange={(e) => setRole("USER")}
                />
                <label
                  htmlFor="bordered-radio-1"
                  className="ml-2 w-full cursor-pointer py-4 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Player
                </label>
              </div>
              <div className="ml-5 flex flex-1 cursor-pointer items-center rounded border border-gray-200 pl-4">
                <input
                  id="bordered-radio-2"
                  type="radio"
                  value={role}
                  name="role"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600"
                  onChange={(e) => setRole("STORE_OWNER")}
                />
                <label
                  htmlFor="bordered-radio-2"
                  className="ml-2 w-full cursor-pointer py-4 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Store owner
                </label>
              </div>
            </div>
            <input
              type="password"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            {errors && (
              <div
                className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
                role="alert"
              >
                <ul>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

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
          </form>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?{" "}
          <a
            className="border-blue border-b text-violet-600 no-underline"
            href={loginPath}
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}
