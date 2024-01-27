import Avatar from "../ui/Avatar"

const Header = () => {
  return (
    <header className="w-full h-[5rem] bg-yellow-100 text-black flex items-center gap-6">
        <span className="flex items-center gap-2 p-2">
        <Avatar/>
          Junior hernandez
        </span>
        Header</header>
  )
}
export default Header