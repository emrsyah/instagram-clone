import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative w-24 hidden lg:inline-grid cursor-pointer"
        onClick={()=>router.push('/')}>
          <Image
            src="https:/links.papareact.com/ocw"
            layout="fill"
            alt="Instagram logo"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer"
        onClick={()=>router.push('/')}>
          <Image
            src="https:/links.papareact.com/jjm"
            layout="fill"
            alt="Instagram logo"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search Input*/}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md">
            <div className="flex absolute inset-y-0 pl-3 items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm 
          border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn"
          onClick={()=>router.push('/')} />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full items-center flex justify-center text-white animate-pulse">
                  3
                </div>
              </div>
              <PlusCircleIcon 
              className="navBtn"
              onClick={()=>setOpen(value=>!value)} />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
