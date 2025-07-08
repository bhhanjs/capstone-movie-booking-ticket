import ImgForumCinema from "@/asset/header-footer/logo-fcn.svg";
import ImgLogoName from "@/asset/header-footer/logo-name.svg";
import ImgBgLight from "@/asset/bg.jpg";
import ImgForumFriend from "@/asset/header-footer/friends-vertical.svg";
import ImgDropDownIcon from "@/asset/header-footer/header-sankaku.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function AuthHeader() {
  return (
    <>
      <header
        className="py-5 px-2 md:px-6 bg-cover bg-center w-full h-full"
        style={{ backgroundImage: `url(${ImgBgLight})` }}
      >
        <div className="header__container section__container ">
          <div className="w-full flex justify-between items-center ">
            {/* header left */}
            <div className="header__left w-7/12 flex justify-start items-center md:gap-4 lg:gap-7">
              <a href="#" className="hidden md:inline-block img__hover">
                <img
                  src={ImgForumCinema}
                  alt="forum cinema image"
                  className="w-17 h-17 img__hover"
                />
              </a>
              <h1 className="w-42 md:min-w-9/12 lg:w-8/12">
                <a href="#" className="img__hover">
                  <img
                    src={ImgLogoName}
                    alt="logo name image"
                    className="w-full h-auto"
                  />
                </a>
              </h1>
            </div>

            {/* header right */}
            <div className="header__right flex justify-center items-center gap-2 md:gap-2.5">
              {/* friends forum */}
              <div className="hidden lg:inline-block">
                <a href="#" className="img__hover">
                  <img
                    src={ImgForumFriend}
                    alt="Forum friend image"
                    className="w-14 h-8 rounded-[4px] md:w-23 md:h-13 py-1 px-2 border-2 border-yama-main-green md:rounded-none"
                  />
                </a>
              </div>
              {/* tickets room */}
              <div>
                <a
                  href="#"
                  className="w-14 h-8 rounded-[4px] md:rounded-none md:w-23 md:h-13 inline-block text-center leading-8 md:leading-13 text-xs font-bold md:text-[12px] bg-yama-light-gray text-white img__hover"
                >
                  Tickets
                </a>
              </div>
              {/* account */}
              <div className="">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <a
                      href="#"
                      className="w-20 h-8 rounded-[4px] md:rounded-none md:w-35 md:h-13 leading-8 md:leading-13 text-[10px] md:text-[16px] font-light text-center border-yama-light-gray border-1 flex justify-center items-center gap-1 md:gap-2"
                    >
                      Account
                      <img
                        src={ImgDropDownIcon}
                        alt="drop down icon"
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                    </a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-10 md:w-md flex flex-col justify-center items-center gap-0.5 md:gap-2 py:2 px-3 md:py-5 md:px-6 rounded-none">
                    <DropdownMenuLabel className="text-sm md:text-xl text-yama-light-gray">
                      My Account
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="w-full">
                      <Button
                        className="w-full md:h-12 md:rounded-none bg-yama-main-green img__hover hover:bg-yama-main-green hover:opacity-70 transition-all duration-300 eas-[cubic-bezier(1,.4,.5,1)]"
                        size="sm"
                      >
                        Login
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="w-full">
                      <Button
                        className="w-full md:h-12 md:rounded-none bg-yama-light-gray hover:bg-yama-light-gray img__hover"
                        size="sm"
                      >
                        Sign up
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
