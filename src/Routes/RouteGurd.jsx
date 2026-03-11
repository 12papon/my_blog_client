import { Outlet, Navigate, replace, useLocation } from "react-router";
import { useAuth } from "../Context/AuthorContext/AuthorContext";
import Login from "../Pages/Login";

export const PrivateRoute = () => {
  // ১. প্রাইভেট রাউট: যারা লগইন করা নেই, তাদের প্রোফাইল বা সেটিংসে যেতে দেবে না
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export const PublicRoute = () => {
  // ২. পাবলিক রাউট: যারা লগইন করা আছে, তাদের নতুন করে লগইন বা সাইনআপ পেজে যেতে দেবে না
  const { user } = useAuth();
  const location = useLocation();
  return user ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
