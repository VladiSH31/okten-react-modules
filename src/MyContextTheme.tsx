import {createContext} from "react";

type MyContextThemeType = {
    theme: string,
    changeTheme: (theme: string) => void
}

const defaultValue: MyContextThemeType = {
    theme: 'Light',
    changeTheme: (theme: string) => {
        console.log(theme);
    }
};
export const MyContextTheme =createContext<MyContextThemeType>(defaultValue)