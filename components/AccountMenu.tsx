import { signOut } from "next-auth/react";
import Image from "next/image";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu = ({ visible }: AccountMenuProps) => {
  if (!visible) return null;

  const handleLogout = (e: any) => {
    e.preventDefault();

    signOut();
  };

  return (
    <div className="flex flex-col bg-black w-56 absolute top-14 right-0 py-5 border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="flex px-3 group/item gap-3 items-center w-full">
          <Image
            src="/images/profiles-blue.png"
            alt="Profile image"
            width={26}
            height={26}
            className="rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline">
            Username
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={handleLogout}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Jonnyflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
