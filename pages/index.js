import React, { Component } from 'react';
import { Button } from 'antd';
import Router from "next/router";

export default class Home extends Component {
    componentDidMount() {
        Router.push("/detail/123");
    }

    render() {
    return (
        <div>
          <p>Otniel Victory Febe Anwar</p>
          <p>Use this page as index or home of your website</p>
            <Button>Tes</Button>
        </div>
    );
  }
}
