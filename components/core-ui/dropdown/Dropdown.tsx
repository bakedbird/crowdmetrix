import { Menu } from "@headlessui/react";
import cn from "classnames";
import { ComponentChildren } from "custom-types";
import React from "react";

type Props = {
  button: React.ReactNode;
  children: ComponentChildren;
};

const Dropdown = ({ button, children }: Props) => (
  <Menu as="div" className="relative">
    <Menu.Button className="flex my-auto">{button}</Menu.Button>
    <Menu.Items
      className={cn(
        "z-10 absolute right-0 mt-1 w-60 min-w-max rounded-xl shadow-lg focus:outline-none p-1",
        "bg-slate-50 dark:bg-slate-700 border dark:border-slate-500"
      )}
    >
      {React.Children.map(children, (child) => (
        <Menu.Item>
          {({ active, close }) => (
            <div
              className={cn("cursor-pointer text-left rounded-lg", {
                "bg-teal-100 dark:bg-teal-300 text-teal-600 dark:text-teal-600":
                  active,
              })}
            >
              {/* 
                The reason for cloning the children is to ensure the onClick handler
                is passed to the next/Link components, so that the menu can close.
                The prop is passed to *all* children, even though only next/Link needs it
               */}
              {React.isValidElement(child)
                ? React.cloneElement(child, { ...child.props, onClick: close })
                : null}
            </div>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </Menu>
);

export default Dropdown;
