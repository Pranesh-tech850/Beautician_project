import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check token when app starts
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, []);

  // Register
  const register = async (name, email, password) => {
    try {
      const { data } = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      console.log("Register Response:", data);

      // Store token
      localStorage.setItem("token", data.token);

      // Load logged-in user
      await fetchUserProfile();

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message || "Registration failed",
      };
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      console.log("Login Response:", data);

      // Store token
      localStorage.setItem("token", data.token);

      // Load logged-in user
      await fetchUserProfile();

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message || "Login failed",
      };
    }
  };

  // Fetch Logged-in User
  const fetchUserProfile = async () => {
    try {
      const { data } = await api.get("/auth/profile");

      setUser(data);

      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log(error);

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Booking
  const addToBooking = async (serviceId) => {
    try {
      const appointmentDate = new Date();

      await api.post("/bookings", {
        service: serviceId,
        appointmentDate,
      });

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout,
        addToBooking,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};