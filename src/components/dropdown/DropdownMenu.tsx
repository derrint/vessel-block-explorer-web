import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { FaSortDown } from 'react-icons/fa';

type IDropdownMenuProps = {
  title: string;
  items: any;
  className?: string;
  textClassName?: string;
  onChange?: any;
};

const DropdownMenu = (props: IDropdownMenuProps) => {
  return (
    <Menu
      as="div"
      className={`relative inline-block text-left ${props.className}`}
    >
      <Menu.Button
        className={`inline-flex gap-2 justify-between w-full text-sm font-bold focus:outline-none whitespace-nowrap ${props.textClassName}`}
      >
        {props.title}
        <div className="pt-px text-black">
          <FaSortDown size={14} />
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            {props.items.map((item: any) => {
              return (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'text-primary' : 'text-black'
                      } group flex rounded-md items-center w-full px-4 py-3 text-sm font-bold hover:bg-primary/[.05]  `}
                      onClick={() => props.onChange(item.id)}
                    >
                      {item.label}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export { DropdownMenu };
