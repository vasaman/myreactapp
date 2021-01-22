import React , {useState}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function AddPersonForm() {
  const[person, setPerson]=useState("");
  return(
    <form>
      <input type="text"
      placeholder="add new contact">
      </input>
      <button></button>
    </form>
  )
  
}
function PeopleList(props) {
  const arr=props.data;
  const listItems=arr.map((val,index) =>
    <li key={index }> {val} </li>
  );

  return <ol>{listItems}</ol>  
}
const contacts=["jethalal","mehta","popatlal"];
const el=(
  <div> 
  
    <AddPersonForm />
    <PeopleList data={contacts}/>
  </div>
);

ReactDOM.render(
  el,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
