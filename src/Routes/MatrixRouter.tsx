import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Templates/HomePage/Home";
import PageNotFound from "../Templates/PageNotFound/PageNotFound";
import Target from "../Templates/TargetPage/Target";


export default function MatrixRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Target/:myteam" element={<Target />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
