import React from "react";
import './index.css';
import { Button } from "antd";
import { DollarCircleOutlined, KeyOutlined, ShareAltOutlined } from "@ant-design/icons";

const MainTitle = () => {
    return (
        <section className="main-title">
            <h2>Welcome back, Ashwani</h2>
            <div className="main-title__buttons">
                <Button type="default"><DollarCircleOutlined/> Request Payout</Button>
                <Button type="default"><ShareAltOutlined/> Share Matrices</Button>
                <Button type="default"><KeyOutlined /></Button>
            </div>
        </section>
    )
}

export default MainTitle;