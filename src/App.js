import './App.css';
import Header from './Components/NavScrollExample';
import Client from './Components/Client';
import Body from './Components/Body';
import {useState} from "react"
import NewClient from './Components/NewClient';
function App() {
  const [clients,setClients] = useState([{
    "name" : 'chagan',
    "interest" : 12.5,
    "date" : "12-10-2022",
    "amount" : 10000
  },{
    "name" : 'Magan',
    "interest" : 15,
    "date" : "22-02-2022",
    "amount" : 12000
  },{
    "name" : 'Chapre',
    "interest" : 18,
    "date" : "25-09-2020",
    "amount" : 100000
  },{
    "name" : "Lagan",
    "interest" : 24,
    "date": '23-09-2021',
    "amount": 50000
  },{
    "name" : 'chagan',
    "interest" : 12.5,
    "date" : "12-10-2022",
    "amount" : 10000
  },{
    "name" : 'Magan',
    "interest" : 15,
    "date" : "22-02-2022",
    "amount" : 12000
  },{
    "name" : 'Chapre',
    "interest" : 18,
    "date" : "25-09-2020",
    "amount" : 100000
  },{
    "name" : "Lagan",
    "interest" : 24,
    "date": '23-09-2021',
    "amount": 50000
  },{
    "name" : 'chagan',
    "interest" : 12.5,
    "date" : "12-10-2022",
    "amount" : 10000
  },{
    "name" : 'Magan',
    "interest" : 15,
    "date" : "22-02-2022",
    "amount" : 12000
  },{
    "name" : 'Chapre',
    "interest" : 18,
    "date" : "25-09-2020",
    "amount" : 100000
  },{
    "name" : "Lagan",
    "interest" : 24,
    "date": '23-09-2021',
    "amount": 50000
  },{
    "name" : 'chagan',
    "interest" : 12.5,
    "date" : "12-10-2022",
    "amount" : 10000
  },{
    "name" : 'Magan',
    "interest" : 15,
    "date" : "22-02-2022",
    "amount" : 12000
  },{
    "name" : 'Chapre',
    "interest" : 18,
    "date" : "25-09-2020",
    "amount" : 100000
  },{
    "name" : "Lagan",
    "interest" : 24,
    "date": '23-09-2021',
    "amount": 50000
  }])
  const [input,setinput] = useState("")
  const onSearch = (input)=>{
    setinput(input)
  }
  const [show,setShow] = useState(false)
  const addClick = ()=>{
    setShow(true)
  }
  const exitNew = ()=>{
    setShow(false)
  }
  const addNewClient = (form)=> {
    const client = {
      "name" : form.name.value,
      "interest" : form.interest.value,
      "date" : form.date.value,
      "amount" : form.amount.value
    }
    setClients([...clients,client])
    setShow(false)
  }

  return (
    <div className="App">
      <Header onSearch = {onSearch} addClick = {addClick}/>
      <NewClient addNewClient = {addNewClient} show = {show} exitNew = {exitNew}/>
      <Body clients = {clients} input = {input}/>
    </div>
  );
}

export default App;
