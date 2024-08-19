import React, { useEffect, useState } from 'react';
import './Vclub_Form.css';
import { Button } from '../Button/Button';
import axios from 'axios';
import PulseLoader from 'react-spinners/PulseLoader';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from 'react-hot-toast';


function Vclub_Form() {
    const [confirmationFocus, setconfirmationFocus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedInterest, setSelectedInterest] = useState('');
    const [validconfirmation, setValidconfirmation] = useState('');
    const [values, setValues] = useState({
        fname: '',
        lname: '',
        address: '',
        email: '',
        phone: '',
        whatsapp: '',
        age: '',
        gender: '',
        password: '',
        confirm_password: '',
        education: '',
        language: '',
        socials: '',
        volunteer_interest_administration: false,
        volunteer_interest_field_work: false,
        volunteer_interest_campaigning: false,
        volunteer_interest_media_maintenance_gardening: false,
        volunteer_interest_health_wellness_disability: false,
        volunteer_interest_festivals_culture: false,
        volunteer_interest_other: false,
        talents_qu: '',
        availability_qu: '',
        qualifications_qu: '',
        notes: ''
    });

    useEffect(() => {
        setValidconfirmation(values.password === values.confirm_password);
    }, [values.password, values.confirm_password])


    function handleChange(e) {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let response = null;
    
        try {
            response = await axios.post('/API/Form-Volunteer/Volunteer', {
                fname: values.fname,
                lname: values.lname,
                email: values.email,
                phone: values.phone,
                whatsapp: values.whatsapp,
                age: values.age,
                gender: values.gender,
                password: values.password,
                password_confirmation: values.confirm_password,
                education: values.education,
                language: values.language,
                social_media_links: values.socials,
                interest_administration: values.volunteer_interest_administration,
                interest_field_work: values.volunteer_interest_field_work,
                interest_campaigning: values.volunteer_interest_campaigning,
                interest_volunteer_coordination: values.volunteer_interest_coordination,
                interest_media_maintenance_gardening: values.volunteer_interest_media_maintenance_gardening,
                interest_health_wellness_disability: values.volunteer_interest_health_wellness_disability,
                interest_festivals_culture: values.volunteer_interest_festivals_culture,
                interest_other: values.volunteer_interest_other,
                talent: values.talents_qu,
                time_available: values.availability_qu,
                skills: values.qualifications_qu,
                other_notes: values.notes,
            });
    
            // Assuming the API returns the success message in response.data.message
            toast.success(response.data.message, {
                position: "top-center",
                duration: 3000,
                className: " text-white rounded-5",
                style: { backgroundColor: '#3AB2A6' ,
                         width: '100%'
                }
            });
    
        } catch (err) {
            // Assuming the error message is in err.response.data.message
            toast.error(err.response?.data?.message || "Something went wrong", {
                position: "top-center",
                duration: 3000,
                className: "custom-toast",
            });            
        } finally {
            setLoading(false);
            // Reset form values if needed
            setValues({
                fname: '',
                lname: '',
                address: '',
                email: '',
                phone: '',
                whatsapp: '',
                age: '',
                gender: '',
                password: '',
                confirm_password: '',
                education: '',
                language: '',
                socials: '',
                volunteer_interest_administration: false,
                volunteer_interest_field_work: false,
                volunteer_interest_campaigning: false,
                volunteer_interest_media_maintenance_gardening: false,
                volunteer_interest_health_wellness_disability: false,
                volunteer_interest_festivals_culture: false,
                volunteer_interest_other: false,
                talents_qu: '',
                availability_qu: '',
                qualifications_qu: '',
                notes: ''
            });
        }
    };
    

    const handleRadioChange = (event) => {

        setValues({
            ...values,
            volunteer_interest_administration: false,
            volunteer_interest_field_work: false,
            volunteer_interest_campaigning: false,
            volunteer_interest_media_maintenance_gardening: false,
            volunteer_interest_health_wellness_disability: false,
            volunteer_interest_festivals_culture: false,
            volunteer_interest_other: false, // Update the state with the selected value
        });

        if (event.target.value == 'Administration'){
            setValues({
                    ...values,
                    volunteer_interest_administration: true,
                    volunteer_interest_field_work: false,
                    volunteer_interest_campaigning: false,
                    volunteer_interest_media_maintenance_gardening: false,
                    volunteer_interest_health_wellness_disability: false,
                    volunteer_interest_festivals_culture: false,
                    volunteer_interest_other: false, // Update the state with the selected value
            });
        }
        else if (event.target.value == 'Field Work'){
            setValues({
                ...values,
                volunteer_interest_field_work: true,
                volunteer_interest_administration: false,
                volunteer_interest_campaigning: false,
                volunteer_interest_media_maintenance_gardening: false,
                volunteer_interest_health_wellness_disability: false,
                volunteer_interest_festivals_culture: false,
                volunteer_interest_other: false, // Update the state with the selected value
            });
        }
        else if (event.target.value == 'Campaigning'){
            setValues({
                ...values,
                volunteer_interest_campaigning: true,
                volunteer_interest_administration: false,
                volunteer_interest_field_work: false,
                volunteer_interest_media_maintenance_gardening: false,
                volunteer_interest_health_wellness_disability: false,
                volunteer_interest_festivals_culture: false,
                volunteer_interest_other: false, // Update the state with the selected value
        });
        }
        else if (event.target.value == 'Festivals and Culture'){
            setValues({
                ...values,
                volunteer_interest_festivals_culture: true,
                volunteer_interest_administration: false,
                volunteer_interest_field_work: false,
                volunteer_interest_campaigning: false,
                volunteer_interest_media_maintenance_gardening: false,
                volunteer_interest_health_wellness_disability: false,
                volunteer_interest_other: false, // Update the state with the selected value
        });
        }
        else if (event.target.value == 'Media, Maintenance, Gardening'){
            setValues({
                ...values,
                volunteer_interest_media_maintenance_gardening: true,
                volunteer_interest_administration: false,
                volunteer_interest_field_work: false,
                volunteer_interest_campaigning: false,
                volunteer_interest_health_wellness_disability: false,
                volunteer_interest_festivals_culture: false,
                volunteer_interest_other: false, // Update the state with the selected value
        });
        }
        else if (event.target.value == 'Health and Wellness, Disability Services'){
            setValues({
                ...values,
                volunteer_interest_health_wellness_disability: true,
                volunteer_interest_administration: false,
                volunteer_interest_field_work: false,
                volunteer_interest_campaigning: false,
                volunteer_interest_media_maintenance_gardening: false,
                volunteer_interest_festivals_culture: false,
                volunteer_interest_other: false, // Update the state with the selected value
        });
        }
        else if (event.target.value == 'Other'){
            setValues({
                ...values,
                volunteer_interest_other: true, 
                volunteer_interest_administration: false,
                volunteer_interest_field_work: false,
                volunteer_interest_campaigning: false,
                volunteer_interest_media_maintenance_gardening: false,
                volunteer_interest_health_wellness_disability: false,
                volunteer_interest_festivals_culture: false,
        });
        }


    };

    return (
        <div className='container my-5'>
            <h3>Personal Information</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="Fname">First Name:</label>
                        <input
                            placeholder="Type your first name"
                            className="form-control vclub-ins mt-2"
                            type="text"
                            id="Fname"
                            name="fname"
                            value={values.fname}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Lname">Last Name:</label>
                        <input
                            placeholder="Type your last name"
                            className="form-control vclub-ins mt-2"
                            type="text"
                            id="Lname"
                            name="lname"
                            value={values.lname}
                            onChange={handleChange}
                            required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="Address">Address:</label>
                        <input
                            placeholder="Type your address"
                            className="form-control vclub-ins mt-2"
                            type="text"
                            id="Address"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Email">Email:</label>
                        <input
                            placeholder="Type your email"
                            className="form-control vclub-ins mt-2"
                            type="email"
                            id="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="Phone">Phone Number:</label>
                        <input
                            placeholder="Type your phone number"
                            className="form-control vclub-ins mt-2"
                            type="tel"
                            id="Phone"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="WhatsApp">WhatsApp:</label>
                        <input
                            placeholder="Type your WhatsApp number"
                            className="form-control vclub-ins mt-2"
                            type="tel"
                            id="WhatsApp"
                            name="whatsapp"
                            value={values.whatsapp}
                            onChange={handleChange}
                            required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="Age">Age:</label>
                        <input
                            placeholder="Type your age"
                            className="form-control vclub-ins mt-2"
                            type="number"
                            id="Age"
                            name="age"
                            value={values.age}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Gender">Gender:</label>
                        <select
                            className="form-control vclub-ins mt-2"
                            id="Gender"
                            name="gender"
                            value={values.gender}
                            onChange={handleChange}
                            required>
                            <option value="" disabled>Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="non-binary">Non-binary</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="Password">Password:</label>
                        <input
                            placeholder="********"
                            className="form-control vclub-ins mt-2"
                            type="password"
                            id="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Confirm_Password">Confirm Password:</label>
                        <input
                            placeholder="********"
                            className="form-control vclub-ins mt-2"
                            type="password"
                            id="Confirm_Password"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            aria-invalid={validconfirmation ? "false" : "true"}
                            required
                            onFocus={() => setconfirmationFocus(true)}
                            onBlur={() => setconfirmationFocus(false)}/>
                            <p id="confirmnote" className={confirmationFocus && !validconfirmation ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Must match the first password input field.
                            </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="Education">Education:</label>
                        <input
                            placeholder="Type your education"
                            className="form-control vclub-ins mt-2"
                            type="text"
                            id="Education"
                            name="education"
                            value={values.education}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Language">Language:</label>
                        <select
                            className="form-control vclub-ins mt-2"
                            id="Language"
                            name="language"
                            value={values.language}
                            onChange={handleChange}
                            required>
                            <option value="" disabled>Select</option>
                            <option value="Arabic">Arabic</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3 px-2">
                    <label htmlFor="Socials">Social Media Links</label>
                    <textarea className="form-control vclub-ins mt-3" 
                        id="Socials" 
                        rows="3" 
                        name='socials'
                        value={values.socials} 
                        onChange={handleChange}></textarea>
                </div>
                <h3 className='vs-form-h1 mt-1 fw-medium'>Your Volunteer Interest</h3>
                <div onChange={handleRadioChange}>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="volunteer_interest"
                        id="Administration"
                        value="Administration"
                        />
                        <label className="form-check-label" htmlFor="Administration">
                        Administration
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="volunteer_interest"
                        id="Field_Work"
                        value="Field Work"
                        />
                        <label className="form-check-label" htmlFor="Field_Work">
                        Field Work
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="volunteer_interest"
                        id="Campaigning"
                        value="Campaigning"
                        />
                        <label className="form-check-label" htmlFor="Campaigning">
                        Campaigning
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="volunteer_interest"
                        id="Volunteer_Coordination"
                        value="Volunteer Coordination"
                        />
                        <label className="form-check-label" htmlFor="Volunteer_Coordination">
                        Volunteer Coordination
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="volunteer_interest"
                        id="MMG"
                        value="Media, Maintenance, Gardening"
                        />
                        <label className="form-check-label" htmlFor="MMG">
                        Media, Maintenance, Gardening
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="volunteer_interest"
                        id="HWD"
                        value="Health and Wellness, Disability Services"
                        />
                        <label className="form-check-label" htmlFor="HWD">
                        Health and Wellness, Disability Services
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="volunteer_interest"
                        id="Festivals_Culture"
                        value="Festivals and Culture"
                        />
                        <label className="form-check-label" htmlFor="Festivals_Culture">
                        Festivals and Culture
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="volunteer_interest"
                        id="Other"
                        value="Other"
                        />
                        <label className="form-check-label" htmlFor="Other">
                        Other
                        </label>
                    </div>
                </div>
                <div className="row mt-3 px-2">
                    <label htmlFor="Talent">
                        Do You Have Any Talents?
                    </label>
                    <textarea 
                        className="form-control vclub-ins mt-3" 
                        id="Talent" 
                        rows="3" 
                        name="talents_qu" 
                        value={values.talents_qu} 
                        onChange={handleChange}>
                    </textarea>
                </div>
                <div className="row mt-3 px-2">
                    <label htmlFor="Aval">What time is most convenient for you to volunteer?</label>
                    <select
                        className="form-control vclub-ins mt-2"
                        id="Aval"
                        name="availability_qu"
                        value={values.availability_qu}
                        onChange={handleChange}
                        required>
                        <option value="" disabled>Select</option>
                        <option value="Weekdays">Weekdays</option>
                        <option value="Weekends">Weekends</option>
                        <option value="Evenings">Evenings</option>
                        <option value="Flexible">Flexible</option>
                    </select>
                </div>
                <div className="row mt-3 px-2">
                    <label htmlFor="Quals">
                        Summarize the special skills and qualifications you have acquired from fieldwork, previous volunteer work, or other activities, including hobbies or sports.
                    </label>
                    <textarea 
                        className="form-control vclub-ins mt-3" 
                        id="Quals" 
                        rows="3" 
                        name="qualifications_qu" 
                        value={values.qualifications_qu} 
                        onChange={handleChange}>
                    </textarea>
                </div>
                <div className="row mt-3 px-2">
                    <label htmlFor="Onotes">Other Notes</label>
                    <textarea className="form-control vclub-ins mt-3" 
                        id="Onotes" 
                        rows="3" 
                        name='notes'
                        value={values.notes} 
                        onChange={handleChange}></textarea>
                </div>
                <div className='mb-2 mt-3 w-50 mx-auto'>
                    <Button
                        className='btns'
                        buttonStyle='btn--orange'
                        type="submit">
                        {loading ? <PulseLoader className='mt-1' size='16' color='white'/>:
                            "Send Form"}
                    </Button>
                </div>
        </form>
        {console.log(values)}
    </div>
  )
}

export default Vclub_Form
