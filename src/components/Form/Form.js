import React, { useState } from 'react'
import data from '../../utils/constants/provinces'
import './Form.css'

function Form(props) {

    const { provinces, setProvinces } = props;

    const [provinsi, setProvinsi] = useState();
    const [status, setStatus] = useState();
    const [jumlah, setJumlah] = useState();

    function pressSubmit(event) {
        event.preventDefault();

        const index = provinces.findIndex((item) => item.kota === provinsi)
        const foundProvince = provinces.find((item) => item.kota === provinsi)


        provinces[index] = {
            ...foundProvince,
            [status]: parseInt(foundProvince[status]) + parseInt(jumlah)
        };

        setProvinces([...provinces])
    }

  return (
        <div className="container-form">
            <div className="form">
                <div className="form-img">
                    <img src="img/hero.png" alt="" />
                </div>
                <div className="form-content">
                    <h2>Form Covid</h2>
                    <form action="" onSubmit={pressSubmit}>
                        <div className="group">
                            <label>Provinsi</label>
                            <select onChange={(event) => setProvinsi(event.target.value)}>
                                {data.provinces.map((data) => (
                                <option value={data.kota}>{data.kota}</option>
                                ))}
                            </select>
                        </div>
                        <div className="group">
                            <label>Status</label>
                            <select onChange={(event) => setStatus(event.target.value)}>
                                <option value="kasus">positif</option>
                                <option value="sembuh">sembuh</option>
                                <option value="dirawat">dirawat</option>
                                <option value="meninggal">meninggal</option>
                            </select>
                        </div>
                        <div className="group">
                            <label>Jumlah</label>
                            <input type="text" onChange={(event) => setJumlah(event.target.value)}/>
                        </div>
                        <div className="button">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form