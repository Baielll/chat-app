import { FormEvent, useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Login() {
    const usernameRef = useRef<HTMLInputElement>(null)
    function handleSubmit(e: FormEvent) {
        e.preventDefault()

    }
    return (
        <>
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username</label>
            <Input id="userName" pattern="\S*" required ref={usernameRef} />
            <Button type="submit">Log in</Button>
        </form>
        </>
    )
}