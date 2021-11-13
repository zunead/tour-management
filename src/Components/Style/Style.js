import tw from 'twin.macro';

// *************** Navbar ********************
export const NavbarContainer = tw.nav`capitalize  flex justify-between items-center h-16 font-sans`;

export const NavbarUl = tw.ul`text-white text-center md:flex hidden`;
export const NavbarLi = tw.li`flex items-center `;

export const SocialMediaUl = tw.ul`md:flex text-white text-center hidden`;
export const SocialMediaLi = tw.li`transition-all duration-500 hover:text-gray-800 pr-5`;

export const NavbarLogo = tw.strong`uppercase text-gray-200 font-bold  md:font-bold md:text-xl`;

export const NavbarToggle = tw.div`px-4 cursor-pointer md:hidden`;
export const NavbarToggleContainer = tw.div`grid grid-rows-4  items-center text-white pb-10`;

// *************** Bottom bar ********************
export const BottomContainer = tw.div`md:hidden bottom-0 left-0 right-0 fixed z-50 flex justify-center items-center w-full`;
export const BottomBtnContainer = tw.div`relative flex-1 items-center flex justify-center `;
export const BottomBtn= tw.button`w-10 h-10 hover:bg-red-600 px-1 text-white`;

// *************** Header section ********************
export const HeaderContainer = tw.div`grid md:grid-cols-2 grid-cols-1 p-10 `;
export const HeaderLeftContent = tw.div`uppercase text-white `;
export const HeaderSpan = tw.span`text-xl font-extrabold `;
export const HeaderTitle = tw.h1`tracking-tighter text-gray-50 text-6xl font-extrabold py-3`;

export const HeaderTitleSpan = tw.span`tracking-tighter capitalize text-gray-50 text-5xl font-extrabold`;

export const HeaderRightContent = tw.div``;
// *************** Header section Location ********************

export const LocationContainer = tw.div`w-8/12 flex justify-between items-center`;
export const Location = tw.div`flex justify-between items-center`;

// *************** Header section countdown ********************

export const CountdownContainer = tw.div`py-8`;
export const CountdownTitle = tw.h4`capitalize  text-lg font-bold pl-8`;
export const CountdownTimerContainer = tw.div`flex mt-2 text-center text-red-400 `;
export const CountdownTimer = tw.div`flex-1`;
export const CountdownTime = tw.h4`text-6xl font-bold items-center uppercase`;
export const CountdownTimerTitle = tw.p`font-semibold text-gray-400`;
