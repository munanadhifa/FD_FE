import { Popover } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open ? "fixed inset-0 z-40 overflow-y-auto" : "",
          "bg-white shadow-sm lg:static lg:overflow-y-visible h-12"
        )
      }
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative text-end">
              <div>
                <div className="items-right flex inline-flex">
                  <p className="mt-2 mr-4">Username</p>
                  <button class="rounded-lg px-4 py-2  text-gray-500 hover:text-gray-600 duration-300">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Popover>
  );
}
