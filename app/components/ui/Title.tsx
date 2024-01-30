
type TitleProps = {
    children?: React.ReactNode;
    type?: 'h1' | 'h2' | 'h3' ;
}

const Title = ({ children, type}: TitleProps) => {
   const Componet = type || 'h1'
   const className = (type === 'h1') ? 'font-bold text-2xl' : (type === 'h2') ? 'font-bold text-xl' : 'font-bold text-lg'
    return (
        <Componet className={className}>
            {children}
        </Componet>
    )
}
export default Title