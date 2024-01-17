import React from 'react'

function inputBox({
    label,
    amount,
    onAmountChange, 
    onCurrencyChange,
    currencyOptions = [],
    selectedCuurency = "usd",
    amountDisabled = false, 
    currencyDisabled = false,
    className="",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex $
    {className}`}>
        {/*this input is where the amount is entered*/ }
        <div className="w-1-2">
            <label classNamw="text-black/40 mb-2
            inline-block ">{label}</label>
            <input
            type="number"
            className="outline-none w-full bg-transparent
            py-1.5"
            placeholder="amount"
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        {/*this is for the select that will ahvea dropdown of the list of currencies*/}
        <div className="w-1/2 flex flex-wrap justify-end
        text-right">
            <p className="text-black/40 mb-2 w-full ">Currency Type</p>
            <select
            className="rounded-lg px-1 py-1 bg-gray-100
            cursor-pointer outline-none"
            value={selectedCuurency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}
            >
                {currencyOptions.map((currency) => (
                    <option
                    key={currency}
                    value={currency}
                    ></option>
                ))}
            </select>

        </div>
    </div>
  )
}

export default inputBox