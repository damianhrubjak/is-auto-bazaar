import { HomeIcon } from "@heroicons/react/24/solid";

const numberIconClasses =
    "h-8 w-8 rounded-md text-center text-xl font-bold text-fuchsia-500 transition duration-300 group-hover:text-black";
const navLinks = [
    {
        to: "/",
        text: "Domov",
        icon: (
            <HomeIcon className="w-8 fill-fuchsia-500 transition duration-300 group-hover:fill-black" />
        ),
    },
    {
        to: "most-used-maintenances",
        text: "Najpoužívanejšie údržby",
        icon: <span className={`${numberIconClasses}`}>1</span>,
    },
    {
        to: "employees-with-most-ads",
        text: "Najlepší predajcovia",
        icon: <span className={`${numberIconClasses}`}>2</span>,
    },
    {
        to: "show-vehicles-from-state",
        text: "Vozidla z danej krajiny",
        icon: <span className={`${numberIconClasses}`}>3</span>,
    },
    {
        to: "count-of-vehicles-for-every-state-and-brand",
        text: "Počet vozidiel pre daný štát a rok",
        icon: <span className={`${numberIconClasses}`}>4</span>,
    },
    {
        to: "top-three-employees-for-every-maintenance",
        text: "Top traja zamestnanci pre každú údržbu",
        icon: <span className={`${numberIconClasses}`}>5</span>,
    },
    {
        to: "customers-who-bought-car",
        text: "Zákazníci, čo si kúpili danú značku za danú cenu",
        icon: <span className={`${numberIconClasses}`}>6</span>,
    },
    {
        to: "sellers-who-never-sold-car",
        text: "Predajcovia, ktorí nikdy nepredali auto",
        icon: <span className={`${numberIconClasses}`}>7</span>,
    },
    {
        to: "vehicles-in-specific-time",
        text: "Predané vozidlá v zadanom intervale",
        icon: <span className={`${numberIconClasses}`}>8</span>,
    },
    {
        to: "count-of-electric-vehicles-from-countries",
        text: "Výpis krajín a počtov predaných áut poháňaných na elektriku",
        icon: <span className={`${numberIconClasses}`}>9</span>,
    },
    {
        to: "average-maintenance",
        text: "Priemerný počet dní v údržbe, pre každé vozidlo",
        icon: <span className={`${numberIconClasses}`}>10</span>,
    },
    {
        to: "peoples-who-bought-vehicle-in-given-time",
        text: "Zákazníci, ktorí si kúpili auto v danom mesiaci",
        icon: <span className={`${numberIconClasses}`}>11</span>,
    },
    {
        to: "random-equipment",
        text: "Náhodná výbava",
        icon: <span className={`${numberIconClasses}`}>12</span>,
    },
    {
        to: "images",
        text: "Všetky nahrané obrázky",
        icon: <span className={`${numberIconClasses}`}>13</span>,
    },
];
export default navLinks;
