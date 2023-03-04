import { FC, ReactNode } from "react";
import Footer from "./footer";

import Header from "./header";

interface FuncProps {
  children: ReactNode;
}

const Layout: FC<FuncProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen mx-12 justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
