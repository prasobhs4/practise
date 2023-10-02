// import logo from "./logo.svg";
// import "./App.css";
// import RenderProps from "./RenderProps/RenderProps";
// import Input from "./customHooks/Input";
// import { createContext, lazy, useState } from "react";
// import Ref from "./hooks/context/Ref";
// import Debounce from "./ApiTesting/Debounce";
// import Test from "./ApiTesting/Test";
// import Dropdown from "./ApiTesting/Dropdown";
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   useLocation,
//   useNavigate,
//   useParams,
// } from "react-router-dom";
// import RouterComponent from "./Router/router";

// // import Api from "./ApiTesting/Api";

// const Api = lazy(() => import("./ApiTesting/Api"));

// //UseContext hook - create , provide and use
// export const MoodContext = createContext(null);

// function App() {
//   const [input, setInput] = useState("");

//   let location = useLocation();
//   let navigate = useNavigate();
//   let params = useParams();
//   console.log(location, navigate, params);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>learn react</h1>
//         <button onClick={() => navigate("/router")}>Click me!</button>
//         <Routes>
//           <Route path="/router" element={<RouterComponent />} />
//         </Routes>
//         {/* <Api /> */}
//         <input type="text" onChange={(e) => setInput(e.target.value)} />
//         <Ref />
//         <MoodContext.Provider value={input}>
//           <RenderProps></RenderProps>
//           <Input />
//           <Debounce />
//           <br />
//           <Test />
//           <br />
//           <br />
//           <br />
//           <Dropdown />
//           <br />
//           <br />
//           <br />
//         </MoodContext.Provider>
//       </header>
//     </div>
//   );
// }

// export default App;
