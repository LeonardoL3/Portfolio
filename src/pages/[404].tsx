import { Errors } from '../components/Errors'


function NotFound(){
	return (
		<Errors statusCode={404} />
	)
}

export default NotFound