import SettingIcon from "@/public/icons/Setting-icon";
import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import BellIcon from "@/public/icons/Bell-Icon";

const Header = () => {
  return (
    <header className="w-full h-[10%] max-h-[70px] bg-white text-black flex items-center gap-6  rounded-lg shadow-sm">
      <span className="flex items-center gap-2 p-2">
        <Avatar />
        Junior hernandez
      </span>
    
      <span className="ml-auto pr-4 flex gap-4 text-orange-800">
        <Button onClick={() => console.log("click")} icon={<SettingIcon />}/>
        <Button onClick={() => console.log("click")} icon={<BellIcon />}/>
      </span>
    </header>
  );
};
export default Header;
