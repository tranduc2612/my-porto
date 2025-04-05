import Footer from "@/components/Footer";
import { NICKNAME } from "@/ultis/constant";

export const metadata = {
  title: `${NICKNAME} | About`
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
