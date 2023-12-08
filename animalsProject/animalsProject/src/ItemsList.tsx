// ItemsList.tsx
import React, { useContext } from "react";
import ItemContext from "./ItemContext";
import { useNavigate } from "react-router-dom";

interface Item {
  nome: string;
  sobrenome: string;
  email: string;
  celular: string;
  senha: string; // Você pode optar por não exibir a senha por questões de segurança
  descricao: string;
  role: string;
}

const ItemsList = () => {
  const itemContext = useContext(ItemContext);

  if (!itemContext) {
    throw new Error("ItemsList must be used within an ItemProvider");
  }

  const { items } = itemContext;
  const navigate = useNavigate();

  function sairDoSistema() {
    localStorage.removeItem("items");
    navigate("/");
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <ul className="space-y-4">
        {items.map((item: Item, index: number) => (
          <li key={index} className="p-4 bg-gray-100 rounded-md shadow">
            <h3 className="font-bold text-lg">
              {item.nome} {item.sobrenome}
            </h3>
            <p className="text-gray-700">Email: {item.email}</p>
            <p className="text-gray-700">Celular: {item.celular}</p>
            <p className="text-gray-700">Descrição: {item.descricao}</p>
            <p className="text-gray-700">Atividade: {item.role}</p>
          </li>
        ))}
      </ul>
      <button onClick={sairDoSistema} className="bg-red-200 mt-12">
        Sair
      </button>
    </div>
  );
};

export default ItemsList;
