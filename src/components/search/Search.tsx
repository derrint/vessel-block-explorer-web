import { FiSearch } from 'react-icons/fi';

import { DropdownMenu } from '@components/dropdown';

const Search = () => {
  const filters = [
    {
      id: 1,
      label: 'All filters',
      href: '/all',
    },
    {
      id: 2,
      label: 'Transaction',
      href: '/trx',
    },
    {
      id: 3,
      label: 'Block',
      href: '/blocks',
    },
    {
      id: 4,
      label: 'Wallet Tx',
      href: '/wallet',
    },
  ];

  return (
    <div className="flex justify-center items-center text-center relative">
      <div className="border-x border-y border-gray-200 bg-white px-5 h-14 rounded-2xl text-sm focus-within:border-primary flex justify-start items-center shadow-md">
        <DropdownMenu
          title="All filters"
          items={filters}
          onChange={(v: any) => console.log(v)}
        />
        <input
          className="focus:outline-none ml-3 sm:w-72 font-medium"
          type="search"
          name="search"
          placeholder="Search transaction, block, wallet (tx)"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end h-14 w-16 rounded-2xl ml-3 shadow-md text-white"
      >
        <FiSearch size={20} />
      </button>
    </div>
  );
};

export { Search };
