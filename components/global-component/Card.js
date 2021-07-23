import React, {useEffect, useState} from 'react';
import { Card, Rate } from 'antd';
import {CommonNetworkCall} from "../../utils/NetworkCall";

export default function CardComponent(props) {
    const { image, title, category, description, rating, allowHalfRate, countRating } = props;
    const [images, setImage] = useState([])
    useEffect(()=> {
        getImages()
    },[])

    async function getImages(){
        const data = await CommonNetworkCall("product-images/1","get")
        if(data) setImage(data.images)
    }
    return(
        <div className={"cardComponent"}>
            <img src={images} />
            <Card>
                <label>{title}</label>
                <label>{category}</label>
                <p>{description}</p>
                <Rate allowHalf={allowHalfRate} defaultValue={rating}/>
                <label>({countRating} reviews)</label>
            </Card>
        </div>

    )
}
