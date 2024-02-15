import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "@/components/input";
import Select from "@/components/select";
import { useToast } from "@/components/ui/use-toast";
import services from "@/constants/services";

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
  service: yup.string().required("Please select one option"),
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
      const { name, email, phoneNumber, message, service } = data;

      const formData = new FormData();
      formData.set("your-subject", `New client: ${name} - ${service}`);
      formData.set("your-name", `${name}`);
      formData.set("service", `${service}`);
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
        setValue("service", "");
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
        <Select
          options={[
            {
              value: "",
              label: "Please select an option",
            },
            ...services.map((item) => ({
              value: item.title,
              label: item.title,
            })),
          ]}
          {...register("service")}
          error={errors.service}
          id="service"
          label="How Can We Help You?"
          placeholder="Please select"
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
