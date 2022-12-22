import { ChevronDownIcon } from "@heroicons/react/20/solid";

import React, { useState, useEffect } from "react";
import Datas from "./Data";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import Modal from "./Modal";

const TableList = () => {
  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const search = (list) => {
    return list.filter((user) =>
      user.product_name?.toLowerCase().includes(searchValue)
    );
  };

  const fetchData = () => {
    fetch("https://beige-cooks-cover-114-124-215-84.loca.lt/products", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchData();
    // fetchAreaData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const handleDelete = (index, e) => {
    setList(list.filter((user, i) => i !== index));
  };

  const handleEdit = (index, e) => {};
  console.log("test button edit");
  return (
    <div>
      <Navbar />

      <div className="px-4 sm:px-6 lg:px-8 mt-2">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 mt-20 ml-8 text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search Produk"
              className=" mt-3 py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Modal />
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <p href="#" className="group inline-flex">
                          Product
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="h-5 w-5"
                              ardia-hidden="true"
                            />
                          </span>
                        </p>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <p href="#" className="group inline-flex">
                          Memory
                        </p>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <p href="#" className="group inline-flex">
                          Image
                        </p>
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  {/* <Datas list={currentPosts} handleDelete={handleDelete} /> */}
                  <Datas
                    list={search(currentPosts)}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </table>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={list.length}
                  paginateBack={paginateBack}
                  paginateFront={paginateFront}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableList;
