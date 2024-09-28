import { steps } from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




const Admission = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    const handleClick = (id)=>{
        setCurrentStep(id)
    }
    const handleClick1 = () => {
        navigate("/payment");
    };


  return (
    <div className="admission section">
        <div className="admission__container container">
            <section className="admission__process">
                <div className="admission__process-container ">
                  {
                   steps.map((step)=>(
                    <div className={`steps ${currentStep === step.id ? 'active' : ''} `}key={step.id} onClick={()=>{handleClick(step.id)}}>
                        <h4>{step.title}</h4>
                        {currentStep ===  step.id && <p>{step.content}</p>}
                    </div>
                   ))
                }
                </div>
            </section>
            <section className="actions section">
                <div className="action__container">
                    <div className="form action">
                        <h4>Download Admission Form</h4>
                        <button onClick={handleClick1}>Download</button>
                    </div>
                    <div className="online action">
                        <h4>Apply Online</h4>
                        <button>Apply</button>
                    </div>
                    <div className="contact action">
                        <h4>Contact Us</h4>
                        <button>Contact</button>
                    </div>
                </div>   
            </section>
            <section className="message section">
                <p>    We shall process your application and update you with our final decision within 40 days of receiving your application. 
        Our dedicated admissions team carefully reviews each submission to ensure a fair and thorough evaluation. 
        If any additional information or documentation is required, we will reach out to you directly. 


        We appreciate your patience throughout this process and are committed to providing you with timely updates. 
        In the meantime, feel free to contact us if you have any questions or need further assistance. 
        Thank you for your interest in our program!
               </p>
            </section>
        </div>
    </div>
  )
}

export default Admission