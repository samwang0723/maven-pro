import { ChartBarIcon, CurrencyDollarIcon, HomeIcon, BellIcon } from '@heroicons/react/24/outline'

type Stock = {
  name: string
  symbol: string
  price: number
  change: number
  logo: string
}

const stocks: Stock[] = [
  { name: 'Apple Inc.', symbol: 'AAPL', price: 176.23, change: 2.69, logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Nvidia', symbol: 'NVDA', price: 294.31, change: 3.45, logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Zoom Video', symbol: 'ZM', price: 193.43, change: -6.29, logo: '/placeholder.svg?height=40&width=40' },
  { name: 'AMD', symbol: 'AMD', price: 102.37, change: 0.37, logo: '/placeholder.svg?height=40&width=40' },
]

const indices = [
  { name: 'Dow Jones', symbol: 'DJI', value: 35752.89, change: 0.74 },
  { name: 'S&P', symbol: 'GSPC', value: 4696.56, change: 1.02 },
  { name: 'NASDAQ', symbol: 'IXIC', value: 15522.75, change: -0.81 },
]

export default function TradingDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile view */}
      <div className="lg:hidden">
        <div className="p-4 space-y-4">
          {indices.map((index) => (
            <div key={index.symbol} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{index.name}</h3>
                  <p className="text-sm text-gray-400">{index.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${index.value.toLocaleString()}</p>
                  <p className={index.change > 0 ? 'text-green-500' : 'text-red-500'}>
                    {index.change > 0 ? '+' : ''}{index.change}%
                  </p>
                </div>
              </div>
              <div className="mt-2 h-8 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    index.change > 0 ? 'bg-green-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.abs(index.change)}%` }}
                ></div>
              </div>
            </div>
          ))}

          <h2 className="font-bold text-xl mt-6 mb-2">Most Actives</h2>
          {stocks.map((stock) => (
            <div key={stock.symbol} className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
              <img src={stock.logo} alt={stock.name} className="w-10 h-10 rounded-full" />
              <div className="flex-grow">
                <h3 className="font-bold">{stock.name}</h3>
                <p className="text-sm text-gray-400">{stock.symbol}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">${stock.price}</p>
                <p className={stock.change > 0 ? 'text-green-500' : 'text-red-500'}>
                  {stock.change > 0 ? '+' : ''}{stock.change}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="flex p-4 space-x-4">
          <div className="w-1/4 bg-gray-800 p-4 rounded-lg">
            <h2 className="font-bold text-xl mb-4">Ethereum</h2>
            <div className="flex justify-between items-center">
              <span className="text-green-500">+1.23 (0.65%)</span>
              <span className="font-bold">$3214.6110</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Volume</span>
                <span>9700.23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Volume</span>
                <span>88,123,456</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Market Cap</span>
                <span>2.892 t</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg">Buy</button>
          </div>

          <div className="flex-grow bg-gray-800 p-4 rounded-lg">
            <h2 className="font-bold text-xl mb-4">Status Chart</h2>
            <div className="h-64 bg-gray-700 rounded-lg"></div>
          </div>

          <div className="w-1/4 bg-gray-800 p-4 rounded-lg">
            <h2 className="font-bold text-xl mb-4">Alerts</h2>
            <div className="space-y-2">
              {['Apple Stock', 'Nvidia Stock', 'Google Stock'].map((alert, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{alert}</span>
                  <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 border border-blue-600 text-blue-600 py-2 rounded-lg">
              Create new alert
            </button>
          </div>
        </div>

        <div className="p-4 bg-gray-800 mt-4 rounded-lg">
          <h2 className="font-bold text-xl mb-4">Stock Screener</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th>Name</th>
                <th>Last</th>
                <th>Chg%</th>
                <th>Change</th>
                <th>Volume</th>
                <th>MKT Cap</th>
                <th>P/E</th>
                <th>Sector</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.symbol}>
                  <td className="py-2">
                    <div className="flex items-center space-x-2">
                      <img src={stock.logo} alt={stock.name} className="w-6 h-6 rounded-full" />
                      <span>{stock.name}</span>
                    </div>
                  </td>
                  <td>${stock.price}</td>
                  <td className={stock.change > 0 ? 'text-green-500' : 'text-red-500'}>
                    {stock.change > 0 ? '+' : ''}{stock.change}%
                  </td>
                  <td>{(stock.price * stock.change / 100).toFixed(2)}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom navigation for mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around p-2 lg:hidden">
        {[
          { name: 'Home', icon: HomeIcon },
          { name: 'Market', icon: ChartBarIcon },
          { name: 'Portfolio', icon: CurrencyDollarIcon },
          { name: 'Notification', icon: BellIcon },
        ].map((item) => (
          <button key={item.name} className="flex flex-col items-center">
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
