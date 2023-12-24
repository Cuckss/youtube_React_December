import React from "react";
import "./videoVertical.scss"
import { FaEye } from "react-icons/fa";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from "react-bootstrap";
const VideoVertical=()=>{
    const seconds = moment.duration('100').asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");
    return(
        <Row className="videoVertical m-1 py-2 align-items-center">
         <Col xs={6} md={4} className="videoVertical__left">
         <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" 
         className="videoVertical__Thumbnail"
        // wrapperClassName="videoVertical__thumbnail-wrapper"
        // effect="blur"
        />
            <span className="video__top__duration">{_duration}</span>
         </Col>
         <Col xs={6} md={8} className="videoVertical__right p-0">
            <p className="videoVertical__title mb-1">
                be a full stack developer in 10days.
            </p>
            <div className="videoVertical-details"> 
            <FaEye/> {numeral(10000).format("0.a")} Views •
               {moment(12-9-2023).fromNow()}
            </div>
            <div className="videoVertical__channel d-flex align-items-center my-1">
            {/* <LazyLoadImage src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" 
         className="videoVertical__Thumbnail"
         wrapperClassName="videoVertical__Thumbnail-wrapper"
         effect="blur"/> */}
               <p>backbencher coder</p>
            </div>
         </Col>
        </Row>
    )
}
export default VideoVertical;