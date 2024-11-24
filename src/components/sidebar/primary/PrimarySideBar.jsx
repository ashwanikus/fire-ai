import React from "react";
import './index.css';
import { AppstoreOutlined } from "@ant-design/icons";

const PrimarySideBar = ()=> {
    return (
        <div className="primary-sidebar">
            <h2>Menu</h2>
            <nav>
                <ul>
                <li><AppstoreOutlined />Accounts Overview</li>
                <li>Payouts</li>
                <li>Certificates</li>
                <li>Leaderboard</li>
                <li>Order List</li>
                </ul>
            </nav>
        </div>  
    )
}


export default PrimarySideBar;