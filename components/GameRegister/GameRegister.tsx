import React from "react";
// import '../../styles/globals.css'

export default function SignIn({ onClick }) {
  return (
    <section className="gradient-form h-full bg-gray-200 md:h-screen">
      <div className="container h-full py-12 px-6">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
          <div className="xl:w-10/12">
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="g-0 max-w-lg lg:flex lg:flex-wrap">
                <form class="w-full max-w-lg">
                  <div class="-mx-3 mb-6 flex flex-wrap">
                    <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                      <label
                        class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                        for="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        class="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                      <p class="text-xs italic text-red-500">
                        Please fill out this field.
                      </p>
                    </div>
                    <div class="w-full px-3 md:w-1/2">
                      <label
                        class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                        for="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div class="-mx-3 mb-6 flex flex-wrap">
                    <div class="w-full px-3">
                      <label
                        class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                        for="grid-password"
                      >
                        Password
                      </label>
                      <input
                        class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="grid-password"
                        type="password"
                        placeholder="******************"
                      />
                      <p class="text-xs italic text-gray-600">
                        {"Make it as long and as crazy as you'd like"}
                      </p>
                    </div>
                  </div>
                  <div class="-mx-3 mb-2 flex flex-wrap">
                    <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                      <label
                        class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                        for="grid-city"
                      >
                        City
                      </label>
                      <input
                        class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="grid-city"
                        type="text"
                        placeholder="Albuquerque"
                      />
                    </div>
                    <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                      <label
                        class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                        for="grid-state"
                      >
                        State
                      </label>
                      <div class="relative">
                        <select
                          class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                          id="grid-state"
                        >
                          <option>New Mexico</option>
                          <option>Missouri</option>
                          <option>Texas</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            class="h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                      <label
                        class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                        for="grid-zip"
                      >
                        Zip
                      </label>
                      <input
                        class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="grid-zip"
                        type="text"
                        placeholder="90210"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
