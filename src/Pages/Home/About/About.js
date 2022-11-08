import React from 'react';
import Button from 'react-bootstrap/Button';
import img from '../../../assets/slide1.jpg'

const About = () => {
    return (
        <div className='container'>
            <div className="section-title text-center py-5">
                <h1>About Me</h1>
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. <br />3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col-lg-6 mb-3">
                    <h1 className='text-primary'>Welcome to Dentist</h1>
                    <p className='text-secondary'>Dentist is a Responsive One Page WordPress Theme special crafted for dentist, dentist office. We have included all sections that a dental website need. Gallery (before&after), testimonials, doctors, office description, request form, contacts, services. All this stuff is fully editable, you can change colors, fonts, order, images, texts, and no coding skills is necessary.</p>
                    <p className='text-secondary'>Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                    <Button variant="outline-success">Read More</Button>
                </div>
                <div className="col-lg-6">
                    <img className='img-fluid w-100 rounded shadow' src={img} alt="Doctor" />
                </div>
            </div>
        </div>
    );
};

export default About;