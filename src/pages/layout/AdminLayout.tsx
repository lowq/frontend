import AdminTopNavbar from "../../components/navbar/AdminTopNavbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // ReactNode can represent any valid React node (e.g., JSX, string, number, etc.)
}

const AdminLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-cover bg-slate-500 w-screen h-screen overflow-auto">
      <AdminTopNavbar />
      {children}
    </div>
  );
};

export default AdminLayout;
