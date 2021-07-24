import React, { useEffect, useState} from 'react';
import Card from '../components/global-component/Card';
import DetailCarousel from "../components/DetailComponent/DetailCarousel";
import {CommonNetworkCall} from "../utils/NetworkCall";

export default function Home() {
    const [images, setImage] = useState([])

    useEffect(()=> {
        getImages().then(r => r);
    },[]);

    async function getImages(){
        const data = await CommonNetworkCall("product-images/1","get")
        if(data) {
            setImage(data.images)
        }
    }
    return (
        <div>
          <p>Otniel Victory Febe Anwar</p>
          <p>Use this page as index or home of your website</p>
            {images.map((item, number) => (
                <Card title={'Jurusan TI Polinema'} category={'Kampus - Jurusan'} description={'Lorem ipsum'} rating={2.5} allowHalfRate countRating={102} image={item}/>
            ))}

            <DetailCarousel/>
        </div>
    );
}
