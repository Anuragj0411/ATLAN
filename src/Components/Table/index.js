import React, { useEffect } from 'react'
import "./style.css"
function Table({ data }) {

    const getColumns = () => Object.keys(data[0]).map((col, i) => (<th key={i}>{col}</th>))
    const getRow = (row) => Object.values(row).map((val, i) => (<td key={i}>{val}</td>))
    const getData = () => data.map((row, i) => <tr key={i}>{getRow(row)}</tr>)

    return (
        <table className="tableFixHead">
            <thead>
                <tr>
                    {getColumns()}
                </tr>
            </thead>
            <tbody>
                {getData()}
            </tbody>
        </table>
    )
}

export default Table