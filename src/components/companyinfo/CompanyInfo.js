
import logo from '../../assets/digital_wolf_logo.png'
import './companyinfo.css'
import React from 'react'

const CompanyInfo = ()=>{
    return (
        <div className="companyInfo">
            <img src={logo} className="logo" height="62px" alt="Logo"/>
            <h3 className="name">Digital Wolf</h3>
            <p className="address">DigitalWolf, 12840 Pennybridge Dr Bridgeton, Missouri, California, 63044, United States</p>
        </div>
    )
}

export default CompanyInfo;