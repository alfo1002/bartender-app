import { BrowserRouter, Routes, Route } from "react-router-dom"
import { IndexPage } from "./views/indexPage"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    )
}
