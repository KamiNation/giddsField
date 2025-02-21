"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios"
import toast from "react-hot-toast";

const schema = z.object({
    name: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email"),
    subject: z.string().min(10, "Subject is required"),
    message: z.string().min(10, "Message is required"),
});


type FormValues = z.infer<typeof schema>;


const ContactForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await axios.post("/api/contact", data);
            toast.success("Data submitted successfully")
            console.log("Server Response:", data);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to submit form!");
        }
    };


    return (
        <section id="contact-contact" className=" gap-2 flex flex-col flex-1 ">

            <form onSubmit={handleSubmit(onSubmit)} className=" flex  flex-col gap-4">

                <div className="pb-4 flex flex-col">
                    <label htmlFor="name" className="text-black pr-4 font-bold">Full Name</label>
                    <input type="text" id="name" placeholder="Full Name" {...register("name")} className=" border border-solid rounded-sm pl-2" />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <div className="pb-4 flex flex-col">
                    <label htmlFor="email" className="text-black pr-4 font-bold">Email</label>
                    <input type="email" id="email" placeholder="Email" {...register("email")} className="pl-2 border border-solid rounded-sm " />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div className="pb-4 flex flex-col">
                    <label htmlFor="subject" className="text-black pr-4 font-bold">Subject</label>
                    <input type="subject" id="subject" placeholder="Subject" {...register("subject")} className="pl-2 border border-solid rounded-sm text-black" />
                    {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
                </div>

                <div className="pb-4 flex flex-col">
                    <label htmlFor="message" className="text-black pr-4 font-bold">Message</label>
                    <textarea placeholder="Message" id="message" {...register("message")} className="pl-2 text-black border border-solid rounded-sm h-32"></textarea>
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                </div>


                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-900 font-bold">Send Message</button>
            </form>
        </section>

    )
}

export default ContactForm