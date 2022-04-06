import React, { Fragment } from 'react';

import { Tab, Dialog, Transition, Popover } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineQrcode } from 'react-icons/hi';
import { IoMdCopy } from 'react-icons/io';
import QRCode from 'react-qr-code';

import { Section } from '@components/layout';
import { Search } from '@components/search';
import { copyToClipboard } from '@utils/helper';

import ERCs from './erc';
import Transactions from './txs';

const BlocksDetails = () => {
  const address = '0x2281774720dab09c';
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const tabs = [
    {
      id: 'txs',
      label: 'Transactions',
      content: <Transactions />,
    },
    {
      id: 'erc-20',
      label: 'ERC 20',
      content: <ERCs />,
    },
    {
      id: 'erc-1155',
      label: 'ERC 1155',
      content: <ERCs />,
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const tokens = [
    {
      name: 'Matic Token',
      icon: 'https://derrint.sirv.com/Images/vessel/block-explorer/icons/icon-matic.png',
      amount: '24,880 MATIC',
      price: '$33,177',
      value: '$1.37',
    },
    {
      name: 'USD Coin',
      icon: 'https://derrint.sirv.com/Images/vessel/block-explorer/icons/icon-usdc.png',
      amount: '66 USDC',
      price: '$24,300',
      value: '$1.40',
    },
  ];

  return (
    <Section>
      <div className="flex flex-row justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Wallet details</h1>
        <Search />
      </div>

      <div className="flex items-center gap-4 mb-5">
        <img
          id="icon"
          className="u-xs-avatar rounded-full w-8"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA5BJREFUeF7t3b2xFWcQRdG5NhaZUCUPosAlBaJRHDJIArAgFizkSkEs41RL+/k9X7/de86dv5p5ffrz3T/P4b+Pf7yZdv/l5+/p+rr4KwEMYQIYP64uAQxhCWD8nhIAAWp5CWAESwDjVwIgPy4vAQxhCWD8SgDkx+UlgCEsAYxfCYD8uLwEMIQlgPErAZAfl5cAhrAEMH4lAPLj8hLAEJYAxq8EWO+BOL/z5XozihMgAbYOJcCW/3z1BJiPYNtAAmz5z1dPgPkItg0kwJb/fPUEmI9g20ACbPnPV0+A+Qi2DSTAlv989QSYj2DbQAJs+c9XT4D5CLYNJMCW/3z1BJiPYNvAeQH0H1jfjl73r+vPnwfQfyAB7AUVCYAJvhZY10+ABLB3BGkEq8G6Ps6fHwrV/pVfCYAG6AASAN+ypQBx/iWADmC9ByUAvicwAew0bM2vYwCMgHWC6foJkACdBooDugf2E9BZgPjHZyH9BBD+hwdQApQApKD+BJUAhP8/kACff/xN3wv49e09IrRyjVBb3QXQ9d9++E6beCUA8eNjAFv9eRLgf/7FkARIAAqRfgIIX8cATweBdjMI/esYoLOAzgJ0J6J6vRBDiz+dBTwlQAmgOxHVlwBdCSSBtLjrAF0HIIe6DkD4ug7QdQC8nY3+dR2gs4DOAnQnovrzZwHXPx9P06v44SeCYnibQALcnh93nwCM8PYGEuD2/Lj7BGCEtzeQALfnx90nACO8vYEEuD0/7j4BGOHtDSTA7flx9wnACG9vIAFuz4+7TwBGeHsDCXB7ftx9AjDC2xt4/fX1A70fYP1AxG383r0+EZUAPoPpFhJgin+/eALsZzDtIAGm+PeLJ8B+BtMOEmCKf794AuxnMO0gAab494snwH4G0w4SYIp/v3gC7Gcw7SABpvj3iyfAfgbTDhJgin+/eALsZzDtgAW4/n4ABaDTu/48xPknghLAFE4A4zf/YAS2f/8NISWAKVACGL8SAPlxeQlgCEsA41cCID8uLwEMYQlg/EoA5MflJYAhLAGMXwmA/Li8BDCEJYDxKwGQH5eXAIawBDB+JQDy4/ISwBByAugArt9PN/wPf/dQ+SWAThDr1ztQAuAAtTwBxl/d0gFqfQIkADnUMQDh2xeXACUAWVgCEL59cQlQApCFJQDh2xeXACUAWVgCEL59cQlQApCFJQDh2xeXACUAWVgCEL598ToB/gVk5De+2egiggAAAABJRU5ErkJggg=="
          alt=""
        />
        <h2 className="text-2xl font-bold">{address}</h2>
        <IoMdCopy
          size={24}
          className="cursor-pointer"
          color="#6151FF"
          onClick={() => {
            copyToClipboard(address);
          }}
        />
        <HiOutlineQrcode
          size={24}
          className="cursor-pointer"
          color="#6151FF"
          onClick={() => {
            openModal();
          }}
        />

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-gray-900"
                  >
                    {address}
                  </Dialog.Title>
                  <div className="my-10 flex justify-center">
                    <QRCode value={address} />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>

      <div className="flex gap-6">
        <div className="w-6/12 flex flex-col rounded-2xl shadow-md bg-white divide-y divide-gray-divider">
          <div className="px-5 py-3">
            <h4 className="text-md font-bold">Overview</h4>
          </div>
          <div className="px-5 py-3 grid grid-cols-4 gap-4 text-sm">
            <div className="text-gray-text font-bold my-3">Balance</div>
            <div className="col-span-3 my-3">0.309860</div>
            <div className="text-gray-text font-bold mb-3">Created at</div>
            <div className="col-span-3 mb-3">22 February 2021, 16:03:08</div>
            <div className="text-gray-text font-bold mb-3">Assets</div>
            <div className="col-span-3 mb-3 flex items-center gap-3">
              $5.87
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? '' : 'text-opacity-90'}
                text-primary group bg-[#0034B914] px-3 py-2 rounded-md inline-flex items-center text-xs font-bold hover:text-opacity-100`}
                    >
                      <span>5 Tokens</span>
                      <FiChevronDown
                        className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-4 w-4 text-primary group-hover:text-opacity-80 transition ease-in-out duration-150`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl">
                        <div className="overflow-hidden bg-white p-2 rounded-lg shadow-lg">
                          <div className="px-4 py-3 grid grid-cols-4 gap-4 text-sm text-gray-text font-bold">
                            <div></div>
                            <div>Amount</div>
                            <div>Price</div>
                            <div>Value</div>
                          </div>
                          {tokens.map((item, idx) => (
                            <div
                              key={idx}
                              className="px-4 py-3 grid grid-cols-4 gap-4 text-sm font-bold text-[#333333] items-center"
                            >
                              <div className="flex gap-2 items-center">
                                <img
                                  src={item.icon}
                                  className="w-5 h-5"
                                  alt=""
                                />
                                {item.name}
                              </div>
                              <div>{item.amount}</div>
                              <div>{item.price}</div>
                              <div>{item.value}</div>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </div>
        <div className="w-6/12 flex flex-col rounded-2xl shadow-md bg-white divide-y divide-gray-divider">
          <div className="px-5 py-3">
            <h4 className="text-md font-bold">More info</h4>
          </div>
          <div className="px-5 py-3 grid grid-cols-4 gap-4 text-sm">
            <div className="text-gray-text font-bold my-3">Not available</div>
            <div className="col-span-3 my-3"></div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={(idx: any) => {
            setSelectedIndex(idx);
          }}
        >
          <Tab.List className="flex max-w-min p-1 space-x-1 rounded-2xl bg-gray-background">
            {tabs.map((item: any) => (
              <Tab
                key={item.id}
                className={`py-4 px-6 whitespace-nowrap text-base leading-5 font-bold rounded-2xl
                    ${
                      tabs[selectedIndex]?.id === item.id
                        ? ' text-primary bg-white shadow-md'
                        : ' text-black '
                    }`}
              >
                {item.label}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-6 bg-gradient-gray-end">
            {tabs.map((item, idx) => (
              <Tab.Panel key={idx} className="w-full">
                {item.content}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Section>
  );
};
export default BlocksDetails;
