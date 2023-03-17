import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import b1 from '../assets/banner-1.jpg';
import b2 from '../assets/banner-2.jpg';
import b3 from '../assets/banner-3.jpg';
import b4 from '../assets/banner-4.jpg';


const Carrusell=()=>{
        const[index,setIndex] = useState(0);

        const handleSelect = (selectedIndex,e)=>{
           
            setIndex(selectedIndex);
        }
    
    return(
    <>
    <Carousel fade variant="dark" activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
                <img className="d-block w-100" src={b1} alt="first slide" />
            
        </Carousel.Item>
        <Carousel.Item>
                <img className="d-block w-100" src={b2} alt="Second slide" />
            
        </Carousel.Item>
        <Carousel.Item>
                <img className="d-block w-100" src={b3} alt="Second slide" />
           
        </Carousel.Item>
        <Carousel.Item>
                <img className="d-block w-100" src={b4} alt="Second slide" />
            
        </Carousel.Item>
    </Carousel>
    </>
    )
}


export default Carrusell;