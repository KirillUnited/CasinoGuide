import React from 'react';
import "./offers.scss";
import Card from "../card/card";
import { offers } from "../../data";
import titleIcon from "../../images/icon_12.svg";

const Offers = ({theme}) => {
    return (
        <section id="offers" className='vw-section offers' data-theme={theme}>
            <div className='vw-container'>
                <div className='offers-inner'>
                    <div className='offers-main'>
                        <Card theme={theme} type="card-primary" bg={`url("./BestOfferBG.png")`} image={`./offers/image 10.png`} title={offers["Best offer"].title} rating={offers["Best offer"].rating} info={offers["Best offer"].info} />
                    </div>
                    <div className='offers-list'>
                        <h5 className='offers-list-title'>
                            <img  width={20} height={20} src={titleIcon} alt="Top Casinos" />
                            <span>Top Casinos</span>
                        </h5>
                        <div className='offers-list-grid'>
                            {offers["Top offers"].map(({ color, title, rating, info }, index) => {
                                return <Card image={`./offers/image ${index + 4}.png`} index={index + 2} color={color} title={title} rating={rating} info={info} key={index}/>
                            })}
                        </div>
                    </div>
                    <div className='offers-list'>
                        <div className='offers-list-grid'>
                            {offers["Offers"].map(({ color, title, rating, info }, index) => {
                                return <Card image={`./offers/image ${index + 7}.png`} index={index + 5} color={color} title={title} rating={rating} info={info} key={index}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers;
