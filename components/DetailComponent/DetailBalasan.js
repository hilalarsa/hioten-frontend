import React, {useEffect, useState} from 'react';
import {Card, Carousel, Rate} from 'antd';
import {CommonNetworkCall} from "../../utils/NetworkCall";
import Avatar from "antd/lib/avatar/avatar";

// endpoint https://60db0397801dcb0017290d6c.mockapi.io/invoker/v1/product-images/1
export default function DetailBalasan(props) {

    useEffect(() => {
        getImages()
    }, [])

    async function getImages() {

    }

    return (
        <div className={"outlined"}>
            <span className={"flex"}>
                <Avatar  className={"margin-right-8"} size="large"></Avatar>
                <div>
                    <p className={"grey font-12"}>Otniel Vic</p>
                    <Rate disabled defaultValue={4}/>
                    <p>ndihwad ud aidadhawd aod awydadaiudaddahdadaudadad uawd aud auda awud audaadwuadad adadadadadladadadadadj iwda diawadd awqudqd qhwdq duq dadjw aduwa duwad ad ad adwhq d iuajdjwaduhd uawd audiw qu uahjdka wd aiudh wqd awdj wquhdakw udowauwhduhqdhoauwhd qowudhoa uwh oqhduqhwelajdwiu heqjdowiuqoeqwuehquehqu uw euqeuqoejqojeoiqjeojq queoqeoiq eoiqj eoiq ejqehqiwdqqeqeqo oqoehque </p>
                </div>
            </span>

        </div>
    );
}
