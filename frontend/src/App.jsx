
import './App.css'
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import axios from 'axios'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};




function App(){
   // Here Will be according to the dates 
   const [labels,setlabels] = useState([])
   const [active,setactive] = useState([])
   const [inactive,setinactive] = useState([])
   useEffect(()=>{
    axios.get('http://localhost:8000/').then((result)=>{
      console.log(result)

      let test_tabel = []
      let active_data = []
      let inactive_Data = []

      const test = Object.keys(result.data).forEach((key)=>{

      

        
        
        if (result.data[key].active == 0 && result.data[key].inactive == 0 ){
        }
        else{
          test_tabel.push(key)
        active_data.push(result.data[key].active)
        inactive_Data.push(result.data[key].inactive)
        }



      })

      setlabels(test_tabel)
      setactive(active_data)
      setinactive(inactive_Data)

      


    })
   },[])


const data = {
  labels,
  datasets: [
    {
      label: 'active',
      data: active,
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Inactive',
      data: inactive,
      backgroundColor: 'rgb(75, 192, 192)',
    },

  ],
};


  
  return(
    <>
    <Bar options={options} data={data} />
    </>

  )
  
 
}

export default App



