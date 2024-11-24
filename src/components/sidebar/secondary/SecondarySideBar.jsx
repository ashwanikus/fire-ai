import React from "react";
import './index.css';

const SecondarySideBar = () => {
    return (
        <section className="secondary-sidebar">
            <ul>
                <li><span>Account:</span><span>0x1234567890</span></li>
                <li><span>Status:</span><span>Active</span></li>
                <li><span>Program:</span><span>$50000</span></li>
            </ul>
        </section>
    )
}


export default SecondarySideBar;