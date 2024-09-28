import React from 'react'
import logo from '/images/logo.png?url'


const Payment = () => {
  return (
    <section className='payment'>
       <div className='payment__container container'>
        <div className="logo">
            <div className="image__container">
              <img src={logo} alt="school__logo" width="100px" height="100px"/>  
            </div>
        </div>
        <h2>FORM PURCHASE</h2>
        <p>Welcome! Please complete your purchase by filling out the form below.</p>
        <form className='payment__form'>
            <p>Amount : #5000.00</p>
            <input type="text" name='email' placeholder='email' />
            <button>Submit</button>
        </form>
      </div>
    </section>
   
  )
}

export default Payment