import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";

import Series from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";
import Movies from "../containers/Movies";
import Detail from "../containers/Detail";
import SeriesDetail from "../containers/SeriesDetail";

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/Series" element={<Series />} />
                <Route path="/detalhe/:id" element={<Detail />} />
                <Route path="/serie/:id" element={<SeriesDetail />} />
                
            </Route>
        </Routes>
    )
}

export default Router