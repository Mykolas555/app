import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { registerUser } from "@/services/authService"
import { ReloadIcon } from "@radix-ui/react-icons"

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setLoading(true)
            await registerUser(registerData, navigate)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }



    return(
        <section className="login flex justify-center m-10">
            <form onSubmit={handleSubmit}>
                <Card className="h-100">
                    <CardHeader>
                        <CardTitle>Register</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label>Name</Label>
                            <Input name="name" value={registerData.name} onChange={handleChange} type="text" placeholder="Your name" />
                        </div>
                        <div className="space-y-1">
                            <Label>Email</Label>
                            <Input name="email" value={registerData.email} onChange={handleChange} type="text" placeholder="Your email"  />
                        </div>
                        <div className="space-y-1">
                            <Label>Password</Label>
                            <Input name="password" value={registerData.password} onChange={handleChange} type="password" placeholder="Your password" />
                        </div>
                        <div className="space-y-1">
                            <Label>Repeat password</Label>
                            <Input name="passwordConfirm" value={registerData.repeatPassword} onChange={handleChange} type="password" placeholder="Repeat your password" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        {loading ?
                        (
                            <Button disabled><ReloadIcon className="mr-2 h-4 w-4 animate-spin" />Please wait</Button>
                        ):(
                            <Button>Register</Button>
                        )}
                        <p className="">Already have an account? <Link to="/login">Login</Link></p>
                    </CardFooter>
                </Card>
            </form>
        </section>
    )
}

export default Register