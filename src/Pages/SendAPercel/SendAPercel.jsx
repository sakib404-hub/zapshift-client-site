import React from 'react';
import { useForm } from 'react-hook-form';

const SendAPercel = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleFormSubmission = (data) => {
        console.log('Form is Submitting!', data);
    }
    return (
        <div className='bg-[#ddf2ff]'>
            <div className='border-b-2 border-gray-300 py-4'>
                <h3 className='text-3xl font-bold text-center'>Send A Percel</h3>
                <h4 className='text-2xl font-semibold text-center'>Enter Your Percel Details</h4>
            </div>
            <form
                onSubmit={handleSubmit(handleFormSubmission)}>
                {/* percel type  */}
                <div className='flex gap-5 p-5'>
                    <label htmlFor="document"
                        className='flex items-center gap-2 cursor-pointer font-semibold'>
                        <input
                            type="radio"
                            name="document"
                            value='document'
                            id='document'
                            {
                            ...register('parcelType')
                            }
                            className="radio radio-primary"
                            defaultChecked />
                        Document
                    </label>

                    <label
                        className='flex items-center cursor-pointer font-semibold'
                        htmlFor="non-document">
                        <input
                            type="radio"
                            name="non-document"
                            value='non-document'
                            id='non-document'
                            {
                            ...register('parcelType')
                            }
                            className="radio radio-primary mr-2"
                            defaultChecked />
                        Non-Document
                    </label>
                </div>

                {/* percel information : Name and weight  */}
                <div></div>

                {/* two colum sender information and receiver information  */}
                <div>
                    {/* sender information  */}
                    <div></div>
                    {/* receiver information  */}
                    <div></div>
                </div>

                {/* submit button  */}
                <div className='flex items-center justify-center font-bold my-5'>
                    <button type='submit' className='btn btn-primary text-black font-bold'>Send Percel</button>
                </div>
            </form>
        </div>
    );
};

export default SendAPercel;