import Paper from '@material-ui/core/Paper';
import React from 'react';
import MainLogo from '../components/global-component/MainLogo';

export default function Custom404() {
    return (
        <div>
            <MainLogo />
            <div className="main-content" id="mainContent">
                <Paper id="mainSection" className="padding-36 txt-center-hoz" elevation={0}>
                    <h3>404 :)</h3>
                    <p className="font-muli-16 bold">Halaman Tidak Ditemukan</p>
                    <p className="font-muli-14">Kamu nyasar nih, cek url lagi ya.</p>
                </Paper>
            </div>
        </div>
    );
}
