import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Decks", href: "/decks", current: true },
  { name: "How-to-Play", href: "/help", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-slate-700 absolute top-0 w-screen z-50">
      {({ open }) => (
        <>
          <div className="flex p-2 max-w-7xl mx-auto">
            <div className="sm:hidden flex items-center gap-4">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-gray-700">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
              <h1 className="text-xl text-slate-200 hover:text-white">
                Speed Duel Library
              </h1>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ml-6 gap-8">
              <h1 className="text-xl text-slate-200 hover:text-white">
                Speed Duel Library
              </h1>
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
