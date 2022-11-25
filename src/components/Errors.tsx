import { Button } from "./Button";
import { AiFillHome } from 'react-icons/ai'
import Link from "next/link";

interface ErrorsProps {
    statusCode: number
    message: string
}

export function Errors({statusCode, message}: ErrorsProps){
    return (
        <section>
            <div className='flex flex-col gap-12 justify-center items-center h-screen'>
                <span>{statusCode}</span>
                <span>{message}</span>
                <Link href='/'>
                <Button className="border-2 p-4 rounded-md flex items-center gap-2">
                    Back to home <AiFillHome size={18} className='inline' /> 
                </Button> 
                </Link>
            </div>
        </section>
    )
}