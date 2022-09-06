import JSONDATA from "./MOCK_DATA.json"
import React from "react"
import StrongText from "./Components/StrongText.jsx"

function App() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [maxShown, setMaxShown] = React.useState(10)
  const [searchBy, setSearchBy] = React.useState(true)

  // Sorts data in alphabetic order
  const sortedArray = JSONDATA.sort((a, b) => a.first_name.localeCompare(b.first_name))

  const nameData = 
    JSONDATA.filter((val)=> {
      if (searchTerm == ""){
        return val
      } else if (searchBy ? val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) : val.last_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).slice(0,maxShown)

    function handleClick() {
      setSearchBy(prevVal =>(!prevVal))
      console.log(searchBy)
    }

    const setVal = searchBy ? "Searching by First Name" : "Searching by Last Name"

  return (
    <div className="App">
      <div className="row">
      <input 
        type="text" 
        placeholder="search..." 
        onChange={event  => setSearchTerm(event.target.value)}
      />
      <input 
        type="number" 
        value={maxShown} 
        name="number" 
        onChange={event => setMaxShown(event.target.valueAsNumber)}
        placeholder="Set a number..."
        max="1000"
        min="0"
        />
        <input value={setVal} type="button" onClick={handleClick} />
        {/* Sets maxShow to max value */}
        <input type="button" value="Max results" onClick={event => setMaxShown(1000)}/>
      </div>
      <div className="margin-top">
      {nameData.map((val, key) => {
        return <StrongText key={val.id} searchBy={searchBy} lastName={val.last_name} firstName={val.first_name} searchTerm={searchTerm}/>
      })} 
      </div>
      <p  className="see-more" onClick={event => setMaxShown(prevNum => (prevNum + 10))}>See more...</p>
    </div>
  )
}

export default App
