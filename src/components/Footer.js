import React,{useEffect, useRef, useState} from "react";
// import { createClass } from 'react';
// import { render as _render } from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import ScrollCarousel from 'scroll-carousel-react';

export default function Footer (){
    const [minSize,setMinSize]=useState()
    const [maxSize,setMaxSize]=useState(0)
    const [intervalCount,setIntervalTime]=useState('40')
    const [worked,setWorked]=useState(false)


    useEffect(()=>{
        

        let carousel =document.querySelector('.App').querySelector('.carousel');
        let nextArrow =document.querySelector('.App').querySelector('.carousel-next');
        carousel.parentElement.style.overflow='hidden';
        
        

        // Call VerticalEndSize

        if(carousel.lastChild.className != 'clone'){
            setTimeout(()=>{
                VerticalEndSize()
            },100)
        }
       
        




       // Add copy child into carousel
       
    
        if(carousel.lastChild.className != 'clone'){
            setTimeout(()=>{
                carousel.childNodes.forEach((item)=>{
               
                    let element = item.cloneNode(true);
                    element.className +='clone';
                    carousel.appendChild(element);

                })
            },200)
        }


     

    //  Carousel auto playing function

     function carouselAutoplay(){
        
        if(worked!=true){
            
            setInterval(()=>{
                nextArrow.click()
            },4000)
            
            setWorked(true)
        }
     }

     carouselAutoplay()



           
     

    },[])
    //  -------------------------------

      // find Top size for vertical

     function VerticalEndSize(){
        let Height=0;
        let fullHeight=0;
        let topSize=0;
        let carousel =document.querySelector('.App').querySelector('.carousel');
        Height = carousel.lastChild.offsetHeight;
        Height +=" "+ window.getComputedStyle(carousel.lastChild).marginBottom;
        Height +=" "+ window.getComputedStyle(carousel.lastChild).marginTop
        Height +=" "+ window.getComputedStyle(carousel.lastChild).paddingBottom;
        Height +=" "+ window.getComputedStyle(carousel.lastChild).paddingTop;
        Height +=" "+ window.getComputedStyle(carousel.lastChild).borderBottom.split(' ')[0];
        Height +=" "+ window.getComputedStyle(carousel.lastChild).borderTop.split(' ')[0]
        Height.replaceAll('px',"").split(' ').forEach((item)=>{
            fullHeight+= +item;
        });
        // End size
        topSize = fullHeight * carousel.childElementCount;

        setMinSize(-topSize);
        setMaxSize(-fullHeight);
        return topSize;

     }


    

   

    const CarouselStyle= useRef() ;
    let setwillSize='';
        
        
        const increase = function (){
            let i=0;
            
        
            const increaseInterval = setInterval(()=>{

                i+=10;
                setwillSize=Number(CarouselStyle.current.style.top.replace("px",""))+10+'px';
               
                if(Number(CarouselStyle.current.style.top.replace("px","")) > maxSize){
                    CarouselStyle.current.style.top=minSize+'px'
                }else{
                }
                
                i>100 ? clearInterval(increaseInterval):CarouselStyle.current.style.top = setwillSize;
        
            },intervalCount) 
        
        
        }
        
        
        function decrease(){
            let i=0;
            const decreaseInterval = setInterval(()=>{
                
                i+=10;
                setwillSize=Number(CarouselStyle.current.style.top.replace("px",""))-10+'px';
                if( Number(CarouselStyle.current.style.top.replace("px","")) < minSize ){
                    CarouselStyle.current.style.top=maxSize+'px'
                }else{

                }
                i>100 ? clearInterval(decreaseInterval):CarouselStyle.current.style.top = setwillSize;
        
            },intervalCount) 
        }



  
    return(
        <div id="footer">
                <div className="footer-container">
                    {/* < <  footer news  > > */}
                    <div className="footer-news">
                        <div className="footer-title">Latest news</div>
                        <div className="footer-news-main">
                            <a className="carousel-prev" onClick={increase}></a>
                            <a className="carousel-next"  onClick={decrease}></a>
                            <ul className="news-list carousel" style={{top:minSize}} ref={CarouselStyle}>
                                 <li>
                                    <div className="news-list-date">
                                       01 <span>oct</span>
                                    </div>
                                    <div className="news-list-content">
                                        <h6>Fusce erat massa, euismod id con</h6>
                                        <p>Fusce velit mi, aliquam id volutpat in, ulc nec urna. Morbi pellentesque fentum ar.</p>
                                    </div>
                                </li>
    
                                <li>
                                    <div className="news-list-date">
                                        02<span>DEC</span>
                                    </div>
                                    <div className="news-list-content">
                                        <h6>Mauris rhoncus, diam non soda</h6>
                                        <p>Sed eget aliquet ipsum. Nunc cursus lig ut nisl egestas eu aliquet lorem tempor.</p>
                                    </div>
                                </li>
    
                                <li>
                                    <div className="news-list-date">
                                        03<span>DEC</span>
                                    </div>
                                    <div className="news-list-content">
                                        <h6>Sed accumsan lobortis adipiscing</h6>
                                        <p>Fusce quam leo, ultricies non malesuad quis, hendrerit in nulla. Proin eu lectusle.</p>
                                    </div>
                                </li>
    
                                <li>
                                    <div className="news-list-date">
                                        04<span>NOV</span>
                                    </div>
                                    <div className="news-list-content">
                                        <h6>Nulla malesuada massa eu arcu</h6>
                                        <p>Vivamus tincidunt enim eu mauris feugi rutrum id id lectus. Donec nec nulla duil.</p>
                                    </div>
                                </li>
    
                             
                            </ul>
 {/* <Carousel className=" new-list" axis="vertical" autoPlay infiniteLoop showIndicators={false} showArrows>
             <li>
                <div className="news-list-date">
                   01 <span>oct</span>
                </div>
                <div className="news-list-content">
                    <h6>Fusce erat massa, euismod id con</h6>
                    <p>Fusce velit mi, aliquam id volutpat in, ulc nec urna. Morbi pellentesque fentum ar.</p>
                </div>
            </li>
            <li>
                <div className="news-list-date">
                    02<span>DEC</span>
                </div>
                <div className="news-list-content">
                    <h6>Mauris rhoncus, diam non soda</h6>
                    <p>Sed eget aliquet ipsum. Nunc cursus lig ut nisl egestas eu aliquet lorem tempor.</p>
                </div>
            </li>
            <li>
                <div className="news-list-date">
                    03<span>DEC</span>
                </div>
                <div className="news-list-content">
                    <h6>Sed accumsan lobortis adipiscing</h6>
                    <p>Fusce quam leo, ultricies non malesuad quis, hendrerit in nulla. Proin eu lectusle.</p>
                </div>
            </li>
            <li className="pager">
                <div className="news-list-date">
                    04<span>NOV</span>
                </div>
                <div className="news-list-content">
                    <h6>Nulla malesuada massa eu arcu</h6>
                    <p>Vivamus tincidunt enim eu mauris feugi rutrum id id lectus. Donec nec nulla duil.</p>
                </div>
            </li>
            <li className="pager">
                <div className="news-list-date">
                    05<span>OCT</span>
                </div>
                <div className="news-list-content">
                    <h6>Fusce erat massa, euismod id con</h6>
                    <p>Fusce velit mi, aliquam id volutpat in, ulc nec urna. Morbi pellentesque fentum ar.</p>
                </div>
            </li>
           
 </Carousel> */}
                        </div>
                    </div>
                    {/* < <  footer testimonials  > > */}
                    <div className="footer-testimonials">
                    <div className="footer-title">Testimonials</div>
                        <div className="footer-testimonials-main">
                            <a className="carousel-prev" href="#"></a>
                            <a className="carousel-next" href="#"></a>
                            <ul className="testimonials-list">
                                 <li>
                                    <div className="testimonials-list-content">
                                        <h6>Joe Doe, Director, DeCompany</h6>
                                        <p>Sed semper, risus eget laoreet dictum, neques velit gravida nunc, id eleifend er.</p>
                                    </div>
                                </li>
    
                                <li className="pager">
                                    <div className="testimonials-list-content">
                                        <h6>Gemma Britt, Smooth Comm</h6>
                                        <p>Nulla lacinia volutpat dignissim. Curabit cursus lobortis consectetur. Maurisase.</p>
                                    </div>
                                </li>
    
                                <li className="pager">
                                    <div className="testimonials-list-content">
                                        <h6>Alex Cruise, Suites Ltd</h6>
                                        <p>Quisque semper congue elit eu aliquam. Aenean dolor mi, gravida eget fermente.</p>
                                    </div>
                                </li>
    
                                <li className="pager">
                                    <div className="testimonials-list-content">
                                        <h6>Ann Green, Deloitte Greece</h6>
                                        <p>Suspendisse sit amet nisi est. Ut id eros tortorad blandit tincidunt. Vel su.</p>
                                    </div>
                                </li>
    
                                <li className="pager">
                                    <div className="testimonials-list-content">
                                        <h6>Alex Cruise, Suites Ltd</h6>
                                        <p>Quisque semper congue elit eu aliquam. Aenean dolor mi, gravida eget fermente.</p>
                                    </div>
                                </li>
    
                                <li>
                                    <div className="testimonials-list-content">
                                        <h6>Ann Green, Deloitte Greece</h6>
                                        <p>Suspendisse sit amet nisi est. Ut id eros tortorad blandit tincidunt. Vel su.</p>
                                    </div>
                                </li><li>
                                    <div className="testimonials-list-content">
                                        <h6>Alex Cruise, Suites Ltd</h6>
                                        <p>Quisque semper congue elit eu aliquam. Aenean dolor mi, gravida eget fermente.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* < <  footer legal  > > */}
                    <div className="footer-legal">
                        <div className="footer-title">Legal topics</div>
                        <div className="legal-main">
                          <ul className="legal-list">
                                <li>
                                    <a href="#">Business Law</a>
                                </li>
                                <li>
                                    <a href="#">Consumer</a>
                                </li>
                                <li>
                                    <a href="#">Criminal Law</a>
                                </li>
                                <li>
                                    <a href="#">Child Custody</a>
                                </li>
                                <li>
                                    <a href="#">Civil Rights</a>
                                </li>
                                <li>
                                    <a href="#">Bankrupcty</a>
                                </li>
                                <li>
                                    <a href="#">Education</a>
                                </li>
                                <li>
                                    <a href="#">Car Accidents</a>
                                </li>
                                <li>
                                    <a href="#">Divorce</a>
                                </li>
                                <li>
                                    <a href="#">Discrimination</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
       
}