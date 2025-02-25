import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../LayoutAd';


const RegisterUser = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        fullName: '',
        position: '',
        institution: '',
        city: '',
        country: ''
    });
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically make an API call to register the user
        console.log('Registering user:', formData);
        setIsRegistered(true);
    };

    return (
        <div className="container">
        <Layout/>
            <div className="header">
                <div className="text">Register</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="submit-container">
                    <button type="submit" className="btn btn-primary submit">
                        Register
                    </button>
                </div>
                {isRegistered && (
                    <div className="success-message">
                        Registration successful! You can now <Link to="/stressmap/login">Login</Link>.
                    </div>
                )}
            </form>
            <style>
                {`
                    .container {
                        max-width: 400px;
                        margin: auto;
                        padding: 20px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        background-color: #fff;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                        margin-top: 50px;
                    }

                    .header {
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    .text {
                        font-size: 24px;
                        font-weight: bold;
                    }

                    .underline {
                        width: 50px;
                        height: 3px;
                        background-color: #007bff;
                        margin: 0 auto;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }

                    .inputs {
                        margin-bottom: 20px;
                    }

                    .input {
                        margin-bottom: 10px;
                        display: flex;
                        align-items: center;
                    }

                    .input input {
                        width: calc(100% - 30px);
                        padding: 10px;
                        border: none;
                        border-bottom: 2px solid #007bff;
                        outline: none;
                        font-size: 16px;
                        color: #333333;
                        background-color: transparent;
                        transition: border-bottom-color 0.3s ease; 
                    }

                    .submit-container {
                        display: flex;
                        justify-content: center;
                    }

                    .success-message {
                        text-align: center;
                        margin-top: 20px;
                        color: #28a745;
                    }
                `}
            </style>
        </div>
    );
};

export default RegisterUser;
