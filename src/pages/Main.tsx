import TodoList from "../components/TodoList/TodoList";
import { Layout } from "../layouts/Layout";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Jobs } from "./Jobs";
import { PageNotFound } from "./PageNotFound";
import { Home } from "./Home";
import { CreateJob } from "../components/Job/CreateJob";
import { ThemeContextProvider, useTheme } from "../context/ThemeContextProvider";
import { useEffect, useState } from "react";
export function Main() {

    const [themeMode, setThemeMode] = useState('light');

    const setTheme = function (value: any) {
        setThemeMode(value);
    }

    useEffect(() => {
        let val = 0;
        setInterval(() => {
            val += 1;
            setTheme('light' + val);
        }, 1000)
    }, [])
    
    return <>
    <ThemeContextProvider value={{themeMode, setTheme}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="todo-list" element={<TodoList />} />
                    <Route path="jobs" element={<Jobs />} />
                    <Route path="jobs/new" element={<CreateJob />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </ThemeContextProvider>
    </>
}