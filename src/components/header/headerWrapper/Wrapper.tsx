import "./wrapper.css";

interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};
export default Wrapper;
