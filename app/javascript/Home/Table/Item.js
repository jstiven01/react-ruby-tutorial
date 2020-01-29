import React from 'react';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

const Button = styled.a`
        display: inline-block;
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0;
        background: #fff !important;
        color: #333 !important;
        padding: 10px 20px;
        font-size: 18px;
        box-shadow: 0px 0px 0px 3px #473228,
            -6px 6px #ef5f17,
            -6px 6px 0px 3px #473228;
         `


const Item = ({id, title, desc, handlerVideoChange}) => {

    const handleClickEvent = (event)=> {
        handlerVideoChange(id, event);
    }
    return(
        <div className="row">
        <div className="col-md-10 offset-md-1">
            <div className="text-center">
                <div className="card px-5">
                    <div className="row">
                        <div className="col-md-4">
                        <Thumbnail />
                        </div>
                        <div className="col-md-8">
                            <div className="pt-4 pb-4">
                            <h4>{title}</h4>
                            <p>{desc}</p>
                            <div className="cta-wrapper">
                            <Button className="btn cta-btn" onClick={handleClickEvent}>Watch this Video</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    )
}

export default Item;