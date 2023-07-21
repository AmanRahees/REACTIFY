import React, { useState, useEffect } from "react";
import { get_users, api } from "../../services/api";

function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await get_users();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleStatus = async (id, status) => {
    try {
      const response = await api.post(`/user/${id}/${status}/`);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, is_active: status } : user
        )
      );
      console.log("Activate user response:", response.data);
    } catch (error) {
      console.error("Error activating user:", error);
    }
  };
  return (
    <div className="bg-gray-800 text-white" style={{ height: "100vh" }}>
      <h1 className="text-4xl font-mono text-center p-3">Users</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-4/5 mx-auto text-center mb-10 font-mono">
          <thead>
            <tr className="border">
              <th className="px-4 py-2 bg-gray-900">Id</th>
              <th className="px-4 py-2 bg-gray-900">Username</th>
              <th className="px-4 py-2 bg-gray-900">Email</th>
              <th className="px-4 py-2 bg-gray-900">Status</th>
              <th className="px-4 py-2 bg-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((i) => (
              <tr className="border" key={i.id}>
                <td className="px-4 py-2">#{i.id}</td>
                <td className="px-4 py-2">{i.username}</td>
                <td className="px-4 py-2">{i.email}</td>
                <td className="px-4 py-2">
                  {i.is_active ? (
                    <p className="rounded-lg text-green-500">Active</p>
                  ) : (
                    <p className="rounded-lg text-red-700">Suspended</p>
                  )}
                </td>
                <td className="px-4 py-2">
                  {!i.is_active ? (
                    <button
                      onClick={() => handleStatus(i.id, !i.is_active)}
                      className="outline-double px-2 py-1 hover:bg-green-500 hover:text-white hover:outline-none rounded-lg text-green-500"
                    >
                      Activate
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatus(i.id, !i.is_active)}
                      className="outline-double px-2 py-1 hover:bg-red-700 hover:text-white hover:outline-none rounded-lg text-red-600"
                    >
                      Suspend
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
