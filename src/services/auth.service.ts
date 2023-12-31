import { AuthKey } from "@/constants/storage"
import { decodeToken } from "@/utils/jwt"
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = (accessToken: string) => {
    return setToLocalStorage(AuthKey, accessToken)
}

export const getUserInfo = () => {
    const authLocalStorageData = getFromLocalStorage(AuthKey);
    if (authLocalStorageData) {
        const decodedToken = decodeToken(authLocalStorageData);
        return decodedToken
    } else {
        return ''
    }
}

export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(AuthKey);
    return !!authToken
}


export const removeUserToken = (key: string) => {
    return localStorage.removeItem(key)
}