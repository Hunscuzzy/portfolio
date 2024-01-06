"use client";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import Label from "./form/label";

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
      className='relative mx-auto mt-16 max-w-lg sm:mt-20 space-y-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Label name='name'>Full name</Label>
        <input
          type='text'
          id='name'
          autoComplete='given-name'
          className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <Label name='email'>Email</Label>
        <input
          {...register("email", { required: true })}
          type='email'
          id='email'
          autoComplete='email'
          className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </div>
      <div>
        <Label name='phone'>Phone number</Label>
        <input
          {...register("phone", { required: true })}
          type='tel'
          id='phone'
          autoComplete='tel'
          className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </div>
      <div>
        <Label name='message'>Message</Label>
        <textarea
          {...register("message", { required: true })}
          id='message'
          rows={4}
          className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </div>
      <button
        type='submit'
        className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Lets talk
      </button>
    </form>
  );
}
