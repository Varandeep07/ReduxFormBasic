import React from 'react'
import './Form.scss';
import { useSelector, useDispatch } from 'react-redux';
import {update} from '../reducers/formReducer';

const Form = () => {
  const form = useSelector((state) => state.form.value);
  const dispath = useDispatch();

  return (
    <div className="container">
    <div className="update-profile">
      <div className="edu-section">
        <h2>Edit Your Educational Profile</h2>
        <div className="education-box">
          <div className="education-fields">
            <h3>Highest Qualification </h3>
            <input type='text' className='input-field'
            onChange={(event) => {const newValue = event.target.value; dispath(update({...form, HighestQualification: newValue})); console.log(form); }}
            />
          </div>
          <div className="education-fields">
            <h3>Name of Institution </h3>
            <input type='text' className='input-field'
            onChange={(event) => {const newValue = event.target.value; dispath(update({...form, InstituteName: newValue})); console.log(form); }}           
            />
          </div>
          <div className="education-fields">
            <h3>Course </h3>
            <input type='text' className='input-field'
            onChange={(event) => {const newValue = event.target.value; dispath(update({...form, Course: newValue})); console.log(form); }}
            />
          </div>
          <div className="education-fields">
            <h3>Years of Experience </h3>
            <input type='text' className='input-field'
            onChange={(event) => {const newValue = event.target.value; dispath(update({...form, YearsExperience: newValue})); console.log(form); }}
            />
          </div>
        </div>
      </div>

      <div className="edu-section">
        <h2>Additional Details</h2>
        <p><span style={{color: '#6864ff'}}>Note:</span> Any detail that are not verified yet contribute to profile strength.</p>
        <div className="education-box">
          <div className="education-fields">
            <h3> Primary Qualification </h3>
            <input type='text' className='input-field'/>
          </div>
          <div className="education-fields">
            <h3>Name of Institution </h3>
            <input type='text' className='input-field'/>
          </div>
          <div className="education-fields">
            <h3> Intermediate Course </h3>
            <input type='text' className='input-field'/>
          </div>
          <div className="education-fields">
            <h3> Name of Institution </h3>
            <input type='text' className='input-field'/>
          </div>
          <div className="education-fields">
            <h3> Course (Intermediate) </h3>
            <input type='text' className='input-field'/>
          </div>
          <div className="education-fields">
            <h3> Year of Passing </h3>
            <input type='text' className='input-field'/>
          </div>
        </div>
      </div>

      <div className="marksheet-box">
        <button><p>Upload Final Marksheet</p></button>
      </div>

      <div className="edu-section">
        <h2> Certification / Recognition / Award (if any) </h2>
        <div className="education-box">
          <div className="education-fields">
            <h3> Title </h3>
            <input type='text' className='input-field'/>
          </div>
          <div className="education-fields">
            <h3> Name of Institution / Signatory </h3>
            <input type='text' className='input-field'/>
          </div>
          <div className="education-fields">
            <h3> Field of Recognition </h3>
            <input type='text' className='input-field'/>
          </div>
          <div className="education-fields">
            <h3> Date of Publishing </h3>
            <input type='text' className='input-field'/>
          </div>
        </div>
      </div>

      <div className="marksheet-box">
        <button><p> Upload Certificate </p></button>
      </div>
      <div className="bottom-btns">
        <button className='back-btn'> &lt; Back </button>
        <button className='update-btn'> Update </button>
      </div>
    </div>
    </div>
  )
}

export default Form;
