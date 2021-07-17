import React, { Component } from 'react';
import { Button } from 'antd';
import DetailCarousel from "../components/global-component/DetailCarousel";
export default class Home extends Component {
  render() {
    return (
        <div>
          <p>Otniel Victory Febe Anwar</p>
          <p>Use this page as index or home of your website</p>
            <Button>Tes</Button>
            <DetailCarousel/>
        </div>
    );
  }
}
