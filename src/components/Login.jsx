import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription,CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { loginUser } from '../services/authService';
import { ReloadIcon } from "@radix-ui/react-icons"
import { useToast } from "./ui/use-toast"

const Login = () => {
    const navigate = useNavigate();
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setLoading(true)
            await loginUser(loginData, navigate);
            toast({
                title: "Loged in successfully",
                variant: "success"
              })
        }
        catch(err){
            toast({
                title: "Failed to login user",
                description: err,
                variant: "destructive"
              })
            console.log(err)
        }finally{
            setLoading(false)
            
        }
    }

    return(
        <section className="login flex justify-center m-10">
            <Card className="h-100">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        To unlock the full spectrum of app functionalities, please login.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label>Email</Label>
                        <Input name="email" value={loginData.email} onChange={handleChange} type="email" placeholder="Your Email" />
                    </div>
                    <div className="space-y-1">
                        <Label>Password</Label>
                        <Input name="password" value={loginData.password} onChange={handleChange} type="password" placeholder="Your password" />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                {loading ?
                    (
                        <Button disabled><ReloadIcon className="mr-2 h-4 w-4 animate-spin" />Please wait</Button>
                    ):(
                        <Button >Login</Button>
                    )
                }
                    <p className="">Dont have account? <Link to="/register">Register</Link></p>
                </CardFooter>
                </form>
            </Card>
        </section>
    )
}

export default Login