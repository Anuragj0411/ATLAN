export const getData = async () => {
    let link = randomLink();
    let response = await fetch(link),
        reader = response.body.getReader(),
        result = await reader.read(),
        decoder = new TextDecoder('utf-8'),
        csv = await decoder.decode(result.value),
        data = parseData(csv)
    return data
}

export const parseData = (data) => {
    data = data.split("\n")
    const columns = data[0].split(",")
    let transformedData = []
    for(let i = 1;i<data.length;i++) {
        let rowData = data[i].split(",")
        let tempData = {}
        columns.forEach((column,index)=>{ 
            tempData[column] = rowData[index]
        })
        transformedData.push(tempData)
    }
    return transformedData
}
const randomLink = (data) => {
    let arr = ["/Data/employees.csv", "/Data/customers.csv", "/Data/order_details.csv", "/Data/orders.csv"]
    return arr[Math.floor(Math.random() * 4)]
}
