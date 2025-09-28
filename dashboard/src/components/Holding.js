import { useState } from 'react';
import React from 'react';
import {holdings} from '../data/data';    //     the data is coming form the data.js firstly now we will use the useState and useEffect instead 
import axios from "axios";
import { useEffect } from 'react';
import { VerticalGraph } from './verticalCharts';

const Holding =()=> {


// used to store the data 
    const [allHoldings,setAllHoldings]= useState([]);
// used to diaplay the data
    useEffect(()=>{
axios.get('http://localhost:3002/allHoldings').then((res)=>{
    setAllHoldings(res.data)
})
    },[]);


      const labels= allHoldings.map((subArray)=>subArray["name"])

      const data ={
        labels,
  datasets: [
    {
      label: 'Stock name',
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(2, 96, 248, 0.5)',
    },
        ]
      }

    
    return ( 
        <>
        <h3 className='title'>Holding ({allHoldings.length})</h3>
        <div className='order-table'>
            <table>
                <tr>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg. cost</th>
                    <th>LPT</th>
                    <th>Cur. val</th>
                    <th>P&L</th>
                    <th>Net chg.</th>
                    <th>Day chg.</th>
                </tr>

                {allHoldings.map((stock, index)=>{
                    const currValue= stock.price * stock.qty;
                    const isProfit=  currValue - (stock.avg * stock.qty)>=0.0;
                    const profClass = isProfit ? 'profit' : 'loss';
                    const dayClass = stock.isLoss ? 'loss' : 'profit';

                    return (
                    <tr key={index} >
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{currValue.toFixed(2)}</td>
                    <td className={profClass}>{(currValue-stock.avg * stock.qty).toFixed(2)}</td>
                    <td className={profClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                </tr>
)
                })}
            </table>
        </div>
        <div className='row'>
            <div className='col'>
                <h5>
                    29,875.<span>55</span>{ " "}
                </h5>
                <p>Total investment</p>
            </div>
            <div className='col'>
                <h5>
                    31,428.<span>95</span>{ " "}
                </h5>
                <p>Current value</p>
            </div>
            <div className='col'>
                <h5>
                    1,553.40.<span>(+5.20%)</span>{ " "}
                </h5>
                <p>P&L</p>
            </div>
        </div>

        <VerticalGraph data ={data}/>
        </>
     );
}

export default Holding;


// after setting up the database we need to use the useState and useEffect to fetch the data from the addPositions
// we need to download $ npm i axios