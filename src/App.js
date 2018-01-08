import React, { Component } from 'react';
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <div className="header">

               <div className="header-wrapper panel">
                  <div className="nav">
                     <div className="title">Start Bootstrap</div>
                     <div className="menu">
                        SERVICE PORTFOLIO ABOUT TEAM CONTACT
                     </div>
                     {/* <button className="menu-btn">MENU</button> */}
                  </div>

                  <div className="greeting">
                     <div className="greeting-1">Welcome To Our Studio!</div>
                     <div className="greeting-2">IT'S NICE TO MEET YOU</div>
                     <button className="more-btn">TELL ME MORE</button>
                  </div>
               </div>

            </div>

            <div className="main-content">
               <div className="main-content-wrapper panel">
               MAIN CONTENT

               </div>
            </div>

            <div className="aside-contact">
               <div className="aside-contact-wrapper panel">
   
                  <div className="title-wrapper">
                     <div className="title">CONTACT US</div>
                     <div className="sub-title">Lorem ipsum dolor sit amet consectetur.</div>
                  </div>

                  <div className="message-wrapper">
                     <div className="sender-contact-input">
                        <input className="name-input"/>
                        <input className="email-input"/>
                        <input className="phone-input"/>
                     </div>
                     <input className="message-input"/>
                  </div>

                  <button className="send-btn">SEND MESSAGE</button>

               </div>
            </div>

            <div className="footer">
               <div className="footer-wrapper panel">
                  
                  <div className="copyright">Copyright &copy; Your Website 2017</div>

                  <div className="social-media">
                     <div className="twitter icon"></div>
                     <div className="facebook icon"></div>
                     <div className="linkedin icon"></div>
                  </div>

                  <div className="policy-menu">Privacy Policy  Terms of Use</div>
               
               </div>
            </div>
         </div>
      );
   }
}

export default App;
