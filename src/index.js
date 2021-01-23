import React , {useState}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function AddPersonForm(props) {
  const[person, setPerson]=useState("");
  
  function handleChange(e) {
    setPerson(e.target.value);
  }
  function handleSubmit(e) {
    if(person !== "") {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder="add new contact"
      onChange={handleChange}
      value={person}
      >
      </input>
      <button type="submit">add</button>
    </form>
  )
  
}
function  PeopleList(props) {
  const arr=props.data;
  const listItems=arr.map((val,index) =>
    <li key={index}> {val} </li>
  );

  return <ol>{listItems}</ol>  
}
function ContactManager(props) {
  const [contacts,setContacts] =useState(props.data);
  function addPerson(name) {
    setContacts([...contacts,name]);
  }
  return (
    <div>
      <AddPersonForm handleSubmit={addPerson}/>
      <PeopleList data={contacts} />
    </div>
  )
    
}
const contacts = ["jethalal", "mehta", "popatlal"];
ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
