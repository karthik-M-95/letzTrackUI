// import logo from './logo.svg';
import Login from "./component/Login/Login";
import './App.css';
import Header from './component/Login/Header';
import SignIn from "./component/Login/SignIn";
import Footer from "./component/Login/Footer";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Main from "./component/Body/MainContent"
import AddModal from "./component/Body/AddModal"
import LandingPage from './component/Content/LandingPage';
import EventBody from "./component/Body/EventBody";


function App() {
  return (
    <>
    <BrowserRouter>
      <div>
      <Header />
        <Routes>
            <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<Login />}/>
              <Route path="register" element={<SignIn />} />
              <Route path="category" element={<Main />} />
                <Route path="/landing/:name/*" element={<EventBody/>}/> 
                <Route path="/addPlans/*" element={<AddModal />}/>           
          </Routes>
      </div>
    </BrowserRouter>


      {/* <Login /> */}
      {/* <SignIn /> */}
       {/*  <Header />
        <Main />
        <Footer />  */}

    </>
    // <div className="App">
    //   {/* <Header />
    //   <Login /> */}
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Header />}>
    //         <Route index element={<Login />}/>
    //         <Route path="register " element={<SignIn />}/>
    //         <Route path="Login" element={<Login />}/>
    //         {/* <Route path="contact" element={<ContactUs />}/> */}
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
