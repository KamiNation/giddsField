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
        title: "PACKING"
    },
    {
        title: "SCREENING"
    },
    {
        title: "METAL DETECTION"
    },
    {
        title: "AIRCRAFT PALLET BUILDING"
    },
    {
        title: "FROZEN BLAST"
    },
    {
        title: "RELABLING"
    },
]



export const portfolioAboutMap: aboutmap[] = [
    {
        img: "/af.jpg",
        title: "Air Freight"
    },
    {
        img: "/of.jpg",
        title: "Ocean Freight"
    },
    {
        img: "/candf.jpg",
        title: "Clearing & Forwarding"
    }
]



export interface experiencemap {
    title?: string
    desc?: string
    icon?: ReactElement<any>

}

export const portfolioExperienceSW: experiencemap[] = [
    {
        title: "Our Mission",
        desc: "To be the clearing and forwarding company of choice in east Africa as well as provide a complete package of logistics services though our global network of partners."
    },
    {
        title: "Our Vision",
        desc: "To offer a single-source solution to and from any point worldwide keeping our clients informed of their shipment status at every step.",
    },
]


export const missionVision: experiencemap[] = [
    {
        icon: <AnimatedSettingsIcon />,
        title: "Our Mission",
        desc: "To be the clearing and forwarding company of choice in east Africa as well as provide a complete package of logistics services though our global network of partners.",
    },
    {
        icon: <AnimatedBulb />,
        title: "Our Vision",
        desc: "To offer a single-source solution to and from any point worldwide keeping our clients informed of their shipment status at every step.",
    },
]

const location1 = "Suite A2, Sahco Export Shed/Warehouse, Nahco";
const location2 = "Cargo & Pilgrimage, Hajj Camp, MMI, Ikeja";

const del1 = "Inter-State Delivery: 3-5 working days.";
const del2 = "Int'l Delivery: 6-8 working days"


const num1 = "+23470035751981"
const num2 = "+2348126693296"



export const contactUs: experiencemap[] = [
    {
        icon: <AnimatedAddressIcon />,
        title: "Physical Address​",
        desc: `${location1} \n ${location2}`
    },
    {
        icon: <AnimatedTimeIcon />,
        title: "Work Hours",
        desc: `${del1} \n ${del2}`,
    },
    {
        icon: <AnimatedEmailIcon />,
        title: "Email Address",
        desc: "contactUs@gmail.com",
    },
    {
        icon: <AnimatedPhoneIcon />,
        title: "Phone Numbers",
        desc: `${num1} \n ${num2}`,
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

