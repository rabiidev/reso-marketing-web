import { isAxiosError } from "axios";


export function handleError(error) {
    if (isAxiosError(error)) {
        if (error?.response?.data?.message) {
            alert(error?.response?.data?.message)
        }
    } else {
        alert(error.message)
    }
}
