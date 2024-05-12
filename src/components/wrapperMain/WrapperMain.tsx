import "./wrapperMain.css";
interface WrapperMainProps {
  children: React.ReactNode;
}
const WrapperMain: React.FC<WrapperMainProps> = function ({ children }) {
  return <div className="wrapper__main">{children}</div>;
};
export default WrapperMain;
