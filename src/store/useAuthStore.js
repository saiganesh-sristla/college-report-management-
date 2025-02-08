import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",

  login: (email, password) => {
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isAuthenticated", "true");
      set({ isAuthenticated: true });
      return true; // Successful login
    }
    return false; // Failed login
  },

  logout: () => {
    localStorage.removeItem("isAuthenticated");
    set({ isAuthenticated: false });
  },
}));

export default useAuthStore;
