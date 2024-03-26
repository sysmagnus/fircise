import { create } from "zustand"
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const useUserStore = create((set) => ({
    registerUser: async (email, password, nombre) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            const userData = {
                userId: user.uid,
                nombre: nombre || '',
                rol: 'user',
            }
            await addDoc(collection(database, 'users'), userData)
            return user
        } catch (error) {
            throw new Error("Failed to register user: " + error.message)
        }
    }
}))