import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import inputBox from './components/index'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmmount] = useState(0)

  {/*we use the currencyinfo hook to be the currency we start with */}
  const currencyInfo = useCurrencyInfo(from)
  {/*we create optiosn based on the currency info keys or all the currency options from currencyinfo */}
  const options = Object.keys(currencyInfo)

  {/*the swap function switch the values that will be converted including the amount -> usd to inr = inr to usd and the same thing for the amount  */}
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmmount(amount * currencyInfo[to])
  }

  return (
    <div className="w-full h-screen flex flex-wrap 
    justify-center items-center bg-cover bg-no-repeat"
    style={{backgroundImage: `url(https://media.istockphoto.com/id/909462374/photo/family-saving-money-to-piggy-bank.jpg?b=1&s=612x612&w=0&k=20&c=NPLQULX-FdZt4zgwj_I2nZ50y6w2p2_nbsXeyP7SYBo=)`}}>
     <div className="w-full">
      <div className="w-full max-w-md mx-auto border 
      border-gray-60 rounded-lg p-5 backdrop-blur-sm 
      bg-white/30">
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className="w-full mb-1">
            <inputBox
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCuurency={from} />
            <div className="relative w-full h-0.5">
              <button
              className="absolute left-1/2 -translate-x-1/2
              -translate-y-1/2 border-2 border-white
              rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}>Swap</button>
            </div>
            <div className="w-full mb-1">
              <inputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCuurency={to}
              amountDisabled />
            </div>
            <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Convert {from} to {to}</button>
          </div>
        </form>
      </div>
     </div>
    </div>
  )
}

export default App
