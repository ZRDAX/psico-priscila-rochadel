"use client";
import { useState } from "react";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import emailjs from '@emailjs/browser'

const Form = () => {
  const textareaRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');


  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === '' || number === ''){
      alert("preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
      number: number
    }

    emailjs.send("service_b40ym8c", "template_kg10b5c", templateParams, "qPuWLnHSD-RB72a0h")
    .then((response) => {
      console.log("Email Enviado", response.status, response.text);
      setName('')
      setEmail('')
      setMessage('')
      setNumber('')
    }, (err) => {
      console.error("Erro ao enviar email, erro:", err);
    })
  }

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reseta a altura
      textarea.style.height = textarea.scrollHeight + "px"; // Ajusta para o tamanho do conteúdo
    }
  };

  return (
    <form className="form flex flex-col gap-4" onSubmit={sendEmail} >
      
      <Input
        type="text" 
        className="input" 
        placeholder="Nome Completo"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      
      <Input 
        type="text" 
        className="input" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email} 
      />
      
      <Input 
        type="text" 
        className="input" 
        placeholder="Número de Telefone"
        onChange={(e) => setNumber(e.target.value)}
        value={number} 
      />

      <Textarea
        ref={textareaRef}
        className="textarea mb-2 resize-none scrollbar-none"
        placeholder="Escreva sua mensagem"
        onInput={adjustHeight}
        rows={1}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

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
