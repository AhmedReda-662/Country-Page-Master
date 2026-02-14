import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main className="h-screen bg-dark-primary">
      <div className="logo bg-[url('/hero-image.jpg')] h-80 bg-cover bg-center flex items-center justify-center">
        <img src="/Logo.svg" />
      </div>
      <div className="container max-w-7xl -my-7.5 mx-auto px-4 py-8 shadow-lg rounded-lg bg-dark-primary border border-dark-secondary">
        <Outlet />
      </div>
    </main>
  );
}
