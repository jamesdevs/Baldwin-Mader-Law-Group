import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { INFO } from '@/constants';
import navigations from '@/constants/navigations';
import socialLinks from '@/constants/socialLinks';
import formatPhone from '@/utils/formatPhone';
import {
  faBars,
  faBarsStaggered,
  faClose,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from '../image';
import { cn } from '@/utils';

const CustomSheetClose = (props: any) => {
  return (
    <SheetClose asChild {...props}>
      <FontAwesomeIcon
        icon={faClose}
        className="transition-all duration-300 text-xl cursor-pointer w-6 border-1 p-1 border-black top-4 right-4 absolute"
      />
    </SheetClose>
  );
};

const Sidebar = ({ isScrolled }: any) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <FontAwesomeIcon
          icon={faBars}
          className={cn(
            'transition-all duration-300 text-xl cursor-pointer w-6 text-white',
            isScrolled && 'text-black'
          )}
        />
      </SheetTrigger>
      <SheetContent className="sheetContent !overflow-auto">
        <SheetHeader className="mt-4">
          <SheetTitle className="text-left">
            <Link href="/" className="flex items-center gap-1">
              <Image
                className="h-10 xl:h-12 aspect-[500/134]"
                src="/logo5.png"
                alt="logo"
              />
            </Link>
          </SheetTitle>
          <SheetDescription className="text-xs md:text-sm text-left max-w-xs inline-flex mx-auto m-0">
            With over seven decades of collective expertise, Baldwin Mader Law
            Group specializes in recovering millions for defrauded investors.
            Contact us today to explore your options.
          </SheetDescription>
        </SheetHeader>
        <CustomSheetClose />
        <div className="flex flex-col py-8 gap-2">
          <h6 className="mb-2">Links</h6>

          {navigations.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-sm font-normal leading-6 text-gray-900">
              {item.title}
            </Link>
          ))}

          <div className="flex flex-col py-6">
            <h6 className="mb-4">Contact Us</h6>

            <ul className="flex flex-col gap-3">
              <Link
                href={`tel:${formatPhone(INFO.phone)}`}
                className="flex items-center gap-2 group"
                target="_blank">
                <div
                  className={`inline-flex font-bold items-center text-sm gap-2 justify-center`}>
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="w-4 text-primary shrink-0"
                  />
                </div>
                <p
                  className={` font-medium break-all text-sm transition-colors duration-300`}>
                  {INFO.phone}
                </p>
              </Link>

              <Link
                href={`mailto:${INFO.email}`}
                className="flex items-center gap-2 group"
                target="_blank">
                <div
                  className={`inline-flex font-semibold items-center text-sm gap-2 justify-center`}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-4 text-primary shrink-0"
                  />
                </div>
                <p
                  className={` font-medium break-all text-sm transition-colors duration-300`}>
                  {INFO.email}
                </p>
              </Link>

              <Link
                href={INFO.locationUrl}
                className="flex items-center gap-2 group"
                target="_blank">
                <div
                  className={`inline-flex font-semibold items-center text-sm gap-2 justify-center`}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 text-primary shrink-0"
                  />
                </div>
                <p
                  className={` font-medium break-all text-sm transition-colors duration-300`}>
                  {INFO.address}
                </p>
              </Link>
            </ul>
          </div>

          <div className="flex gap-2">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900 flex items-start gap-2"
                target="_blank">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-8 h-8 text-gray-500 border border-gray-300 p-1.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default Sidebar;
