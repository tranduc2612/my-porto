// generate layour with footer
import Footer from "@/components/Footer";
import { NICKNAME } from "@/ultis/constant";

export const metadata = {
  title: `${NICKNAME} | Projects`
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}