import { FC, ReactNode } from "react";
import Footer from "../components/footer";

import Header from "../components/header";

interface FuncProps {
  children: ReactNode;
}

const Layout: FC<FuncProps> = ({ children }) => {
  return (
    <div className={`h-full w-full`}>
      <Header />
      <main className="flex min-h-screen mx-12 justify-center items-center my-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
