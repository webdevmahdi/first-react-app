import './App.css'

function App() {
  let names = ['Mahdi', 'Hasan', 'Mahi', 'Sadi']
  let needs = [
    {name: 'Laptop', price: 37000, size: '15 inch'},
    {name: 'Phone', price: 25000, size: '6 inch'},
    {name: 'Note paper', price: 25, size: '10 inch'},
    {name: 'Pen', price: 5, size: '5 inch'},
  ]
  return (
    <div className="main">
      {
        needs.map(need=> <Name name={need.name} price={need.price} size={need.size}></Name>)
      }
    </div>
  )
}
function Name(props) {
  return (
    <div className='name'>
      <h1>Name: {props.name}</h1>
      <h1>Price: {props.price}</h1>
      <h1>Size: {props.size}</h1>
    </div>
  )
}

export default App
