import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "Icons";

function Auth() {
  const user = {
    name: "Fırat Can Taş",
    avatar: "https://i.scdn.co/image/ab6775700000ee85d05d9c3d0ed1d99cea586d8f",
  };

  //Headless UI dan aldıgım dropdown a dışındakı Menu fragment oldugu ıcın nav gıbı davran dedıkten sonra class ataması yaptım

  //Dropdown için open ve close state ine göre ayarlamalar stillendirmeler yapabilirim.
  return (
    <Menu as={"nav"} className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl ${
              open ? "bg-active" : "bg-black"
            } hover:bg-active`}
          >
            <img
              src={user.avatar}
              alt="FFF"
              className="w-8 h-8 rounded-full p-0.5 mr-2"
            />
            <span className="text-sm font-semibold mr-2 pr-2">{user.name}</span>
            <span className={open && 'rotate-180'}>
                <Icon name={"downDir"} size={16} />
            </span>
           
          </Menu.Button>
          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 justify-between flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                  href="/"
                >
                  Account settings
                  <Icon name={"external"} size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                  href="/"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                  href="/"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
