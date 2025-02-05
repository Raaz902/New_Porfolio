import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { PiTildeLight } from 'react-icons/pi';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser'

const Contact = ({ setShow }) => {
    const intialData = {
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: '',
        address: '',
    }
    const [formData, setFormData] = useState(intialData);

    const questions = [
        { id: 1, question: "Aap kaun se substances ka upyog karte hain, aur kab se?", answer: "" },
        { id: 2, question: "Aap apna addiction chhodne ki koshish pehle kabhi kar chuke hain? Agar haan, to kya hua?", answer: "" },
        { id: 3, question: "Aapko kab lagta hai ki aapka addiction aapke jeevan ko prabhavit kar raha hai?", answer: "" },
        { id: 4, question: "Aap apni zindagi mein kaunsa sabse bada badlav dekhna chahte hain?", answer: "" },
        { id: 5, question: "Agar aap nasha-mukt ho jayein, to aapke jeevan aur rishton mein kya sudhar aayega?", answer: "" },
        { id: 6, question: "Nasha chhodne ke baare mein aap kis cheez se sabse zyada dare hue hain?", answer: "" },
        { id: 7, question: "Kya aapke parivaar aur dost aapke addiction ko lekar chintit hain?", answer: "" },
        { id: 8, question: "Aapko lagta hai ki aapke parivaar ka samarthan aapke nasha-mukt hone mein madad karega?", answer: "" },
        { id: 9, question: "Kya aap apni family ke saath apne problems share karte hain?", answer: "" },
        { id: 10, question: "Kya nasha ke karan aap apni sehat mein koi problem feel karte hain?", answer: "" },
        { id: 11, question: "Kya kabhi aapne apne addiction ke karan depression, anxiety ya stress feel kiya hai?", answer: "" },
        { id: 12, question: "Aapko din ke kaun se samay mein nasha karne ki sabse zyada ichha hoti hai?", answer: "" },
        { id: 13, question: "Aap nasha chhodne ke liye kitna tayar hain? (Scale: 1-10)", answer: "" },
        { id: 14, question: "Aap apne goals achieve karne ke liye kya step lene ko tayar hain?", answer: "" },
        { id: 15, question: "Agar hum aapko ek recovery plan dein, to kya aap us par poora bharosa karenge?", answer: "" }
    ];



    const [assessmentData, setAssesmentData] = useState(questions);
    // console.log(assessmentData);

    const setData = (index, value) => {
        let copy = [...assessmentData];
        const selectedObj = copy[index];
        selectedObj.answer = value
        setAssesmentData(copy);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name) {
            toast.error("Please enter patient name");
            return
        } else if (!formData.email) {
            toast.error("Please enter your email address");
            return
        } else if (!formData.contact) {
            toast.error("Please enter your contact number");
            return
        }

        const serviceId = 'service_7vmzyca';
        const templateId = 'template_m1qogwp';
        const publickey = 'xiLVvcH8y53l3w_5i';
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_address: formData.address,
            from_contact: formData.contact,
            message: getMessage() || '',
        }
        console.log(serviceId, templateId, templateParams, publickey);
        // return
        emailjs.send(serviceId, templateId, templateParams, publickey).then(response => {
            console.log(response.status);
            if (response.status === 200) {
                toast.success("Thank you for reaching out! Our team will get in touch with you shortly.");
                setShow(false);
            }

        }).catch(error => {
            console.log(error);
            toast.success("Error while sending your message");
        })


    }

    const getMessage = () => {
        let message = formData.message + '\n';
        assessmentData.forEach((data, index) => {
            message = message + '\n' + `QUESTION (${index + 1}): ` + data.question + '\n' + `ANSWER: ` + data.answer + '\n';
        })
        return message;
    }

    return (
        <div className="my-1 flex justify-center items-start bg-[#F9F8F8] lg:p-5 p-3 col-span-2 pt-3 " id='contact'>

            <div className="w-11/12">
                <form action="post" onSubmit={handleSubmit}>



                    {/* <div className="bg-news-image bg-cover bg-center pb-3">
                        <Fade triggerOnce={true} direction='left'>
                            <div className='h-[4.5rem] p-0 flex justify-center  text-7xl  text-cyan text-center  font-bold '><PiTildeLight className='p-0 m-0 transform' style={{ transform: 'scaleX(1.5) scaleY(0.7)' }} size={100} /></div>
                        </Fade>
                        <Fade triggerOnce={true} direction='right'>
                            <p className='text-3xl md:text-4xl text-slate-800 text-center pt-0 mt-0 font-bold font-nunito'>Contact Us</p>
                        </Fade>
                    </div> */}


                    <div className="grid sm:grid-cols-2 grid-cols-1  gap-6 pt-4">
                        {/* Name Field */}
                        <div className="flex flex-col sm:col-span-1 col-span-2">
                            <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">Name <span className="text-red-600">*</span></label>
                            <input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData((preData) => ({ ...preData, name: e.target.value }))}
                                type="text"
                                placeholder="Enter your name"
                                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col sm:col-span-1 col-span-2">
                            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">Email <span className="text-red-600">*</span></label>
                            <input
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData((preData) => ({ ...preData, email: e.target.value }))}
                                type="text"
                                placeholder="Enter your email"
                                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="flex flex-col sm:col-span-1 col-span-2">
                            <label htmlFor="contact" className="mb-1 text-sm font-medium text-gray-700">Phone <span className="text-red-600">*</span></label>
                            <input
                                id="contact"
                                value={formData.contact}
                                onChange={(e) => setFormData((preData) => ({ ...preData, contact: e.target.value }))}
                                type="text"
                                placeholder="Enter your phone number"
                                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Subject Field */}
                        <div className="flex flex-col sm:col-span-1 col-span-2">
                            <label htmlFor="subject" className="mb-1 text-sm font-medium text-gray-700">Subject </label>
                            <input
                                id="subject"
                                value={formData.subject}
                                onChange={(e) => setFormData((preData) => ({ ...preData, subject: e.target.value }))}
                                type="text"
                                placeholder="Enter the subject"
                                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="flex flex-col col-span-2">
                            <label htmlFor="message" className="mb-1 text-sm font-medium text-gray-700">Message </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData((preData) => ({ ...preData, message: e.target.value }))}
                                placeholder="Enter your message"
                                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                rows={2}
                            ></textarea>
                        </div>
                        <div className="flex flex-col col-span-2">
                            <label htmlFor="address" className="mb-1 text-sm font-medium text-gray-700">Address </label>
                            <textarea
                                id="address"
                                value={formData.address}
                                onChange={(e) => setFormData((preData) => ({ ...preData, address: e.target.value }))}
                                placeholder="Enter your address"
                                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                rows={2}
                            ></textarea>
                        </div>
                    </div>
                    <p className='text-xl font-nunito font-bold text-start  text-cyan pb-0 mt-4 mb-0'>Assessment Questions (Optional)</p>
                    <p className='text-sm md:text-md text-black font-rubik'>Yadi aap apne Free Counseling sessions ke liye questions banana chahte hain, to yahaan kuch ideas hain jo patients ke addiction aur unke mental health status ko samajhne mein madad karenge.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {
                            assessmentData?.map((question, index) => (
                                <div className="flex flex-col col-span-2">
                                    <label htmlFor={question.id} className="mb-1 text-sm font-medium text-gray-700">{question.question}</label>
                                    <textarea
                                        id={question.id}
                                        value={question.answer}
                                        onChange={(e) => setData(index, e.target.value)}
                                        placeholder="Enter your answer"
                                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        rows={1}
                                    />
                                </div>
                            ))
                        }

                        {/* Submit Button */}
                        <div className="w-48">
                            <button type='submit' className="bg-cyan hover:bg-cyan text-white p-3 rounded-lg font-rubik font-medium text-md w-full">
                                Submit Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <CarouselComponent /> */}
        </div>
    );
}

export default Contact;
