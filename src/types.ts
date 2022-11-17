import { ReactNode } from "react";

export interface NavigationLinkContentProps {
    content: ReactNode;
    icon: ReactNode;
}

export interface MostUsedMaintenance {
    pozicia: number;
    pocet: number;
    popis: string;
}

export interface EmployeeWithMostAds {
    rod_cislo: string;
    meno: string;
    priezvisko: string;
    pocet_predajov: number;
}

export interface CountOfVehicleForEveryStateAndBrand {
    year: number;
    brands: Brand[];
}

export interface Brand {
    brand: string;
    count: number;
}

export interface TopEmployee {
    id: number;
    description: string;
    name: string;
    last_name: string;
    count: number;
}
