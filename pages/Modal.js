import { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import axios from "axios";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  //Add Data
  const [product_name, setProduct] = useState("");
  const [memory, setMemory] = useState("");

  const data = {
    product_name: product_name,
    memory: memory,
  };

  const clearState = () => {
    setProduct("");
    setMemory("");
  };

  function submitForm(e) {
    e.preventDefault();
    axios
      .post("https://beige-cooks-cover-114-124-215-84.loca.lt/products", data)
      .then(setShowModal(false));
    window.location.reload(false);
    clearState();
  }

  return (
    <>
      <div className="flex items-center justify-center modal">
        <button
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <PlusIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          Add Data
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="flex header-modal mb-5">
                  <h1>Add Template</h1>
                  <XMarkIcon
                    className="h-5 w-5 mr-2 m-auto"
                    aria-hidden="true"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="text"
                        id="product"
                        className="p-2 text-gray-500 w-full h-10 border rounded-md outline-none focus:bg-white focus:border-indigo-60"
                        placeholder="Product"
                        value={product_name}
                        onChange={(e) => setProduct(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Memory
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="text"
                        id="Memory"
                        className="p-2 text-gray-500 w-full h-10 border rounded-md outline-none focus:bg-white focus:border-indigo-60"
                        placeholder="Memory"
                        value={memory}
                        onChange={(e) => setMemory(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={submitForm}
                  className="float-right bg-blue-300 mt-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-white shadow-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
