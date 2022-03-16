import React, {useState, useEffect} from 'react'
// import React, {useEffect} from 'react'
import Greeter from './Greeter'

const App = () => {
    const [username, setUserName ] = useState('')
    const [loaded, setLoaded] = useState(false)

    // handleButtonClick (){
    //     return setLoaded == true
    // }

    useEffect(() => {
        if(loaded == false){setTimeout(() => {
            return setLoaded(true)
          }, 3000);

        }

    })

    if (loaded == false){
        return (<><header>Website loading...</header>
        <button onClick = {() => setLoaded(true) }>Click to Load</button></>)
    } else{
    
    return <div>
        <Greeter phrase="Hello there" name="Turner"/>
        <Greeter phrase="You're awesome" name="Jordan"/>
        <Greeter phrase="You're terrible" name="Loser"/>
        <input type="text" value={username} onChange={e => setUserName(e.target.value)} />
        <p>You are logging in as: {username}</p>
        </div>
    }
}


export default App