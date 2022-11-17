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
