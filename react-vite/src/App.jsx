import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} /> */}



          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page in Deveploment!</p>
              </main>
            }
          />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;