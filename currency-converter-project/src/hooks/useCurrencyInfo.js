import { useEffect, useState } from "react";

{/*The hook needs to have atleast on currency to get its info from the list of currencies */}
function useCurrencyInfo(currency) {
    {/*data represents the jsnon data from the url, the url data is an object*/}
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data)
    return data
}

export default useCurrencyInfo 