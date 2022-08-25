import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.less'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}


export default App;

// const App = () =>{


//   return (
//     // <Suspense fallback={<span>loading</span>}>
//         <Routes>
//           <Route key="/home" path='/home' element={<Home/>}></Route>
//           <Route key="/about" path='/about' element={<About/>}></Route>
//           <Route key="/404" path='/404' element={<NotFound/>}></Route>
//         </Routes>
//     // </Suspense>
//     // <div className="App">
//     //   <div>
//     //     <a href="https://vitejs.dev" target="_blank">
//     //       <img src="/vite.svg" className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://reactjs.org" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <Button type="primary" onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </Button>
//     //     <p>
//     //       Edit <code>src/App.tsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </div>
//   )
// }

// export default App
