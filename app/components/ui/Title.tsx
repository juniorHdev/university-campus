
type TitleProps = {
    children?: React.ReactNode;
    type?: 'h1' | 'h2' | 'h3' ;
    size?: 'sm' | 'md' | 'lg' ;
}

const Title = ({ children, type, size}: TitleProps) => {
   const Componet = type || 'h1'
   const typeSize = (size) ?  (size === 'lg') ? 'text-2xl' : (size === 'md')? 'text-xl':'text-lg': 'text-2xl'
   const Fontsize = (size) ? typeSize : (type === 'h1') ? 'text-2xl' : (type === 'h2') ? 'text-xl' :  'text-lg'
   const className = (type === 'h1') ? `font-bold ${Fontsize}` : (type === 'h2') ? `font-bold ${Fontsize}` : `font-bold ${Fontsize}`

    return (
        <Componet className={className}>
            {children}
        </Componet>
    )
}
export default Title