export default function AppLayout() {
  return (
    <main className="max-w-7xl mx-auto h-screen">
      <div className="logo bg-[url('/hero-image.jpg')] h-80 bg-cover bg-center flex items-center justify-center">
        <h1>
          <img src="/Logo.svg" alt="logo" />
          World <span>Ranks</span>
        </h1>
      </div>
    </main>
  );
}
