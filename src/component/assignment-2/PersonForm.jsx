"use client"
import { useState } from "react";

const PersonForm = () => {
  const [form, setForm] = useState({
    firstname:"",
    lastname:"",
    age:""
  })
  return (
    <>
    <label>
      First Name:
      <input 
      value = {form.firstname}
      onChange={e =>{
        setForm({
          ...form,
          firstname: e.target.value
        });
      }}
      />
    </label>
    <label>
      Last Name
      <input 
      value = {form.lastname}
      onChange={e =>{
        setForm({
          ...form,
          lastname: e.target.value
        })
      }}
      />
    </label>
    <label>
      Age:
      <input 
      value = {form.age}
      onChange={e =>{
        setForm({
          ...form,
          age: e.target.value
        })
      }}
      />
    </label>
    <br />
    <label>First Name = </label>{form.firstname}<br />
    <label>Last Name = </label>{form.lastname}<br />
    <label>Age = </label>{form.age}<br />
    </>
  );
}
export default PersonForm;