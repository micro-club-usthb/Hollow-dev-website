import { ReactNode } from "react";
import Navbar from "./navbar";
import { Toaster } from "react-hot-toast";
import useGetUser from "../../hooks/useGetUser";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [user, waiting] = useGetUser();

  // Waiting the whole page or just navBar!!
  if (!waiting) {
    return (
      <>
        <Toaster />
        <div>
          <Navbar user={user} />
          <div className="pb-64 pt-32 max-w-7xl mx-auto px-8 space-y-28">
            {children}
          </div>
        </div>
      </>
    );
  }

  return null;
}
