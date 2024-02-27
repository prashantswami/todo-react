import TodoList from "../components/TodoList/TodoList";
import { Layout } from "../layouts/Layout";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Jobs } from "./Jobs";
import { PageNotFound } from "./PageNotFound";
import { Home } from "./Home";
import { CreateJob } from "../components/Job/CreateJob";
export function Main() {
    return <>
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
    </>
}