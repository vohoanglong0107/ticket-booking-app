import React, { useState } from "react";
// import Image from "next/image";

// import '../../styles/globals.css'
export interface CreateGameFormProps {
  onCreateGame: (
    name: string,
    description: string,
    location: string,
    price: number,
    remaining_slot: number
  ) => boolean;
  errors?: string[];
}
export default function GameRegisterForm({
  onCreateGame,
  errors,
}: CreateGameFormProps) {
  const [gameRegisterData, setGameRegisterData] = useState({
    name: "",
    description: "",
    location: "",
    price: 0,
    remaining_slot: 0,
    file: false,
  });

  const { name, description, location, price, remaining_slot, file } =
    gameRegisterData;

  const onchangeGameRegisterData = (event) => {
    setGameRegisterData({
      ...gameRegisterData,
      [event.target.name]: event.target.value,
    });
    var input = document.getElementById("dropzone-file") as HTMLInputElement;
    if (input.files[0]) {
      var fReader = new FileReader();
      fReader.readAsDataURL(input.files[0]);
      fReader.onloadend = function (event) {
        var img = document.getElementById("upload-image") as HTMLInputElement;
        img.src = event.target.result as string;
      };
    }
    // console.log((document.getElementById('dropzone-file') as HTMLInputElement).files[0].path);
  };
  //e: React.FormEvent<HTMLFormElement>
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(gameRegisterForm);
    let status = await onCreateGame(
      gameRegisterData.name,
      gameRegisterData.description,
      gameRegisterData.location,
      parseFloat(String(gameRegisterData.price)),
      parseInt(String(gameRegisterData.remaining_slot))
    );
    if (status)
      setGameRegisterData({
        name: "",
        description: "",
        location: "",
        price: 0,
        remaining_slot: 0,
        file: false,
      });
    alert("Create game successfully");
  };

  const cancelImageEvent = (e) => {
    (document.getElementById("dropzone-file") as HTMLInputElement).value = null;
    setGameRegisterData({
      ...gameRegisterData,
      file: false,
    });
  };

  return (
    <section className="gradient-form bg-gray-200">
      <div className="py-12 px-6">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
          <div className="xl:w-10/12">
            <div className="block rounded-lg bg-white shadow-lg  md:p-12">
              <div className="text-center">
                <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold">
                  Game register
                </h4>
              </div>
              <div className="g-0 lg:flex lg:flex-wrap ">
                <div className="border-black-500 border-r-2 px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          id="game-name"
                          placeholder="Name"
                          name="name"
                          value={name}
                          onChange={onchangeGameRegisterData}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          id="game-description"
                          placeholder="Description"
                          name="description"
                          value={description}
                          onChange={onchangeGameRegisterData}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          id="game-location"
                          placeholder="Location"
                          name="location"
                          value={location}
                          onChange={onchangeGameRegisterData}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          id="game-price"
                          placeholder="Price"
                          name="price"
                          value={price}
                          onChange={onchangeGameRegisterData}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="number"
                          className="form-control
                          m-0
                          block
                          w-full
                          rounded
                          border
                          border-solid
                          border-gray-300
                          bg-white bg-clip-padding
                          px-3 py-1.5 text-base
                          font-normal
                          text-gray-700
                          transition
                          ease-in-out
                          focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          id="game-remaining-slot"
                          placeholder="Remaining slot"
                          name="remaining_slot"
                          value={remaining_slot}
                          onChange={onchangeGameRegisterData}
                        />
                      </div>
                      <div className="mb-8 pt-1 pb-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded bg-cyan-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                          type="submit"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          // onClick={onClick}
                        >
                          Create game
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                  <div
                    className={
                      !file
                        ? "hidden w-full items-center justify-center"
                        : "w-full items-center justify-center"
                    }
                  >
                    <img
                      id="upload-image"
                      className="max-w-5 m-auto max-h-full object-cover"
                      // src={file ?? String(file)}
                    />
                    <br />
                    <button
                      className="w-50	m-auto mb-3 block rounded bg-red-400 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={cancelImageEvent}
                    >
                      Delete image
                    </button>
                  </div>
                  <div
                    className={
                      file
                        ? "flex hidden w-full items-center justify-center"
                        : "flex w-full items-center justify-center"
                    }
                  >
                    <label
                      htmlFor="dropzone-file"
                      className="dark:hover:bg-bray-800 h-120 bg-white-50 dark:border-white-600 dark:bg-white-700 flex w-4/5 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:bg-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          className="mb-3 h-10 w-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            // stroke-linecap="round"
                            // stroke-linejoin="round"
                            // stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <form action="">
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          name="file"
                          onChange={onchangeGameRegisterData}
                        />
                      </form>
                    </label>
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
