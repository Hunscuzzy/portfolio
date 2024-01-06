"use client";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<ContactFormData>();

  function onSubmit(data: ContactFormData) {
    sendEmail(data);
  }

  return (
    <form
      className='mx-auto mt-16 max-w-lg sm:mt-20'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor='name' className='block text-sm font-semibold'>
          Full name
        </label>
        <input
          type='text'
          id='name'
          autoComplete='given-name'
          className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <label htmlFor='email' className='block text-sm font-semibold'>
          Email
        </label>
        <input
          {...register("email", { required: true })}
          type='email'
          id='email'
          autoComplete='email'
          className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </div>
      <div>
        <label htmlFor='phone' className='block text-sm font-semibold'>
          Phone number
        </label>
        <input
          {...register("phone", { required: true })}
          type='tel'
          id='phone'
          autoComplete='tel'
          className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </div>
      <div>
        <label htmlFor='message' className='block text-sm font-semibold'>
          Message
        </label>
        <textarea
          {...register("message", { required: true })}
          id='message'
          rows={4}
          className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          defaultValue={""}
        />
      </div>
      <div className='mt-10'>
        <button
          type='submit'
          className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Lets talk
        </button>
      </div>
    </form>
  );
}
