import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./Body.css";
// import axios from "axios";

const Body = () =>{

    const collumns = [
        {
            name: '#',
            selector: row => row.market_cap_rank
            ,sortable: true
        },
        {
            name: 'Name',
            selector: row => row.name
            ,sortable: true
            ,cell: (row) => {return (
                <div>
                    <p>
                        <img className="symbol" src={row.image} width={35} alt="" />
                        {row.name}
                    </p>
                </div>
            )}
        },
        {
            name: 'Price',
            selector: row => row.current_price
            ,sortable: true
            ,cell: (row) => <div>${row.current_price}</div>
        },
        {
            name: '24h%',
            selector: row => row.price_change_24h
            ,sortable: true
            ,cell: row => {
                if (row.price_change_percentage_24h < 0) {
                  return (
                    <div className="minus">
                      {row.price_change_percentage_24h}%
                    </div>
                  );
                } else if (row.price_change_percentage_24h >= 0) {
                  return (
                    <div className="plus">
                      +{row.price_change_percentage_24h}%
                    </div>
                  );
                }
              }
        },
        {
            name: 'Market Cap',
            selector: row => row.market_cap     
            ,sortable: true
            ,cell: (row) => <div>${row.market_cap}</div>
        },
    ]

    

    const [fullData, setFullData] = useState([]);   

    const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1d';
    
    const fetchuser = async (url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            
            // const res = await axios.get(url);  
            
            // const data = await res.data;

            if (data.length > 0){
                setFullData(data);
            }

        }catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        let interval = setInterval(() => {
            fetchuser(API);
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    // useEffect(() => {
    //     fetchuser(API);
    // },[]);
    

    const [selectedData, setSelectedData] = useState();   

    const handleChange = (row) => {
        setSelectedData(row.selectedRows);
      };

      useEffect(() => {
        localStorage.setItem('selectedData', JSON.stringify(selectedData));
        }, [selectedData]);
 

    return(
        <div className="table-container">
            <div>
                <h1>Today's Cryptocurrency Prices by Market Cap</h1>
                <br />
                <br />
            </div>
            <DataTable
                minrows={5}
                columns={collumns}
                data={fullData}
                fixedHeader
                pagination
                selectableRows
                selectableRowsHighlight
                onSelectedRowsChange={handleChange}
            ></DataTable>
        </div>
    )
}


export default Body;