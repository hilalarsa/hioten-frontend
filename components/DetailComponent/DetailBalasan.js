import React, {useEffect, useState} from 'react';
import {Card, Carousel, Divider, Input, Rate} from 'antd';
import {CommonNetworkCall} from "../../utils/NetworkCall";
import Avatar from "antd/lib/avatar/avatar";
import moment from "moment";
import DetailBalasanNested from "./DetailBalasanNested";
import TextArea from "antd/lib/input/TextArea";

// endpoint https://60db0397801dcb0017290d6c.mockapi.io/invoker/v1/product-images/1
export default function DetailBalasan(props) {

    const [showReply, setShowReply] = useState(false)

    useEffect(() => {
        getImages()
    }, [])

    async function getImages() {

    }

    return (
        <div className={"outlined"}>
            <span className={"grey font-12 flex"}>
                <p><b>Otniel Vic</b></p>
                <p className={"right"}>{moment().startOf('hour').fromNow()}</p>
            </span>
            <Rate disabled defaultValue={4}/>
            <p>ndihwad ud aidadhawd aod awydadaiudaddahdadaudadad uawd aud auda awud audaadwuadad adadadadadladadadadadj
                iwda diawadd awqudqd qhwdq duq dadjw aduwa duwad ad ad adwhq d iuajdjwaduhd uawd audiw qu uahjdka wd
                aiudh wqd awdj wquhdakw udowauwhduhqdhoauwhd qowudhoa uwh oqhduqhwelajdwiu heqjdowiuqoeqwuehquehqu uw
                euqeuqoejqojeoiqjeojq queoqeoiq eoiqj eoiq ejqehqiwdqqeqeqo oqoehque </p>

            <Divider/>
            {showReply ?
                <div>
                    <DetailBalasanNested/>
                    <DetailBalasanNested/>
                    <DetailBalasanNested/>
                </div>
                :
                <p className={"font-12 center grey pointer"} onClick={() => setShowReply(!showReply)}>lihat balasan</p>
            }

            <div className={"flex margin-top-16"}>
                <Input
                    className={"margin-right-8"}
                    placeholder="balas.."
                />
                <img className={"right center pointer"} width={17} height={20} src="/icons/ic_send_reply.png"/>
            </div>

        </div>
    );
}
