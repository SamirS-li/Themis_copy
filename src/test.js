// // https://www.npmjs.com/package/react-responsive-carousel
// import { createClass } from 'react';
// import { render as _render } from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';

// var DemoCarousel = createClass({
//     render() {
//         return (
//             <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src="assets/4.jpeg" />
//                     <p className="legend">Legend 4</p>
//                 </div>
//                 <div>
//                     <img src="assets/5.jpeg" />
//                     <p className="legend">Legend 5</p>
//                 </div>
//                 <div>
//                     <img src="assets/6.jpeg" />
//                     <p className="legend">Legend 6</p>
//                 </div>
//             </Carousel>
//         );
//     }
// });
// _render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// // Don't forget to include the css in your page 
// // <link rel="stylesheet" href="carousel.css"/>
// // Begin DemoSliderControlsimport React, {useState,useEffect,useRef} from "react";
// // import test from '../test'

// export default function Footer(){
   
//     // test()
//     const [count,setCount] = useState(0);
//     const [test,setTest] = useState(-400);
    
    
//     const topCount= useRef() ;
//     let a='';
//     let top2='';
    
    
//     const increase = function (){
//         let i=0;
        
    
//         const increaseInterval = setInterval(()=>{
//             i+=10;
//             top2=topCount.current.style.top;
//             console.log('top2: ',top2)
//             a=Number(top2.replace("px",""))+10+'px';
//             Number(top2.replace("px","")) > -100 ?  topCount.current.style.top='-400px' : console.log('');
            
//             i>100 ? clearInterval(increaseInterval):topCount.current.style.top = a;
    
//         },40) 
    
    
//     }
    
    
    
    
    
    
//     function decrease(){
//         let i=0;
//         const decreaseInterval = setInterval(()=>{
//             i+=10;
//             top2=topCount.current.style.top;
//             console.log('top2: ',top2)
//             a=Number(top2.replace("px",""))-10+'px';
//             Number(top2.replace("px","")) < -400 ?  topCount.current.style.top='-100px' : console.log('');
            
//             i>100 ? clearInterval(decreaseInterval):topCount.current.style.top = a;
    
//         },40) 
//     }
    
    
    
    
//         return(
        //     <div id="footer">
        //         <div className="footer-container">
        //             {/* < <  footer news  > > */}
        //             <div className="footer-news">
        //                 <div className="footer-title">Latest news</div>
        //                 <div className="footer-news-main">
        //                     <a className="carousel-prev" href="#" onClick={increase}></a>
        //                     <a className="carousel-next" href="#" onClick={decrease}></a>
        //                     <ul className="news-list" style={{top:test}} ref={topCount}>
        //                          <li>
        //                             <div className="news-list-date">
        //                                {count} <span>oct</span>
        //                             </div>
        //                             <div className="news-list-content">
        //                                 <h6>Fusce erat massa, euismod id con</h6>
        //                                 <p>Fusce velit mi, aliquam id volutpat in, ulc nec urna. Morbi pellentesque fentum ar.</p>
        //                             </div>
        //                         </li>
    
        //                         <li className="pager">
        //                             <div className="news-list-date">
        //                                 27<span>DEC</span>
        //                             </div>
        //                             <div className="news-list-content">
        //                                 <h6>Mauris rhoncus, diam non soda</h6>
        //                                 <p>Sed eget aliquet ipsum. Nunc cursus lig ut nisl egestas eu aliquet lorem tempor.</p>
        //                             </div>
        //                         </li>
    
        //                         <li className="pager">
        //                             <div className="news-list-date">
        //                                 01<span>DEC</span>
        //                             </div>
        //                             <div className="news-list-content">
        //                                 <h6>Sed accumsan lobortis adipiscing</h6>
        //                                 <p>Fusce quam leo, ultricies non malesuad quis, hendrerit in nulla. Proin eu lectusle.</p>
        //                             </div>
        //                         </li>
    
        //                         <li className="pager">
        //                             <div className="news-list-date">
        //                                 11<span>NOV</span>
        //                             </div>
        //                             <div className="news-list-content">
        //                                 <h6>Nulla malesuada massa eu arcu</h6>
        //                                 <p>Vivamus tincidunt enim eu mauris feugi rutrum id id lectus. Donec nec nulla duil.</p>
        //                             </div>
        //                         </li>
    
        //                         <li className="pager">
        //                             <div className="news-list-date">
        //                                 17<span>OCT</span>
        //                             </div>
        //                             <div className="news-list-content">
        //                                 <h6>Fusce erat massa, euismod id con</h6>
        //                                 <p>Fusce velit mi, aliquam id volutpat in, ulc nec urna. Morbi pellentesque fentum ar.</p>
        //                             </div>
        //                         </li>
    
        //                         <li>
        //                             <div className="news-list-date">
        //                                 27<span>DEC</span>
        //                             </div>
        //                             <div className="news-list-content">
        //                                 <h6>Mauris rhoncus, diam non soda</h6>
        //                                 <p>Sed eget aliquet ipsum. Nunc cursus lig ut nisl egestas eu aliquet lorem tempor.</p>
        //                             </div>
        //                         </li><li>
        //                             <div className="news-list-date">
        //                                 01<span>DEC</span>
        //                             </div>
        //                             <div className="news-list-content">
        //                                 <h6>Sed accumsan lobortis adipiscing</h6>
        //                                 <p>Fusce quam leo, ultricies non malesuad quis, hendrerit in nulla. Proin eu lectusle.</p>
        //                             </div>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             {/* < <  footer testimonials  > > */}
        //             <div className="footer-testimonials">
        //             <div className="footer-title">Testimonials</div>
        //                 <div className="footer-testimonials-main">
        //                     <a className="carousel-prev" href="#"></a>
        //                     <a className="carousel-next" href="#"></a>
        //                     <ul className="testimonials-list">
        //                          <li>
        //                             <div className="testimonials-list-content">
        //                                 <h6>Joe Doe, Director, DeCompany</h6>
        //                                 <p>Sed semper, risus eget laoreet dictum, neques velit gravida nunc, id eleifend er.</p>
        //                             </div>
        //                         </li>
    
        //                         <li className="pager">
        //                             <div className="testimonials-list-content">
        //                                 <h6>Gemma Britt, Smooth Comm</h6>
        //                                 <p>Nulla lacinia volutpat dignissim. Curabit cursus lobortis consectetur. Maurisase.</p>
        //                             </div>
        //                         </li>
    
        //                         <li className="pager">
        //                             <div className="testimonials-list-content">
        //                                 <h6>Alex Cruise, Suites Ltd</h6>
        //                                 <p>Quisque semper congue elit eu aliquam. Aenean dolor mi, gravida eget fermente.</p>
        //                             </div>
        //                         </li>
    
        //                         <li className="pager">
        //                             <div className="testimonials-list-content">
        //                                 <h6>Ann Green, Deloitte Greece</h6>
        //                                 <p>Suspendisse sit amet nisi est. Ut id eros tortorad blandit tincidunt. Vel su.</p>
        //                             </div>
        //                         </li>
    
        //                         <li className="pager">
        //                             <div className="testimonials-list-content">
        //                                 <h6>Alex Cruise, Suites Ltd</h6>
        //                                 <p>Quisque semper congue elit eu aliquam. Aenean dolor mi, gravida eget fermente.</p>
        //                             </div>
        //                         </li>
    
        //                         <li>
        //                             <div className="testimonials-list-content">
        //                                 <h6>Ann Green, Deloitte Greece</h6>
        //                                 <p>Suspendisse sit amet nisi est. Ut id eros tortorad blandit tincidunt. Vel su.</p>
        //                             </div>
        //                         </li><li>
        //                             <div className="testimonials-list-content">
        //                                 <h6>Alex Cruise, Suites Ltd</h6>
        //                                 <p>Quisque semper congue elit eu aliquam. Aenean dolor mi, gravida eget fermente.</p>
        //                             </div>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             {/* < <  footer legal  > > */}
        //             <div className="footer-legal">
        //                 <div className="footer-title">Legal topics</div>
        //                 <div className="legal-main">
        //                   <ul className="legal-list">
        //                         <li>
        //                             <a href="#">Business Law</a>
        //                         </li>
        //                         <li>
        //                             <a href="#">Consumer</a>
        //                         </li>
        //                         <li>
        //                             <a href="#">Criminal Law</a>
        //                         </li>
        //                         <li>
        //                             <a href="#">Child Custody</a>
        //                         </li>
        //                         <li>
        //                             <a href="#">Civil Rights</a>
        //                         </li>
        //                         <li>
        //                             <a href="#">Bankrupcty</a>
        //                         </li>
        //                         <li>
        //                             <a href="#">Education</a>
        //                         </li>
        //                         <li>
        //                             <a href="#">Car Accidents</a>
        //                         </li>
        //                         <li>
        //                             <a href="#">Divorce</a>
        //                         </li>
        //                         <li>
        //                             <a href="#">Discrimination</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // )
//     }

<Carousel >
             <li>
                <div className="news-list-date">
                   01 <span>oct</span>
                </div>
                <div className="news-list-content">
                    <h6>Fusce erat massa, euismod id con</h6>
                    <p>Fusce velit mi, aliquam id volutpat in, ulc nec urna. Morbi pellentesque fentum ar.</p>
                </div>
            </li>
            <li className="pager">
                <div className="news-list-date">
                    27<span>DEC</span>
                </div>
                <div className="news-list-content">
                    <h6>Mauris rhoncus, diam non soda</h6>
                    <p>Sed eget aliquet ipsum. Nunc cursus lig ut nisl egestas eu aliquet lorem tempor.</p>
                </div>
            </li>
            <li className="pager">
                <div className="news-list-date">
                    01<span>DEC</span>
                </div>
                <div className="news-list-content">
                    <h6>Sed accumsan lobortis adipiscing</h6>
                    <p>Fusce quam leo, ultricies non malesuad quis, hendrerit in nulla. Proin eu lectusle.</p>
                </div>
            </li>
            <li className="pager">
                <div className="news-list-date">
                    11<span>NOV</span>
                </div>
                <div className="news-list-content">
                    <h6>Nulla malesuada massa eu arcu</h6>
                    <p>Vivamus tincidunt enim eu mauris feugi rutrum id id lectus. Donec nec nulla duil.</p>
                </div>
            </li>
            <li className="pager">
                <div className="news-list-date">
                    17<span>OCT</span>
                </div>
                <div className="news-list-content">
                    <h6>Fusce erat massa, euismod id con</h6>
                    <p>Fusce velit mi, aliquam id volutpat in, ulc nec urna. Morbi pellentesque fentum ar.</p>
                </div>
            </li>
            <li>
                <div className="news-list-date">
                    27<span>DEC</span>
                </div>
                <div className="news-list-content">
                    <h6>Mauris rhoncus, diam non soda</h6>
                    <p>Sed eget aliquet ipsum. Nunc cursus lig ut nisl egestas eu aliquet lorem tempor.</p>
                </div>
            </li>
            <li>
                <div className="news-list-date">
                    01<span>DEC</span>
                </div>
                <div className="news-list-content">
                    <h6>Sed accumsan lobortis adipiscing</h6>
                    <p>Fusce quam leo, ultricies non malesuad quis, hendrerit in nulla. Proin eu lectusle.</p>
                </div>
            </li>
 </Carousel>










//  react slicein css i


 /* Arrows */
/* .slick-prev,
.slick-next
{
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus
{
    color: transparent;
    outline: none;
    background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before
{
    opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before
{
    opacity: .25;
}

.slick-prev:before,
.slick-next:before
{
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;

    opacity: .75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-prev
{
    left: -25px;
}
[dir='rtl'] .slick-prev
{
    right: -25px;
    left: auto;
}
.slick-prev:before
{
    content: '←';
}
[dir='rtl'] .slick-prev:before
{
    content: '→';
}

.slick-next
{
    right: -25px;
}
[dir='rtl'] .slick-next
{
    right: auto;
    left: -25px;
}
.slick-next:before
{
    content: '→';
}
[dir='rtl'] .slick-next:before
{
    content: '←';
} */





// =======  Form  ========
import React from 'react';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}