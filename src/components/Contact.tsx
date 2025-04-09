import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type FormData = {
  subject: string;
  email: string;
  name: string;
  message: string;
};

const Contact = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const formRef = useRef<HTMLFormElement>(null);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // console.log(import.meta.env.VITE_APP_EMAIL_SERVICE_ID);
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID as string,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID as string,
        formRef.current as HTMLFormElement,
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsDialogOpen(true);
          reset();

          //   toast.success("Thank you, I will reply as soon as possible :)");
        },
        (error) => {
          console.log(error);
          //   toast.error(error.text);
        }
      );
  };

  //   console.log(watch("name")); // watch input value by passing the name of it

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     setIsDialogOpen(true);
  //   }
  // }, [isSubmitSuccessful]);

  return (
    <div id="contact">
      <div>
        <div className="text-center mb-10">
          <h4 className="text-muted-light text-sm  tracking-wider mb-2  tablet:text-base tablet:tracking-widest">
            <span className="text-primary text-xl font-semibold">
              {t("workTogether")}
            </span>
            <br /> {t("contactDesc")} :)
          </h4>
          {/* <h2 className="text-primary text-xl font-semibold">Contact Me</h2> */}
        </div>
        <div className="grid gap-8 tablet:grid-cols-3 laptop:grid-cols-7">
          <div className="grid gap-4 tablet:col-span-1 laptop:col-span-2 ">
            <div className="bg-bg-dark py-4  rounded-3xl  hover:bg-transparent hover:border hover:border-primary-dark    ">
              <div className="flex flex-col justify-center items-center">
                <AiOutlineMail className="h-6 w-6 text-primary" />
                <h4 className="mt-4  font-semibold">Email</h4>
                <p className="text-muted  font-semibold text-sm mb-4">
                  abdi@swiftapp.ch
                </p>
                <a
                  href="mailto: abdi@swiftapp.ch"
                  target="_blank"
                  className="text-primary text-sm font-semibold"
                >
                  {t("sendMsg")}
                </a>
              </div>
            </div>
            <div className="bg-bg-dark py-4  rounded-3xl  hover:bg-transparent hover:border hover:border-primary-dark  ">
              <div className="flex flex-col justify-center items-center">
                <RiMessengerLine className="h-6 w-6 text-primary" />
                <h4 className="mt-4  font-semibold">Messenger</h4>
                <p className="text-muted font-semibold text-sm mb-4">
                  Abdu Ahmed
                </p>
                <a
                  href="https://m.me/abdulkadir.ahmed.3139"
                  target="_blank"
                  className="text-primary text-sm font-semibold"
                >
                  {t("sendMsg")}
                </a>
              </div>
            </div>
            <div className="bg-bg-dark py-4  rounded-3xl  hover:bg-transparent hover:border hover:border-primary-dark ">
              <div className="flex flex-col justify-center items-center">
                <FaWhatsapp className="h-6 w-6 text-primary" />
                <h4 className="mt-4  font-semibold">WhatsApp</h4>
                <p className="text-muted font-semibold text-sm mb-4">
                  +41 76 214 76 90
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=+41762147690"
                  target="_blank"
                  className="text-primary text-sm font-semibold"
                >
                  {t("sendMsg")}
                </a>
              </div>
            </div>
          </div>
          <div className="tablet:col-span-2  tablet:self-center laptop:col-span-4 laptop:col-start-4 ">
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="mt-7 space-y-5"
              noValidate
            >
              <div>
                <input
                  type="text"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Please write the subject",
                    },
                  })}
                  className="block w-full bg-transparent py-4 px-6 border-2 border-primary-dark rounded-lg text-muted placeholder:text-sm t placeholder:text-muted font-semibold focus:outline-none focus:border-primary"
                  placeholder={t("subject")}
                />
                <p className="px-2 text-red-500 text-sm ">
                  {errors.subject?.message}
                </p>
              </div>
              <div>
                <input
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email.",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please enter valid email address.",
                    },
                  })}
                  className="block w-full bg-transparent py-4 px-6 border-2 border-primary-dark rounded-lg text-muted placeholder:text-sm t placeholder:text-muted font-semibold focus:outline-none focus:border-primary"
                  placeholder={t("email")}
                />
                <p className="px-2 text-red-500 text-sm ">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <input
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name or your enterprise name",
                    },
                  })}
                  className="block w-full bg-transparent py-4 px-6 border-2 border-primary-dark rounded-lg text-muted placeholder:text-sm t placeholder:text-muted font-semibold focus:outline-none focus:border-primary"
                  placeholder={t("name")}
                />
                <p className="px-2 text-red-500 text-sm ">
                  {errors.name?.message}
                </p>
              </div>

              <div>
                <textarea
                  placeholder={t("message")}
                  rows={7}
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Please write your message.",
                    },
                  })}
                  className="block w-full bg-transparent py-4 px-6 border-2 border-primary-dark rounded-lg text-muted placeholder:text-sm t placeholder:text-muted font-semibold focus:outline-none focus:border-primary"
                ></textarea>
                <p className="px-2 text-red-500 text-sm ">
                  {errors.message?.message}
                </p>
              </div>
              {/* {message && (
                    <div className="p-2 rounded-lg bg-backGroundVariant text-light ">
                      <p>Thank you, I'll reply as soon as possible :)</p>
                    </div>
                  )} */}
              <button
                type="submit"
                disabled={!isDirty || !isValid || isSubmitting}
                className={`px-3 py-2 rounded-md font-semibold
        ${
          !isDirty || !isValid || isSubmitting
            ? "bg-primary-dark text-white cursor-not-allowed"
            : "bg-bg-dark text-backGround hover:bg-primary cursor-pointer"
        }`}
              >
                {isSubmitting
                  ? t("sending")
                  : isSubmitSuccessful
                  ? t("emailSent")
                  : t("sendMeEmail")}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Dialog>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-bg-dark border-muted">
            <DialogHeader>
              <DialogTitle>{t("emailRec")}</DialogTitle>
              {/* <DialogDescription>
                Your form has been submitted successfully.
              </DialogDescription> */}
            </DialogHeader>
            <div className="py-4">
              <p>{t("emailRecDetail")}</p>
            </div>
          </DialogContent>
        </Dialog>
      </Dialog>
    </div>
  );
};

export default Contact;
