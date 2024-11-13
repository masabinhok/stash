'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navItems } from '@/constants';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import FileUploader from './FileUploader';
import { Button } from './ui/button';

interface Props {
  ownderId: string;
  accountId: string;
  fullName: string;
  email: string;
  avatar: string;
}

const MobileNavigation = ({
  ownerId,
  accoutnId,
  fullName,
  email,
  avatar,
}: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className='mobile-header'>
      <Image
        src='/assets/images/logo.png'
        alt='logo'
        width={160}
        height={50}
        className='h-auto '
      />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src='/assets/icons/menu.svg'
            alt='menu'
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent className='shad-sheet h-screen px-3'>
          <SheetHeader>
            <SheetTitle>
              <div className='header-user'>
                <Image
                  src={avatar}
                  alt='avatar'
                  className='header-user-avatar'
                  width={44}
                  height={44}
                />
                <div className='sm:hidden lg:block'>
                  <p className='subtitle-2 text-left capitalize '>{fullName}</p>
                  <p className='caption'>{email}</p>
                </div>
              </div>
              <Separator className='mb-4 bg-light-200/20' />
            </SheetTitle>
            <nav className='mobile-nav'>
              <ul className='mobile-nav-list '>
                {navItems.map(({ name, icon, url }) => (
                  <Link key={name} href={url} className='lg:w-full'>
                    <li
                      className={cn(
                        'mobile-nav-item',
                        pathname === url && 'shad-active'
                      )}
                    >
                      <Image
                        className={cn(
                          'nav-icon',
                          pathname === url && 'nav-icon-active'
                        )}
                        src={icon}
                        alt={name}
                        width={24}
                        height={24}
                      />
                      <p>{name}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>

            <Separator className='my-5 bg-light-200/20' />

            <div className='flex flex-col justify-between gap-5'>
              <FileUploader />
              <Button
                onClick={() => {}}
                type='submit'
                className='mobile-sign-out-button'
              >
                <Image
                  src='/assets/icons/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
                <p>Logout</p>
              </Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
