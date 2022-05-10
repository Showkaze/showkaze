import React from 'react'
import App from '../components/App'
import './index.css'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

fetch('https://jsonplaceholder.typicode.com/photos')
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        renderRoot(data);
      });

function renderRoot(events){
  console.log()
  const container = document.getElementById('root')
  const root = createRoot(container)
  root.render(<App events={events}  />);

}     



// ReactDOM.render(<App />, document.getElementById('root'));
