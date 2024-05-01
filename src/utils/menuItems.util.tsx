import React, {ReactComponentElement} from "react";
import {FcCustomerSupport} from "react-icons/fc";
import {CgViewList} from "react-icons/cg";
import {GrWheelchairActive} from "react-icons/gr";
import {RiBlurOffLine} from "react-icons/ri";
import {HiStatusOffline, HiStatusOnline} from "react-icons/hi";
import {MdOpenInNew} from "react-icons/md";

export type MenuItem = {
    title: string,
    key: string,
    icon: ReactComponentElement<any>,
    level: 1|2|3,
    children?: MenuItem[]
}

const items: MenuItem[] = [{
    title: 'مشتری',
    key: 'customer',
    level: 1,
    icon: <FcCustomerSupport/>,
    children: [
        {
            title: 'فهرست مشتری ها',
            key: 'customerList',
            level:2,
            icon: <CgViewList/>,
            children: [{
                title: "مشتری های غیر فعال",
                key: "customerListActive",
                level: 3,
                icon: <HiStatusOnline/>
            }, {
                title: "مشتری های غیر فعال",
                key: "customerListNonActive",
                level: 3,
                icon: <HiStatusOffline/>
            },]
        },
        {
            title: "تعریف مشتری",
            key: 'customerEdit',
            level:2,
            icon: <MdOpenInNew/>
        }
    ]
}];


export {items}