import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 xs:px-16 lg:px-30 py-20">
      <HomeBtn />
      {children}
    </main>
  );
}