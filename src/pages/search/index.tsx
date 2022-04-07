import Link from 'next/link';
import { useRouter } from 'next/router';

import { Section } from '@components/layout';
import { Search } from '@components/search';

const SearchResult = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <Section className="flex flex-col justify-center gap-8">
      <h1 className="text-3xl font-bold text-center">Search not found</h1>
      <p className="text-sm font-medium text-center">
        Oops! The search string you entered was:{' '}
        <span className="font-bold">&quot;{q}&quot;</span>
        <br />
        Sorry! This is an invalid search string.
      </p>

      <Search />

      <div className="text-center">
        <button className="text-primary text-sm font-bold rounded-full bg-gradient-to-r from-gradient-gray-start to-gradient-gray-end px-5 py-3">
          Retry
        </button>
      </div>

      <p className="text-sm font-medium text-center">
        If you think this is a problem with us, please{' '}
        <Link href={`/contact-us`} passHref>
          <a className="text-primary">tell us</a>
        </Link>
        .
      </p>
    </Section>
  );
};

export default SearchResult;
