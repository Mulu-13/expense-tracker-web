import {
  AiFillCopy,
  AiFillDelete,
  AiFillEdit,
  AiFillFileExcel,
  AiFillFilePdf,
} from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState(0);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/expenses/")
      .then((res) => {
        setExpenses(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleExpense = () => {
    const data = {
      title,
      amount,
      date,
    };

    setSaveLoading(true);
    console.log(data);
    axios.post("http://localhost:5000/expenses/", data).then((expense) => {
      const data = expense.data;
      setExpenses((expenses) => [...expenses, data]);
      setSaveLoading(false);
      setTitle("");
      setAmount(0);
      setDate("");
      navigate("/");
    });
  };

  const handleUpdateExpense = (id) => {
    const data = {
      title,
      amount,
      date,
    };

    setSaveLoading(true);
    axios
      .patch(`http://localhost:5000/expenses/edit/${id}`, data)
      .then((res) => {
        const updatedExpenses = expenses.map((expense) =>
          expense._id === id ? res.data : expense
        );
        setExpenses(updatedExpenses);
        setIsUpdate(false);
        setIdToUpdate();
        setSaveLoading(false);
        setTitle("");
        setAmount(0);
        setDate("");
      })
      .catch((e) => console.log(e));
  };

  const handleDeleteExpense = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/expenses/${id}`).then(() => {
      var newExpenses = expenses.filter((expense) => {
        return expense._id !== id;
      });
      console.log(expenses);
      setExpenses(newExpenses);
      console.log(newExpenses);
    });
  };

  return (
    <div className="h-screen mt-10">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container mx-auto">
          <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="col-span-2">
              <h1 className="text-3xl text-gray-800 font-semibold mb-2">
                Expense Records
              </h1>
              <div className="flex flex-row justify-between ">
                <div className="flex flex-row my-2">
                  <button className="bg-green-400 p-2 mr-1 rounded-md font-medium">
                    <p className="hidden md:block">Copy</p>
                    <AiFillCopy size={20} className="md:hidden" />
                  </button>
                  <button className="bg-green-400 p-2 mr-1 rounded-md font-medium">
                    <p className="hidden md:block">Excel</p>
                    <AiFillFileExcel size={20} className="md:hidden" />
                  </button>
                  <button className="bg-green-400 p-2 mr-1 rounded-md font-medium">
                    <p className="hidden md:block">PDF</p>
                    <AiFillFilePdf size={20} className="md:hidden" />
                  </button>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <p className="font-semibold">Search</p>
                  <input
                    type="text"
                    className="p-2 border border-gray-600 rounded-lg"
                  />
                </div>
              </div>
              <hr className="mb-2" />
              {expenses.length > 0 ? (
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-2 font-semibold text-lg">Name</th>
                      <th className="p-2 font-semibold text-lg">Date</th>
                      <th className="p-2 font-semibold text-lg">Amount</th>
                      <th className="p-2 font-semibold text-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((expense) => (
                      <tr
                        key={expense._id}
                        className="odd:bg-slate-100 rounded-lg even:bg-white"
                      >
                        <td className="p-2">
                          <div className="flex flex-col gap-1">
                            <p className="font-bold">{expense.title}</p>
                          </div>
                        </td>
                        <td className="p-2">
                          {new Date(expense.date).toLocaleDateString()}
                        </td>
                        <td className="p-2">
                          <p className="font-bold">
                            ${expense.amount.toFixed(2)}
                          </p>
                        </td>
                        <td className="p-2">
                          <div className="flex flex-row gap-2">
                            <Link to="">
                              <AiFillEdit
                                size={23}
                                onClick={() => {
                                  setTitle(expense.title);
                                  setAmount(expense.amount);
                                  setDate(expense.date);
                                  setIsUpdate(true);
                                  setIdToUpdate(expense._id);
                                }}
                              />
                            </Link>
                            <Link to="">
                              <AiFillDelete
                                size={23}
                                onClick={() => {
                                  handleDeleteExpense(expense._id);
                                }}
                              />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>No expenses found.</div>
              )}
            </div>
            <div className="border">
              <div className="bg-gray-800 py-4 text-white text-2xl text-center font-bold">
                Record Expense
              </div>
              <form className="p-4">
                <div>
                  <p className="text-xl my-4 text-gray-600 font-semibold">
                    Save a new expense record.
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Title
                  </label>
                  <input
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    value={title}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="border rounded w-full p-[6px] mb-2"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="amount"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Amount
                  </label>
                  <input
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="Your Amount"
                    className="border rounded w-full p-[6px] mb-2"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Date
                  </label>
                  <input
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    value={date}
                    type="date"
                    name="date"
                    id="date"
                    className="border rounded w-full p-[6px] mb-2"
                  />
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-1/3"></div>
                  <div className="flex flex-row w-2/3 gap-2">
                    <button
                      type="button"
                      className="bg-black text-white font-bold py-2 px-4 rounded-full w-1/2 mx-auto hover:bg-indigo-600 focus:outline-none focus:shadow-lg"
                    >
                      Clear
                    </button>
                    {!isUpdate ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("object");
                          handleExpense();
                        }}
                        className="bg-black text-white font-bold py-2 px-4 rounded-full w-1/2 mx-auto hover:bg-indigo-600 focus:outline-none focus:shadow-lg"
                      >
                        Save Expense
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("object");
                          handleUpdateExpense(idToUpdate);
                        }}
                        className="bg-black text-white font-bold py-2 px-4 rounded-full w-1/2 mx-auto hover:bg-indigo-600 focus:outline-none focus:shadow-lg"
                      >
                        Update Expense
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expense;
