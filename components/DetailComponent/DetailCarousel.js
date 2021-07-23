import React, {useEffect, useState} from 'react';
import {Carousel} from 'antd';
import {CommonNetworkCall} from "../../utils/NetworkCall";

// endpoint https://60db0397801dcb0017290d6c.mockapi.io/invoker/v1/product-images/1
export default function DetailCarousel(props) {
    const [images, setImage] = useState([])

    useEffect(()=> {
        getImages()
    },[])

    async function getImages(){
        const data = await CommonNetworkCall("product-images/1","get")
        if(data) setImage(data.images)
    }

    return (
        <Carousel className={"detailProductImage"}>
            {images.map((item, i) => (
                <img  src={item} />
            ))}
        </Carousel>
    );
}
