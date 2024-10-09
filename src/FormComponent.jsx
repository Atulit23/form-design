import { Form, Input, Select, Button } from 'antd';
import React, { useState } from 'react';

export default function FormComponent() {
    const [formData, setFormData] = useState({
        FullName: '',
        Email: '',
        Department: '',
        Time: '',
        Message: '',
    });

    const options = [
        { label: <span>Department 1</span>, value: "Department1" },
        { label: <span>Department 2</span>, value: "Department2" },
        { label: <span>Department 3</span>, value: "Department3" },
    ];

    const timeOptions = [
        { label: <span>4PM</span>, value: "4PM" },
        { label: <span>5PM</span>, value: "5PM" },
        { label: <span>6PM</span>, value: "6PM" },
    ];

    const handleChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <div className='container'>
            <div className="form">
                <h5 className='contact__us'>Contact Us</h5>
                <h2 className='make__appointment'>Make an Appointment</h2>
                <h2 className='book__apointment'>Book Appointment</h2>
                {/* For the web version */}
                <Form
                    name='appointment-form'
                    className='form__main'
                    layout='inline'
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        name="FullName"
                        rules={[{ required: true, message: "Please Enter Full Name" }]}
                        className='form__item'
                    >
                        <Input
                            placeholder='Full Name *'
                            className='input'
                            value={formData.FullName}
                            onChange={(e) => handleChange('FullName', e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="Email"
                        rules={[
                            { type: 'email', message: 'The input is not valid E-mail!' },
                            { required: true, message: 'Please input your E-mail!' },
                        ]}
                        className='form__item'
                    >
                        <Input
                            placeholder='Email *'
                            className='input'
                            value={formData.Email}
                            onChange={(e) => handleChange('Email', e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item name="Department" className='options'>
                        <Select
                            placeholder="Please Select"
                            options={options}
                            style={{ background: '#F9F9F9' }}
                            value={formData.Department}
                            onChange={(value) => handleChange('Department', value)}
                        />
                    </Form.Item>
                    <Form.Item name="Time" className='options'>
                        <Select
                            placeholder="4:00 Available"
                            options={timeOptions}
                            style={{ background: '#F9F9F9' }}
                            value={formData.Time}
                            onChange={(value) => handleChange('Time', value)}
                        />
                    </Form.Item>
                    <Form.Item name="Message" className='form__item'>
                        <Input.TextArea
                            rows={4}
                            placeholder='Message'
                            className='input_msg'
                            value={formData.Message}
                            onChange={(e) => handleChange('Message', e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item className='form__item'>
                        <Button type="primary" htmlType="submit" className='btn' onClick={handleSubmit}>
                            Book Appointment
                        </Button>
                    </Form.Item>
                </Form>
                {/* For the phone version, created this because layout inline won't allow for labels & input to come in vertically */}
                <Form
                    name='appointment-form-phone'
                    className='form__phone'
                    layout='vertical'
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        name="FullName"
                        label="Name *"
                        rules={[{ required: true, message: "Please Enter Full Name" }]}
                        className='form__item'
                    >
                        <Input
                            placeholder='Full Name *'
                            className='input'
                            value={formData.FullName}
                            onChange={(e) => handleChange('FullName', e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="Email"
                        label="Email address *"
                        rules={[
                            { type: 'email', message: 'The input is not valid E-mail!' },
                            { required: true, message: 'Please input your E-mail!' },
                        ]}
                        className='form__item'
                    >
                        <Input
                            placeholder='Email *'
                            className='input'
                            value={formData.Email}
                            onChange={(e) => handleChange('Email', e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item name="Department" className='options' label="Department *">
                        <Select
                            placeholder="Please Select"
                            options={options}
                            style={{ background: '#F9F9F9' }}
                            value={formData.Department}
                            onChange={(value) => handleChange('Department', value)}
                        />
                    </Form.Item>
                    <Form.Item name="Time" className='options' label="Time *">
                        <Select
                            placeholder="4:00 Available"
                            options={timeOptions}
                            style={{ background: '#F9F9F9' }}
                            value={formData.Time}
                            onChange={(value) => handleChange('Time', value)}
                        />
                    </Form.Item>
                    <Form.Item name="Message" className='form__item'>
                        <Input.TextArea
                            rows={4}
                            placeholder='Message'
                            className='input_msg'
                            value={formData.Message}
                            onChange={(e) => handleChange('Message', e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item className='form__item'>
                        <Button type="primary" htmlType="submit" className='btn' onClick={handleSubmit}>
                            Book Appointment
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
