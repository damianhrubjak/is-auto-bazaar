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

export interface CustomerWhoBoughtCar {
    id: string;
    name: string;
    surname: string;
    id_vehicle: string;
    price: number;
    brand_vehicle: string;
    model_vehicle: string;
}

export interface SellerWhoNeverSoldCar {
    id: number;
    id_osoba: string;
    name: string;
    surname: string;
}

export interface GraphDataset {
    id: string;
    label: string;
    data: number[];
    hidden?: boolean;
    fill?: boolean;
    borderRadius?: number;
}

export interface VehicleInSpecificTime {
    vin: string;
    manufacturer_date: string;
    engine_capacity: number;
    engine_power: number;
    color: string;
    equipment: string;
    fuel: string;
    country: string;
    brand: string;
    model: string;
}

export interface AverageMaintenance {
    vin: string;
    count_od_days: number;
}

export interface Equipment {
    Exterier: string[];
    Extra: string[];
    Infotainment: string[];
    Interier: string[];
}
