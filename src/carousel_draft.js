
const [minSize,setMinSize]=useState(0)
const [carouselTop,changeCarousel]=useState();
const [maxSize,setMaxSize]=useState(0)
const [intervalCount,setIntervalTime]=useState('40')
let worked;

// const count =0;

useEffect(()=>{
    

    let carousel =document.querySelector('.App').querySelector('.carousel');
    let prevArrow =document.querySelector('.App').querySelector('.carousel-prev');
    carousel.parentElement.style.overflow='hidden';
    console.log('carousel style top: ',carousel.style.top)
    changeCarousel(carousel)
    

    // Call VerticalEndSize

    if(carousel.lastChild.className != 'clone'){
        setTimeout(()=>{
            console.log(VerticalEndSize())
        },100)
    }
   
    



   
   // Left size for Horizontal

   
//   function HorizontalEndSize(){
//         let Width;
//         let fullWidth=0;
//         Width = carousel.lastChild.offsetWidth;
//         Width +=" "+ window.getComputedStyle(carousel.lastChild).marginLeft;
//         Width +=" "+ window.getComputedStyle(carousel.lastChild).marginRight
//         Width +=" "+ window.getComputedStyle(carousel.lastChild).paddingLeft;
//         Width +=" "+ window.getComputedStyle(carousel.lastChild).paddingRight;
//         Width +=" "+ window.getComputedStyle(carousel.lastChild).borderLeft.split(' ')[0];
//         Width +=" "+ window.getComputedStyle(carousel.lastChild).borderRight.split(' ')[0]
//         Width.replaceAll('px',"").split(' ').forEach((item)=>{
//             fullWidth+= +item;
//         })
//   }



   // Add copy child into carousel
   
 setTimeout(()=>{
    if(carousel.lastChild.className != 'clone'){
        carousel.childNodes.forEach((item)=>{
           
            let element = item.cloneNode(true);
            element.className +='clone';
            carousel.appendChild(element);
        })
    }

 },200)

 function carouselAutoplay(){
    if(worked!=true){
        setInterval(()=>{
            prevArrow.click()
        },3000)

        worked=true;
    }

 }
 carouselAutoplay()



       
 

 },[])
//  -------------------------------

  // Top size for vertical

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

 const getCarouselTop=()=>{
    console.log('before debug',carouselTop.style.top)
    return carouselTop.style.top;
 }



const topCount= useRef() ;
    let setwillSize='';
    
    
    const increase = function (){
        let i=0;
        
    
        const increaseInterval = setInterval(()=>{

            i+=10;
            getCarouselTop()
            setwillSize=Number(getCarouselTop().replace("px",""))+10+'px';
           
            if(Number(getCarouselTop().replace("px","")) > maxSize){
                topCount.current.style.top=minSize+'px'
            }else{
            }
            
            i>100 ? clearInterval(increaseInterval):topCount.current.style.top = setwillSize;
    
        },intervalCount) 
    
    
    }
    
    
    function decrease(){
        let i=0;
        const decreaseInterval = setInterval(()=>{
            
            i+=10;
            setwillSize=Number(getCarouselTop().replace("px",""))-10+'px';
            if( Number(getCarouselTop().replace("px","")) < minSize ){
                topCount.current.style.top=maxSize+'px'
            }else{

            }
            i>100 ? clearInterval(decreaseInterval):topCount.current.style.top = setwillSize;
    
        },intervalCount) 
    }