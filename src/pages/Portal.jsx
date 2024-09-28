import { useState } from 'react';
import logo from '../assets/images/logo.png';
import background from '../assets/images/hero1.jpg';

const Portal = () => {
  const [radioValue, setRadioValue] = useState("");
  const [dropDown1, setDropDown1] = useState("default");
  const [dropDown2, setDropDown2] = useState("default");
  
  const handleRadioChange = (e) =>{
    setRadioValue(e.target.value) 

  }
  const handleDropDownChange = (e) =>{
    setDropDown1(e.target.value) 
  }

  const handleDropDownChange2 = (e) =>{
    setDropDown2(e.target.value) 
  }

  const handleSubmit = (e) =>{

    e.preventDefault()
    
    const urls = {
      "elebu_primary_staff" : "https://bolt.schoolcube.net/staff/ICASTS1",
      "elebu_primary_parent": "https://bolt.schoolcube.net/parents/ICASTS1",
      "elebu_primary_admin": "https://bolt.schoolcube.net/admin/ICASTP1",
      "elebu_secondary_staff" : "https://bolt.schoolcube.net/staff/ICASTS1",
      "elebu_secondary_parent": "https://bolt.schoolcube.net/parents/ICASTS1",
      "elebu_secondary_admin": "https://bolt.schoolcube.net/admin/ICASTS1",
      "elewura_primary_parent": "https://bolt.schoolcube.net/parents/IPS723",
      "elewura_primary_admin": "https://bolt.schoolcube.net/admin/IPS723",
      "elewura_primary_staff": "https://bolt.schoolcube.net/staff/IPS723",
      "elewura_secondary_staff" : "https://bolt.schoolcube.net/staff/IGOS722",
      "elewura_secondary_parent": "https://bolt.schoolcube.net/parents/IGOS722",
      "elewura_secondary_admin": "https://bolt.schoolcube.net/admin/IGOS722",
    }

    const key = `${radioValue}_${dropDown1}_${dropDown2}`
    console.log
    const url = urls[key]
    console.log(url)

    if(url){
      window.location.href =url
    }else{
      alert("please try again and select the correct options")
    }

    setDropDown1("default")
    setDropDown2("default")
  }
  return (
    <main className='portal'>
      <div className="portal__container container">
        <section className='logo__section'>
          <div className="portal__logo">
            <img src={logo} alt="" />
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et, corporis quis qui sint rem error. Possimus deserunt facere ab?
          </div>
        </section>
        <section className='form__container'>
          <form className='form'>
          <h4>Select an Option Below</h4>
            <div className="form__group radio">
              <label>
              <input 
              type="radio" 
              name = "Annex"
              value="elebu"
              checked={radioValue === 'elebu'} 
              onChange={handleRadioChange}
              />
              Elebu
              </label>
              <label>
              <input 
              type="radio" 
              name = "Annex"
              value="elewura"
              checked={radioValue === 'elewura'} 
              onChange={handleRadioChange} 
              />
              Elewura
              </label>
            </div>
            <div className="form__group dropdown">
            <select name="class" id="" value={dropDown1} onChange={handleDropDownChange}>
                <option value="default">Select Class</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
              </select>
              <select name="" id="" value= {dropDown2} onChange={handleDropDownChange2}>
                <option value="default">Select Role</option>
                <option value="staff">Staff</option>
                <option value="parent">Parent</option>
                <option value="student">Admin</option>
              </select>
            </div>
            <button className="btn submit" onClick={handleSubmit}>Submit</button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Portal