import React, {useEffect, useState} from 'react';
import {Card} from "@material-ui/core";
import {Button, Col, Rate, Row, Upload} from "antd";
import Title from "antd/lib/typography/Title";
import GenerateStar from "../../../utils/GenerateStar";
import TextArea from "antd/lib/input/TextArea";
import HiotenButton from "../../../components/global-component/HiotenButton";
import DetailBalasan from "../../../components/DetailComponent/DetailBalasan";
import DetailCarousel from "../../../components/DetailComponent/DetailCarousel";

// endpoint https://60db0397801dcb0017290d6c.mockapi.io/invoker/v1/product-images/1
export default function Detail(props) {

    useEffect(() => {
        getImages()
    }, [])


    const [tanggapan, setTanggapan] = useState("")
    const [rate, setRate] = useState(0)

    async function getImages() {

    }

    function onChangeTanggapan(target) {
        setTanggapan(target.value)
    }

    function onChangeRate(value) {
        setRate(value)
    }

    return (
        <div className={"centeredItem whiteBackground"}>
            <div className={"max1280 margin-32"}>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <DetailCarousel/>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Card className={"padding-24"}>
                            <Title level={5}>Macbook Air M1 2020</Title>
                            <div className="flex">
                                {GenerateStar(4.4)}
                                <p className={"margin-left-8"}>(4.5) dari 234 rating</p>
                            </div>
                            <p>Just give me a reason To keep my heart beating Don't worry,
                                it's safe right here in my arms As the world falls apart around us All we can do is hold
                                on, hold on ake my hand And bring me back 'll risk everything if it's for you A whisper
                                into the night Telling me it's not my time and don't give up I've never stood up before
                                this time でも 譲れないもの 握ったこの手は離さない So stand up, stand up ust gotta keep it I wanna wake up,
                                wake up Just tell me how I can</p>
                            <p className="grey">Dimulai oleh : Admin</p>
                            <TextArea
                                value={tanggapan}
                                onChange={(e) => {
                                    onChangeTanggapan(e)
                                }}
                                placeholder="Tanggapanmu"
                                autoSize={{minRows: 3, maxRows: 5}}
                            />
                            <div>
                                <Rate onChange={(e) => onChangeRate(e)} value={rate}/>
                                <Upload {...props} className={"pointer margin-top-4 right flex"}>
                                    <img height={20} src="/icons/ic_camera_upload.png"/>
                                </Upload>
                            </div>
                            <HiotenButton className={"margin-top-16"} width="fullWidth" color="primary">Posting</HiotenButton>
                            <p className={"margin-top-32 grey"}>300 Tanggapan</p>
                            <DetailBalasan/>

                        </Card>
                    </Col>

                </Row>
            </div>
        </div>


    );
}
