import { useTheme } from "../context/ThemeContextProvider"

export function Home() {
    const {themeMode}= useTheme();
    return <>
        <h1>Welcome Home! {themeMode}</h1>
    </>
}