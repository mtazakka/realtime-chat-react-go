import React, { useState, useEffect } from "react";
import LoadingSpinner from "../loadingSpinner/spinner";
import Alert from "../alert/alert";



const UserList = () => {
  const [users, setUsers] = useState([]); // Menyediakan nilai awal berupa array kosong
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:9000/api/v1/users?mediaType=json&page=1&limit=10",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data.data); // Memperbarui state users dengan data yang diambil
        setLoading(false);
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []); // Menjalankan efek ini hanya sekali saat komponen dimount

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-semibold mb-4">User List</h1>
      {loading && <LoadingSpinner/>}
      {error && (
        <Alert>
          Error: {error}
        </Alert>
      )}
      <ul>
        {Array.isArray(users) &&
          users.map((user) => (
            <li key={user.id} className="mb-2">
              <div className="border rounded p-2">
                <p className="font-semibold">{user.firstName}</p>
                <p className="text-gray-500">{user.lastName}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
