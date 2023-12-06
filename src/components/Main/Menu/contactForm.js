import React, { useState } from "react";

export default function ContactForm  (){
//     const [value,setValue]=useState();

//    const itemValue = ()=>{
        
//     }
        return(
            <div>
                
                <form action="">
                    <input type="text" value={'Your name*'} />
                    <input type="text" value={'Your phone*'} />
                    <input type="email" value={'Your email*'} />
                    <textarea value={'Your message*'}name="" id="" cols="38" rows="5"></textarea>
                    <button>Send</button>
                </form>
            </div>
        )
    
}