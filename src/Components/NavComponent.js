// import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown({ sub, title, handleClick }) {
  return (
    <Menu as="div" className="text-left relative  ">
      <div>
        <Menu.Button className="inline-flex w-full gap-x-1.5 py-2 text-sm font-semibold text-gray-900 ">
          {title}
          <FaChevronDown
            size={10}
            className="-mr-1 h-5 w-5 text-gray-400 content-center"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {sub.map((link) => (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    onClick={handleClick}
                    to={link.href}
                    className={classNames(
                      active
                        ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-purple-accent-400"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}>
                    {link.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
