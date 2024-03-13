import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { postUserItem } from '../services/shopperService'
import { ReloadIcon } from "@radix-ui/react-icons"

const Shopper = () => {
    const [addExpenceBtn, setAddExpenceBtn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [newExpence, setNewExpence] = useState({
        item: '',
        location: '',
        amount: '',
        user: ''
    });
    
    const addExpenceHandler = () => { setAddExpenceBtn(true) };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewExpence({
            ...newExpence,
            [name]: value
        });
    };
    
    useEffect(() => {
    const storedUserName = localStorage.getItem('UserId');
        setNewExpence((prevExpence) => ({
            ...prevExpence,
            user: storedUserName
        }));
    }, []);
    
    const addExpenceSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(newExpence);
        setAddExpenceBtn(false);
        try {
            await postUserItem(newExpence);
        } catch (err) {
            console.error(err);
            alert(`Error: ${err.message}`);
        } finally {
            setLoading(false);
            setNewExpence({
                item: '',
                location: '',
                amount: '',
                user: ''
            });
        }
    };
    
    return(
        <div className="flex w-full flex-col justify-center mt-10 mb-10">
            <div className="mb-10">
                <h1 className="mb-10">Create your shopping list easily here!</h1>
                {addExpenceBtn ? 
                (
                    <div className="flex justify-center">
                        <form className="flex flex-col justify-center" onSubmit={addExpenceSubmit}>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                                <Label htmlFor="Item">Item</Label>
                                <Input name="item" value={newExpence.item} onChange={handleChange} type="text" placeholder="Enter items name" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                                <Label htmlFor="Location">Location</Label>
                                <Input name="location" value={newExpence.location} onChange={handleChange} type="text" placeholder="Enter items location" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                                <Label htmlFor="Amount">Amount</Label>
                                <Input name="amount" value={newExpence.amount} onChange={handleChange} type="text" placeholder="Enter items amount" />
                            </div>
                            {loading ? (
                               <div className="flex justify-center w-full max-w-sm items-center gap-1.5 mb-4">
                                <Button disabled><ReloadIcon className="mr-2 h-4 w-4 animate-spin" />Sending item</Button>
                               </div>
                            ):(
                                <div className="flex justify-center w-full max-w-sm items-center gap-1.5 mb-4">
                                    <Button onClick={addExpenceHandler} size="default" variant="default">Submit</Button>
                                </div>
                            )} 
                        </form>
                    </div>
                ):(
                    <Button onClick={addExpenceHandler} size="default" variant="default">Add Item</Button>
                )
            }     
            </div>
            <Table>
                <TableCaption>A list of shopping items.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Item</TableHead>
                    <TableHead className="w-[100px]">Location</TableHead>
                    <TableHead className="w-[100px]">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow >
                        <TableCell className="font-medium">adfsgdi</TableCell>
                        <TableCell className="font-medium">a</TableCell>
                        <TableCell className="font-medium">a</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default Shopper