import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="border self-end border-gray-200 w-[100%] pb-[20px] mt-auto">
      <div className="px-[100px] mx-auto max-w-[1200px] flex items-center justify-between relative z-20 py-5">
        <Logo />

        <div className="w-[200px]">
          <p className="underElement uppercase text-[18px] font-semibold mb-16">
            Contacts
          </p>
          <p className="text-[12px]">Some address, some street, Some address, some street</p>
        </div>

        <div className="w-[200px]">
          <p className="underElement uppercase text-[18px] font-semibold mb-16">
            Info
          </p>
          <p className="text-[12px] mb-4">Terms of Service</p>
          <p className="text-[12px]">Privacy Statement</p>
        </div>

        <div className="w-[200px]">
          <p className="underElement uppercase text-[18px] font-semibold mb-16">
            Main
          </p>
          <p className="text-[12px] mb-4">Home</p>
          <p className="text-[12px]">Online booking</p>
        </div>
      </div>
    </footer>
  );
};
