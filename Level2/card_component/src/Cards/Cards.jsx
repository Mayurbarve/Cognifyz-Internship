import React, {Component} from 'react';
import Card from './CardUI';
import img1 from"../Accets/Andromeda Galaxy.webp";
import img2 from"../Accets/Cartwheel Galaxy.webp";
import img3 from"../Accets/Centaurus A.webp";

class Cards extends Component {
    render() {
        return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className='col-md-4'>
                    <Card imgsrc={img1} title="Andromeda Galaxy" paragraph="The 
                        Andromeda Galaxy, also known as Messier 31 (M31), is the nearest 
                        major galaxy to our Milky Way. It resides approximately 2.5 
                        million light years away from Earth" links="https://science.nasa.gov/image-detail/wise-infrared-view-of-andromeda-
                        galaxy-and-companions-3/"/>
                </div>
                <div className='col-md-4'>
                    <Card imgsrc={img2} title="Cartweel Galaxy" paragraph="The 
                        Cartwheel Galaxy, also known as ESO 350-40 or PGC 2248, 
                        resides approximately 500 million light-years away in the 
                        constellation Sculptor, it  is classified as a lenticular ring galaxy." links="https://science.nasa.gov/image-
                        detail/stsci-01g8jzq6gwxhex15pyy60wdrsk-2/"/>
                </div>
                <div className='col-md-4'>
                    <Card imgsrc={img3} title="Centaurus Galaxy" paragraph="The 
                        Centaurus A, also known as NGC 5128 or Caldwell 77, is a 
                        captivating galaxy residing in the constellation of Centaurus, is also one of the closest radio galaxies to Earth." links="
                         https://science.nasa.gov/image-detail/cena-lic-lp-nature-cropped/"/>
                </div>
                
            </div>
        </div>
        );
    };
};

export default Cards;

