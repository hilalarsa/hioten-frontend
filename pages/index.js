import React, { Component } from 'react';
import { Button } from 'antd';
import Card from '../components/global-component/Card';
import DetailCarousel from "../components/DetailComponent/DetailCarousel";

export default class Home extends Component {
  render() {
    return (
        <div>
          <p>Otniel Victory Febe Anwar</p>
          <p>Use this page as index or home of your website</p>
            <Button>Tes</Button>
            <Card title={'Jurusan TI Polinema'} category={'Kampus - Jurusan'} description={'Lorem ipsum'} rating={2.5} allowHalfRate countRating={102}/>
            <DetailCarousel/>
        </div>
    );
  }
}
