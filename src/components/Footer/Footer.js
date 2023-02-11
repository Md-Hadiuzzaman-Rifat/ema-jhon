import React from 'react';
import "./Footer.css";

const Footer = ({totalPage,handlePage,selectedPage}) => {
    return (
        <div>
            {
                
                [...Array(totalPage).keys()].map((data)=> <button className={selectedPage===data?"footer-btn-selected":"footer-btn"} key={data} onClick={()=>handlePage(data)}>{data+1}</button> )
            }
        </div>
    );
};

export default Footer;