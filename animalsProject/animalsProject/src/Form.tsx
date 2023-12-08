import React, { useState, useContext } from "react";
import ItemContext from "./ItemContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [descricao, setDescricao] = useState("");
  const [role, setRole] = useState("");

  const itemContext = useContext(ItemContext);

  if (!itemContext) {
    throw new Error("Form must be used within an ItemProvider");
  }

  const { addItem } = itemContext;
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = { nome, sobrenome, email, celular, senha, descricao, role };
    addItem(newItem);
    navigate("/items");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Cadastre-se no Animals
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          required
        />
        <input
          className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
          required
        />
        <input
          className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
        <input
          className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
          type="tel"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          placeholder="Celular"
          required
        />
        <input
          className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          required
        />
        <textarea
          className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors h-24 resize-none"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Conte um pouco sobre os animais que você tem, sua raça e comportamento:"
          required
        ></textarea>
        <div className="flex flex-col">
          <span className="font-medium">Você é:</span>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="role"
              value="Dono de pet"
              onChange={(e) => setRole(e.target.value)}
            />
            <span className="ml-2">Dono de pet</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="role"
              value="Passeador"
              onChange={(e) => setRole(e.target.value)}
            />
            <span className="ml-2">Passeador</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="role"
              value="Hospedeiro"
              onChange={(e) => setRole(e.target.value)}
            />
            <span className="ml-2">Hospedeiro</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Concluído
        </button>
      </form>
    </div>
  );
};

export default Form;
