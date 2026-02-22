import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main className="h-screen bg-dark-primary overflow-hidden">
      <div className="logo bg-[url('/hero-image.jpg')] h-80 bg-cover bg-center flex items-center justify-center">
        <img src="/Logo.svg" />
      </div>
      <div className="container max-w-[95%] -my-20 mx-auto px-4 py-8 shadow-lg rounded-lg bg-dark-primary border border-dark-secondary flex flex-col h-[calc(100vh-12rem)]">
        <Outlet />
      </div>
    </main>
  );
}
