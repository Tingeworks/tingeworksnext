import Footer from "@/components/navigation/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {children} <Footer />
    </div>
  );
}
