import React from 'react'
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <browserRouter>
      <Routs>
        <Rout path='/' element={<Home />}>

        </Rout>
      </Routs>
    </browserRouter>
  </React.StrictMode>,
)
