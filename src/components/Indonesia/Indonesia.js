import React from 'react'
import data from '../../utils/constants/indonesia'
import './Indonesia.css'

function Indonesia() {
  return (
    <div className="container-indonesia">
        <div className="indonesia">
            <div className="indonesia-title">
                <h2>Indonesia</h2>
                <h3>Data Covid Global</h3>
            </div>
            <div className="indonesia-card">
                {data.indonesia.map((data) => (
                <div className="card">
                    <h2>{data.status}</h2>
                    <span>{data.total}</span>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Indonesia