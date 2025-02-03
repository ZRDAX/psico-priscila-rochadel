"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from '@emailjs/browser'

// Função para combinar múltiplas refs
const mergeRefs = (...refs) => (element) => {
  refs.forEach(ref => {
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref !== null) {
      ref.current = element;
    }
  });
};

const Form = () => {
  const textareaRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message,
      number: data.number
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
    }
  };

  // Mantemos a função de ajuste de altura
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <form className="form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          className="input"
          placeholder="Nome Completo"
          {...register("name", { required: "Nome é obrigatório" })}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

        <Input
          type="email"
          className="input"
          placeholder="Email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email inválido"
            }
          })}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

        <Input
          type="tel"
          className="input"
          placeholder="Número de Telefone"
          {...register("number", {
            required: "Telefone é obrigatório",
            pattern: {
              value: /^[0-9+() -]*$/,
              message: "Número inválido"
            }
          })}
        />
        {errors.number && <span className="text-red-500 text-sm">{errors.number.message}</span>}

        <Textarea
          className="textarea mb-2 resize-none scrollbar-none"
          placeholder="Escreva sua mensagem"
          rows={1}
          onInput={adjustHeight}
          {...register("message", { required: "Mensagem é obrigatória" })}
          ref={mergeRefs(
            textareaRef,
            register("message").ref // Mesclamos a ref do hook form com a nossa
          )}
        />
        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}

      <Button
        type="submit"
        className="btn self-start"
      >
        Enviar
      </Button>
    </form>
  );
};

export default Form;