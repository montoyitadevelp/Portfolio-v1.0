import logito from "../assets/img/logo.png"


//Componente del logo en donde aplicamos un poco de tailwind
export const Logito = () => {
    return (
        <img
            src={logito}
            alt="Logo from MontoyitaDev"
            className="md:flex absolute h-64 w-240 -top-20 left-0"
        />
    )
}