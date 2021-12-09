import { useContext } from "react"
import { Context } from "../store/AppContext"

export default function Home() {
    const { store } = useContext(Context);

    return (
        <>
            <h1>Welcome to Next.js!</h1>
            <h3>{store.name}</h3>
        </>
    )
}