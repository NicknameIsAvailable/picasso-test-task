import {Routing} from "../pages";
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import Header from "../widgets/header/ui";
import {Container} from "@mui/joy";

const App = () => {

    return (

        <BrowserRouter>
            <Suspense fallback="Loading...">
                <Container>
                    <Header/>
                    <Routing/>
                </Container>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
