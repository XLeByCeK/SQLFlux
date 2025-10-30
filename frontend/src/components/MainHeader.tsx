import React from "react";
import logo from 'D:/SQLFlux/SQLFlux/frontend/src/assets/Logo.png';
import { Button, ConfigProvider} from 'antd';
import '../styles/App.css';



const MainHeader = () => {

    return(

        <ConfigProvider>

        <header>

                <img className="Logo" src={logo} alt="SQLFlux Logo" />

                <p className="HeadLiner">SQLFlux</p>

                <Button className="LogInBtn" color="default" variant="text" size="large">
                    Log in
                </Button>

        </header>

        </ConfigProvider>
        
    )
}

export default MainHeader;
