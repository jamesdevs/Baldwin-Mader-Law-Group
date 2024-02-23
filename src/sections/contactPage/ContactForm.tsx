import Input from "@/components/input";
import { useToast } from "@/components/ui/use-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phoneNumber: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  subject: yup.string().required("Subject is required."),
  message: yup.string(),
});
const ContactInner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    try {
      const { name, email, phoneNumber, message, subject } = data;

      const formData = new FormData();
      formData.set("your-subject", subject);
      formData.set("your-name", `${name}`);
      formData.set("your-email", email);
      formData.set("phone", phoneNumber);
      formData.set("your-message", message);

      const response = await axios.post(
        process.env.NEXT_PUBLIC_CONTACT_FORM_URL!,
        formData
      );

      if (response.status === 200) {
        toast({
          title: "Success",
          description:
            "Your request has been successfully submitted. One of our staff members will contact you shortly.",
          className: "bg-green-400 text-white",
        });
        reset();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 flex flex-col"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="name"
          label="Name"
          error={errors.name}
          {...register("name")}
          required
        />
        <Input
          id="phoneNumber"
          label="Phone Number"
          {...register("phoneNumber")}
          value={watch("phoneNumber") || ""}
          phoneInput
          error={errors.phoneNumber}
          required
        />
        <Input
          id="email"
          label="Email"
          {...register("email")}
          error={errors.email}
          required
        />
        <Input
          id="subject"
          label="Subject"
          {...register("subject")}
          error={errors.subject}
          required
        />
        <Input
          className="col-span-1 sm:col-span-2"
          id="message"
          label="Message"
          {...register("message")}
          error={errors.message}
          textarea
          rows={5}
        />{" "}
        <button type="submit" className="btn btn-primary w-fit min-w-[10rem]">
          {isLoading ? "Submit..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactInner;
