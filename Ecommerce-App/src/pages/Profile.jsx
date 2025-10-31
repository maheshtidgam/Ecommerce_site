import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Profile = () => {
    const { token, navigate, setToken } = useContext(ShopContext);
    const [user, setUser] = useState({ name: "", email: "", joined: "" });

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        // Example: Fetch user profile (replace with your backend API)
        const fetchUser = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/user/profile", {
                    headers: { token },
                });

                const data = await res.json();
                setUser({
                    name: data.name || "User",
                    email: data.email || "Not available",
                    joined: data.createdAt?.slice(0, 10) || "N/A",
                });
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            }
        };

        fetchUser();
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/login");
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">My Profile</h2>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                    src={assets.profile_icon}
                    alt="profile"
                    className="w-28 h-28 p-3 border rounded-full bg-gray-100"
                />
                <div className="flex-1">
                    <div className="mb-4">
                        <p className="text-gray-600 text-sm">Full Name</p>
                        <p className="text-lg font-medium">{user.name}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-600 text-sm">Email Address</p>
                        <p className="text-lg font-medium">{user.email}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-600 text-sm">Member Since</p>
                        <p className="text-lg font-medium">{user.joined}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="mt-3 px-5 py-2 bg-black text-white text-sm rounded hover:bg-gray-800"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                    Order Summary
                </h3>
                <p className="text-gray-600 text-sm">
                    View your order history in the <span className="font-medium cursor-pointer text-black underline" onClick={() => navigate("/orders")}>Orders</span> section.
                </p>
            </div>
        </div>
    );
};

export default Profile;
