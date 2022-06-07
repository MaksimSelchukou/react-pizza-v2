import './scss/app.scss'
import {Header} from "./components/Header";
import {Homepage} from "./pages/Homepage";
import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Cartpage} from "./pages/Cartpage";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                        <Route path='/cart' element={<Cartpage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
