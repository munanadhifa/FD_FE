import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

const Datas = (props) => {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {props.list.map((user, index) => (
        <tr key={index}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {user.product_name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {user.memory}
          </td>
          <td>
            <img className="block h-8 w-auto mt-2.5" src={user.image} />
          </td>
          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 inline-flex">
            <PencilIcon
              className="h-5 w-5 mr-2"
              aria-hidden="true"
              onClick={() => props.handleEdit(index)}
            />
            <TrashIcon
              className="h-5 w-5"
              aria-hidden="true"
              onClick={() => props.handleDelete(index)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Datas;
