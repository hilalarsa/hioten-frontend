import React, {useEffect, useState} from 'react';
import DetailCarousel from "../../../components/global-component/DetailCarousel";
import {Card} from "@material-ui/core";
import {Col, Row} from "antd";
import Title from "antd/lib/typography/Title";
import GenerateStar from "../../../utils/GenerateStar";

// endpoint https://60db0397801dcb0017290d6c.mockapi.io/invoker/v1/product-images/1
export default function Detail(props) {

    useEffect(() => {
        getImages()
    }, [])

    async function getImages() {

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
                            {GenerateStar(4.4)}
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>


    );
}
