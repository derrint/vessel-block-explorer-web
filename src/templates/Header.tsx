import Image from 'next/image';

import { Background } from '@components/background';
import { DropdownMenu } from '@components/dropdown';
import { Section } from '@components/layout';
import { NavbarTwoColumns } from '@components/navigation/NavbarTwoColumns';
import Logo from '@images/logos/logo-vesselscan.png';

const Header = () => {
  const submenus = [
    {
      id: 1,
      label: 'Transactions',
      href: '/transactions',
    },
    {
      id: 2,
      label: 'Blocks',
      href: '/blocks',
    },
  ];

  return (
    <Background color="bg-white">
      <Section yPadding="py-6" isHeader>
        <NavbarTwoColumns
          logo={<Image src={Logo} alt="" height={33} width={164} />}
        >
          <li>
            <div className="text-right">
              <DropdownMenu
                title="Blockchain"
                items={submenus}
                onChange={(v: any) => console.log(v)}
              />
            </div>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
  );
};

export { Header };
