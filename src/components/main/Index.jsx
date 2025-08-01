import React, { useState } from "react";
import { useGetValue } from "../../hooks/useGetValue";
import { api } from "../../api";
import useFetch from "../../hooks/useFetch";

const initialState = {
  firstname: "",
  lastname: "",
  age: "",
  gender: "",
};

const Index = () => {
  const { hendleChange, formData, setFormData } = useGetValue(initialState);
  const { data } = useFetch("users");
  const [update, setUpdate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.gender) {
      formData.age = Number(formData.age);
      if (update) {
        api.put(`users/${update.id}`, formData);
        setUpdate(null);
      } else {
        api.post("users", formData);
      }
      setFormData(initialState);
    } else {
      alert("Jinsni tanlash majburiy!");
    }
  };

  const handleDelete = (id) => {
    api.delete(`users/${id}`);
  };

  const handleUpdate = (user) => {
    setFormData(user);
    setUpdate(user);
  };

  return (
    <main className="mt-10">
      <div className="container px-4">
        <form
          onSubmit={handleSubmit}
          className="border-2 border-yellow-400 bg-black text-white py-6 rounded-2xl w-full max-w-xl mx-auto px-6 flex flex-col gap-4 shadow-xl"
        >
          <label className="font-semibold">Ism</label>
          <input
            required
            name="firstname"
            value={formData.firstname}
            onChange={hendleChange}
            className="px-4 py-2 rounded-md bg-gray-800 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="text"
          />
          <label className="font-semibold">Familya</label>
          <input
            required
            name="lastname"
            value={formData.lastname}
            onChange={hendleChange}
            className="px-4 py-2 rounded-md bg-gray-800 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="text"
          />
          <label className="font-semibold">Yosh</label>
          <input
            required
            name="age"
            value={formData.age}
            onChange={hendleChange}
            className="px-4 py-2 rounded-md bg-gray-800 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="number"
          />
          <label className="font-semibold">Jins</label>
          <select
            required
            name="gender"
            value={formData.gender}
            onChange={hendleChange}
            className="px-4 py-2 rounded-md bg-gray-800 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Tanla</option>
            <option value="male">Erkak</option>
            <option value="female">Ayol</option>
          </select>

          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded-lg transition-all duration-300"
            type="submit"
          >
            {update ? "Save" : "Send"}
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-8 mt-16 mb-20">
          {data?.map((user) => (
            <div
              key={user.id}
              className="bg-black text-white border border-yellow-400 w-[300px] p-6 rounded-xl shadow-xl flex flex-col gap-3"
            >
              <h1 className="text-xl font-bold">{user.firstname}</h1>
              <h1 className="text-lg">{user.lastname}</h1>
              <span className="text-yellow-300">{user.age} yosh</span>
              <span className="uppercase">{user.gender}</span>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md transition-all duration-300"
                >
                  O‘chirish
                </button>
                <button
                  onClick={() => handleUpdate(user)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md transition-all duration-300"
                >
                  Change
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Index;
