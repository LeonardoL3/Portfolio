import { Errors } from "../components/Errors"


function NotFound(){
    return (
        <Errors  statusCode={400} message='Page Not Found' />
    )
}

export default NotFound