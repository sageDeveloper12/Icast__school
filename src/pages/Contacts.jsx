
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Contact from '../components/contacts/Contact'

const Contacts = () => {
    const [formData, setFormData] = useState({
        email: '',
        tel: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 6.5244, // Change this to your organization's latitude
        lng: 3.3792, // Change this to your organization's longitude
    };

    return (
        <div className='contact-form'>
            <Contact/>
            <form onSubmit={handleSubmit} className="form-container container">
                <div className="form-row">
                    <div className="form-input">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-input">
                        <input
                            type="tel"
                            name="tel"
                            placeholder="Telephone"
                            value={formData.tel}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-input">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>

            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                    googleMapsScript={{ async: true }}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Contacts;
