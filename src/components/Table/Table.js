import React from 'react'
import data from '../../utils/constants/provinces'
import './Table.css'

function Table(props) {

   const { provinces, setProvinces } = props;

  return (
    <div className="container-table">
        <div className="table">
        <div className="table-title">
            <h2>Provinsi</h2>
            <h3>Data Covid Provinsi</h3>
        </div>
        <div className="table-content">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <tbody>
                    {provinces.map((data,index) => (
                    <tr>
                        <td>{index +1}</td>
                        <td>{data.kota}</td>
                        <td>{data.kasus}</td>
                        <td>{data.sembuh}</td>
                        <td>{data.dirawat}</td>
                        <td>{data.meninggal}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

export default Table