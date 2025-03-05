// import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactElement } from "react";
import { BiRotateRight } from "react-icons/bi";
import AnimatedSettingsIcon, { AnimatedAddressIcon, AnimatedBulb, AnimatedEmailIcon, AnimatedPhoneIcon, AnimatedTimeIcon } from "../components/FramerAnimation";



export interface contactMap {
    whatsapp?: boolean
}
export interface aboutmap {
    icon?: ReactElement<any>
    desc?: string
    year?: string
    skill?: string
    title?: string
    img: string

}

export const wareHouseMap: experiencemap[] = [
    {
        title: "CLEARANCE AND DELIVERY"
    },
    {
        title: "WAREHOUSING "
    },
    {
        title: "SEA FREIGHT (DTP | DTD)"
    },
    {
        title: "AIR FREIGHT (DTP | DTD)"
    },
    {
        title: "SHOP AND SHIP DELIVERY"
    },
    {
        title: "HAULAGE DELIVERY"
    },
]



export const portfolioAboutMap: aboutmap[] = [
    {
        img: "/afff.jpg",
        title: "Air Freight"
    },
    {
        img: "/offf.jpg",
        title: "Ocean Freight"
    },
    {
        img: "/nacho7.jpg",
        title: "Clearing & Forwarding"
    }
]



export interface experiencemap {
    id?: number,
    title?: string
    desc?: string
    icon?: ReactElement<any>

}

export const portfolioExperienceSW: experiencemap[] = [
    {
        title: "Our Mission",
        desc: "Our mission is to become the premier logistics in Africa, delivering exceptional cargo handling and transportation solutions. By leveraging a vast global network of reliable partners, we aim to offer comprehensive, seamless services that streamline supply chains, ensure on-time delivery, and meet the unique needs of our clients, both regionally and internationally."
    },
    {
        title: "Our Vision",
        desc: "To be the go-to provider for integrated logistics solutions, connecting every corner of the globe. We strive to offer our clients seamless, end-to-end shipment tracking and exceptional service, ensuring our clients are always informed and confident in the timely delivery of their goods.",
    },
]


export const missionVision: experiencemap[] = [
    {
        icon: <AnimatedSettingsIcon />,
        title: "Our Mission",
        desc: "Our mission is to become the premier logistics in Africa, delivering exceptional cargo handling and transportation solutions. By leveraging a vast global network of reliable partners, we aim to offer comprehensive, seamless services that streamline supply chains, ensure on-time delivery, and meet the unique needs of our clients, both regionally and internationally.",
    },
    {
        icon: <AnimatedBulb />,
        title: "Our Vision",
        desc: "To be the go-to provider for integrated logistics solutions, connecting every corner of the globe. We strive to offer our clients seamless, end-to-end shipment tracking and exceptional service, ensuring our clients are always informed and confident in the timely delivery of their goods.",
    },
]

const location1 = `Suite A2, Sahco Export Shed/Warehouse, Nahco.`;
const location2 = "Cargo & Pilgrimage, Hajj Camp, MMI, Ikeja.";

const del1 = "Inter-State Delivery: 3-5 working days.";
const del2 = "Int'l Delivery: 6-8 working days"


const num1 = "+2347035751981"
const num2 = "+2348126693296"

const email1 = "giddsfield@gmail.com"
const email2 = "geniusgidds@gmail.com"



export const contactUs: experiencemap[] = [
    {
        icon: <AnimatedAddressIcon />,
        title: "Physical Address​",
        desc: `${location1} \n \n ${location2}`,
        id: 1,
    },
    {
        icon: <AnimatedTimeIcon />,
        title: "Work Hours",
        desc: `${del1} \n \n ${del2}`,
        id:2,
    },
    {
        icon: <AnimatedEmailIcon />,
        title: "Email Address",
        desc: `${email1} \n \n ${email2}` ,
        id: 3,
    },
    {
        icon: <AnimatedPhoneIcon />,
        title: "Phone Numbers",
        desc: `${num1} \n \n \n ${num2}`,
        id:4,
    },
]


export interface contactmap {
    id?: number
    title?: string
    desc?:
    {
        addr: string
        addr1: string
        addr2: string
        Tell: string
        Tell2: string
        Tell3: string
        Email: string
    }

    parent?: string
    child?: string
    child1?: string
    child2?: string
    child3?: string
    child4?: string
    child5?: string
    child6?: string

}



export const portfolioContactMap: contactmap[] = [


    {
        parent: "Quick Links",
        child: "About Us",
        child1: "Services",
        child2: "Contacts",
        child3: "Catalogue",
    },
    {
        parent: "Services",
        child: "Air Freight",
        child1: "Ocean Freight",
        child2: "Clearing & Forwarding",
    },
    {
        parent: "Important Links",
        child: "Privacy Policy",
        child1: "Cookies Policy",
        child2: "Terms & Conditions",
    },
]

