import React, { useEffect, useState } from 'react'
import Table from "../Table"
import Textarea from "../Textarea"
import { getData } from "../../Utils/index.js"
import "./style.css"
function Main() {

    const [queryData, setQueryData] = useState(null)
    const [query, setQuery] = useState("")
    const [currentQuery, setCurrentQuery] = useState("")
    const [visible, setVisible] = useState(false)
    const fetchData = async () => {
        if (!query) {
            return
        }
        if (query === currentQuery) {
            return
        }
        const data = await getData()
        setQueryData(data)
        setVisible(true)
        setCurrentQuery(query)
    }

    const onChange = (e) => {
        setVisible(false)
        setQuery(e.target.value)
    }

    return (
        <div>
            <div>
            </div>
            <div className="main-wrapper">
                <div >
                    <div className="text-wrapper">
                        <Textarea onChange={onChange} />
                        <button onClick={() => fetchData()}>Execute</button>
                    </div>
                    {visible && (<div>
                        <h4>Query Executed</h4>
                        <Textarea value={query} disabled />
                    </div>)}
                </div>
                <div className="table-wrapper">
                    {queryData && <Table data={queryData} />}
                </div>
            </div>
        </div>
    )
}

export default Main