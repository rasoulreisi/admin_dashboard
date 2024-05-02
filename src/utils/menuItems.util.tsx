import React, { ReactComponentElement } from "react";
import { FcCustomerSupport } from "react-icons/fc";
import { CgViewList } from "react-icons/cg";
import { HiStatusOffline, HiStatusOnline } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";
import { PATHS } from "../routes/Paths";

export type MenuItem = {
  title: string;
  key: string;
  icon: ReactComponentElement<any>;
  level: 1 | 2 | 3;
  path?: string;
  children?: MenuItem[];
};

const items: MenuItem[] = [
  {
    title: "مشتری",
    key: "customer",
    level: 1,
    icon: <FcCustomerSupport />,
    children: [
      {
        title: "فهرست مشتری ها",
        key: "customerList",
        level: 2,
        icon: <CgViewList />,
        children: [
          {
            title: "مشتری های غیر فعال",
            key: "customerListActive",
            level: 3,
            icon: <HiStatusOnline />,
          },
          {
            title: "مشتری های غیر فعال",
            key: "customerListNonActive",
            level: 3,
            icon: <HiStatusOffline />,
          },
        ],
      },
      {
        title: "تعریف مشتری",
        key: "customerEdit",
        level: 2,
        path: PATHS.EDIT_CUSTOMER,
        icon: <MdOpenInNew />,
      },
    ],
  },
];

export { items };
