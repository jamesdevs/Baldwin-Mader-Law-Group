import { INFO } from '@/constants';
import navigations from '@/constants/navigations';
import socialLinks from '@/constants/socialLinks';
import { cn } from '@/utils';
import formatPhone from '@/utils/formatPhone';
import {
  faEnvelopeSquare,
  faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from '../image';
import Sidebar from './Sidebar';

const Header = ({ topHeader = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {topHeader && (
        <div
          className={`border-b-[1px] hidden lg:block py-3 lg:py-0 border-gray-100/20 bg-transparent w-full z-20 relative`}>
          <div className="container flex items-center justify-between gap-4">
            <ul className="flex items-center gap-y-4 sm:gap-y-4 gap-x-10 sm:gap-x-10 flex-wrap h-[45px]">
              <li>
                <Link
                  href={`tel:${formatPhone(INFO.phone)}`}
                  className="flex items-center gap-2 group"
                  target="_blank" rel='noreferrer'>
                  <span>
                    <FontAwesomeIcon
                      icon={faPhoneSquare}
                      className={`w-[1.05rem] text-white`}
                    />
                  </span>
                  <div className="flex flex-col">
                    <p
                      className={`text-white text-base group-hover:text-primary transition-colors duration-300 leading-tight`}>
                      {INFO.phone.replaceAll(')', '').replaceAll('(', '')}
                    </p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href={`mailto:${INFO.email}`}
                  className="flex items-center gap-2 group"
                  target="_blank" rel='noreferrer'>
                  <span>
                    <FontAwesomeIcon
                      icon={faEnvelopeSquare}
                      className={`w-[1.05rem] text-white`}
                    />
                  </span>
                  <div className="flex flex-col">
                    <p
                      className={`text-white text-base group-hover:text-primary transition-colors duration-300 leading-tight`}>
                      Email Us Here
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="flex gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm leading-6 flex items-start gap-2"
                  target="_blank" rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-[1.9rem] h-[1.9rem] text-white hover:text-primary duration-300 transition-all rounded-full p-1.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="sticky top-0 left-0 right-0 z-50 h-20">
        <header
          className={cn(
            'w-full bg-transparent top-0 transition-colors duration-300',
            isScrolled && 'bg-white/80 backdrop-blur-sm shadow-lg'
          )}>
          <nav className="container flex justify-between py-4 items-center">
            <div className="flex lg:flex-1">
              {/* <Link
                href="/"
                className={cn(
                  'py-2 text-white font-bold uppercase',
                  isScrolled && 'text-black'
                )}>
                <Image
                  className="h-10 xl:h-12 aspect-[500/134]"
                  imageClassName={cn(!isScrolled && 'invert')}
                  src="/logo5.png"
                  alt="logo"
                />
              </Link> */}
            </div>
            <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-8"></div>
            <div className="flex">
              <Sidebar isScrolled={isScrolled} />
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
