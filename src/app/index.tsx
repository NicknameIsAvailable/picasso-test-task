import {Routing} from "../pages";
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";

const App = () => {

    return (

        <BrowserRouter>
            <Suspense fallback="Loading...">
                <Routing/>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
