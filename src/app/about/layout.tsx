import Footer from "@/components/navigation/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {children} <Footer />
      <GoogleAnalytics gaId="G-0Z4ZMMGBWT" />
    </div>
  );
}
