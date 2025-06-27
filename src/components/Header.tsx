import NavigationLink from './NavigationLink';
import IconButton from './IconButton';
import UserProfileAvatar from './UserProfileAvatar';

// Define SVGs as React components for reusability and cleaner code
const LogoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
      fill="currentColor"
    ></path>
  </svg>
);

const SunIcon = () => (
  <div className="text-white" data-icon="Sun" data-size="20px" data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
      <path
        d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
      ></path>
    </svg>
  </div>
);

const BellIcon = () => (
  <div className="text-white" data-icon="Bell" data-size="20px" data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
      <path
        d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
      ></path>
    </svg>
  </div>
);

interface HeaderProps {
  userAvatarUrl: string;
  // Add any other props like onThemeToggle, onNotificationClick if functionality is added
}

const navItems = [
  { href: "#", text: "Dashboard" },
  { href: "#", text: "Content" },
  { href: "#", text: "Analytics" },
  { href: "#", text: "Comments" },
  { href: "#", text: "Subtitles" },
  { href: "#", text: "Copyright" },
];

const Header: React.FC<HeaderProps> = ({ userAvatarUrl }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#363636] px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <LogoIcon />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Shorts Analyzer</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {navItems.map((item) => (
            <NavigationLink key={item.text} href={item.href} text={item.text} />
          ))}
        </div>
        <div className="flex gap-2">
          <IconButton ariaLabel="Toggle theme">
            <SunIcon />
          </IconButton>
          <IconButton ariaLabel="View notifications">
            <BellIcon />
          </IconButton>
        </div>
        <UserProfileAvatar imageUrl={userAvatarUrl} altText="User Profile" size={40} />
      </div>
    </header>
  );
};

export default Header;
