import React, { useEffect, useState} from 'react';
import { Input, Button } from 'antd';
import { IoNotificationsOutline as NotifIcon, IoExitOutline as LogoutIcon } from 'react-icons/io5';
import { CgProfile as ProfileIcon } from 'react-icons/cg';
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
            <div className={"cardComponent"}>
                <Input placeholder="review vaksin coronavac"/>
                <Button icon={<NotifIcon/>}/>
                <Button icon={<ProfileIcon/>}>Daniel</Button>
                <Button icon={<LogoutIcon/>}/>
            </div>
            <div className={"wrapperCard"}>
                <h1>Gabut ???</h1>
                {images.map((item, number) => (
                    <Card title={'Jurusan TI Polinema'} category={'Kampus - Jurusan'} description={'Lorem ipsum'} rating={2.5} allowHalfRate countRating={102} image={item}/>
                ))}
            </div>
            <DetailCarousel/>
        </div>
    );
}
