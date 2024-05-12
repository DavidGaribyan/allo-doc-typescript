import "./wrapperShadow.css";
interface WrapperShadowProps {
  children: React.ReactNode;
}
const WrapperShadow: React.FC<WrapperShadowProps> = function ({ children }) {
  return <div className="shadow">{children}</div>;
};
export default WrapperShadow;
