import React,{useRef} from 'react';
import './Join.css'
import emailjs from '@emailjs/browser';


const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dmdlori', 'template_43lk0vl', form.current, 'ZGX0Js4QAUSFC6vuL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    function message(){
        var email= document.getElementById('email');
        const success = document.getElementById('success');
        const danger = document.getElementById('danger');
    }
  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder='Enter your email address' id="email" />
            <button className='btn btn-j' onClick={message}>Join Now</button>
            <div class="message">
                <div class="success" id="success">Your Message Successfully Sent!</div>
                <div class="danger" id="danger">Feilds Can't be Empty!</div>
            </div>
        </form>
        </div>
      
    </div>
  );
}

export default Join;
