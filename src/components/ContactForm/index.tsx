import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../ui/button";
import { toast, Toaster } from "sonner";

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmited, setIsSubmited] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_zrw92rl", "template_6oawwqf", form.current, {
        publicKey: "-Rvp6g7p7XQ8pvl40",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.error("FAILED:", error);
        },
      );
    setIsSubmited({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className={`flex flex-col gap-[2rem] w-full max-w-[600px] px-[2rem]`}
    >
      <label
        className={`flex flex-col gap-2 text-2xl text-ligthbrown font-medium mt-[2rem]`}
      >
        Nome
        <input
          onChange={(e) =>
            setIsSubmited({ ...isSubmited, name: e.target.value })
          }
          value={isSubmited.name}
          name="name"
          required
          className={`mt-1 p-3 rounded-md bg-[#2b2a29] text-white border border-transparent focus:border-ligthbrown focus:ring-2 focus:ring-ligthbrown/20 transition`}
          placeholder="Seu nome"
        />
      </label>

      <label
        className={`flex flex-col gap-2 text-2xl text-ligthbrown font-medium`}
      >
        Email
        <input
          onChange={(e) =>
            setIsSubmited({ ...isSubmited, email: e.target.value })
          }
          value={isSubmited.email}
          name="email"
          type="email"
          required
          className={`mt-1 p-3 rounded-md bg-[#2b2a29] text-white border border-transparent focus:border-ligthbrown focus:ring-2 focus:ring-ligthbrown/20 transition`}
          placeholder="seu@exemplo.com"
        />
      </label>

      <label
        className={`flex flex-col gap-2 text-2xl text-ligthbrown font-medium`}
      >
        Mensagem
        <textarea
          onChange={(e) =>
            setIsSubmited({ ...isSubmited, message: e.target.value })
          }
          value={isSubmited.message}
          name="message"
          required
          className={`mt-1 p-3 rounded-md bg-[#2b2a29] text-white border border-transparent focus:border-ligthbrown focus:ring-2 focus:ring-ligthbrown/20 transition h-36 resize-none`}
          placeholder="Escreva sua mensagem aqui..."
        />
      </label>

      <div className={`flex justify-start`}>
        <Button
          onClick={() => toast.success("E-mail enviado com sucesso!")}
          className={`cursor-pointer w-[50%] h-[4rem] text-3xl mb-[2rem]`}
          type="submit"
        >
          Enviar
        </Button>
        <Toaster />
      </div>
    </form>
  );
}

export default ContactForm;
