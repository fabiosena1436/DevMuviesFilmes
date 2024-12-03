import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";

import Series from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";
import Movies from "../containers/Movies";
import Detail from "../containers/Detail";
import DetailSerie from "../containers/DetailSeries";

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/Series" element={<Series />} />
                <Route path="/detalhe/:id" element={<Detail />} />
                <Route path="/detalhe-serie/:id" element={<DetailSerie />} />
                
            </Route>
        </Routes>
    )
}

export default Router