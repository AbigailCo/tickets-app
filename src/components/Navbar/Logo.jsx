import img from "../../assets/logo.png";
function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src={img} alt="Logo" className="h-10 w-40 object-contain"/>
    </div>
  );
}

export default Logo;