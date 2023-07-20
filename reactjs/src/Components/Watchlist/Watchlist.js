
import DataTable from "react-data-table-component";
import "./Body.css";
import { useEffect, useState } from "react";


const Watchlist = () =>{

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
        ,cell: (row) =>  `$${row.current_price} `
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


    const [selectedData, setSelectedData] = useState([]);

    useEffect(() => {
        const selectedData = JSON.parse(localStorage.getItem('selectedData'));
        if (selectedData) {
            setSelectedData(selectedData);
        }
        }, []);



 

    return(
        <div className="table-container">
          <div>
                <h1>Your Watchlist</h1>
                <br />
                <br />
            </div>
            <DataTable
                minrows={5}
                columns={collumns}
                data={selectedData}
                fixedHeader
                pagination
            ></DataTable>
        </div>
    )
}

export default Watchlist;