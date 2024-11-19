import { ReactNode } from "react";

export type SearchType = {
    city: string;
    country: string;
}

export type Country = {
    code: string;
    name: string;
}

export type AlertProps = {
    children: ReactNode
}

export type FormProps = {
    fetchWeather:  (search: SearchType) => Promise<void>
}

export type Weather = {
    name: string 
    main: {
        temp: number
        temp_max: number
        temp_min: number
    }
} 

