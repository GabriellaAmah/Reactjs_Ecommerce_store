import { toast } from 'react-toastify'
import './errorMessage.css'

const successMessage = (val) => {
    return toast(val, {
        progressClassName : "progressive"
    })
}