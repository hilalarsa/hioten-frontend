import React, {useEffect, useState} from 'react';
import {Card, Carousel, Divider, Rate} from 'antd';
import {CommonNetworkCall} from "../../utils/NetworkCall";
import Avatar from "antd/lib/avatar/avatar";
import moment from "moment";

// endpoint https://60db0397801dcb0017290d6c.mockapi.io/invoker/v1/product-images/1
export default function DetailBalasanNested(props) {

    useEffect(() => {
        getImages()
    }, [])

    async function getImages() {

    }

    return (
        <div className={"margin-left-16 margin-btm-16"}>
            <span className={"grey font-12 flex"}>
                <b>Daniel</b>
                <p className={"right"}>{moment().startOf('hour').fromNow()}</p>
            </span>
            <p>ndihwad ud aidadhawd aod awydadaiudaddahdadaudadad uawd aud auda awud audaadwuadad adadadadad</p>

        </div>
    );
}
