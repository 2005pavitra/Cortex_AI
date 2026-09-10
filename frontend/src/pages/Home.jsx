import { signInWithPopup } from 'firebase/auth'
import { googleProvider, auth } from '../../utils/firebase'
import api from '../../utils/axios.js'
import '../App.css'

function Home() {
    const handleLogin = async (token) => {
        try {
            const { data } = await api.post('/auth/login', { token })
            console.log('backend user details:', data)
        } catch (error) {
            console.error('Error in communicating with backend', error)
        }
    }

    const googleLogin = async () => {
        try {
            const data = await signInWithPopup(auth, googleProvider)
            const token = await data.user.getIdToken()
            console.log('Firebase token', token)
            await handleLogin(token)
            console.log('Login sequence finished: ', data)
        } catch (error) {
            console.log('Firebase login error: ', error)
        }
    }

    return (
        <main className="home-page">
            <section className="home-content">
                <p className="eyebrow">Cortex AI</p>
                <h1>Build better ideas with intelligent agents.</h1>
                <p className="home-description">
                    Sign in to bring your workflows, tools, and AI collaborators together.
                </p>
                <button className="google-button" onClick={googleLogin}>
                    <svg className="google-mark" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h6.44a5.5 5.5 0 0 1-2.39 3.61v3h3.87c2.27-2.09 3.57-5.17 3.57-8.64Z" />
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3A7.17 7.17 0 0 1 12 19.2a7.2 7.2 0 0 1-6.77-4.98H1.23v3.1A12 12 0 0 0 12 24Z" />
                        <path fill="#FBBC05" d="M5.23 14.22A7.2 7.2 0 0 1 4.86 12c0-.77.13-1.52.37-2.22v-3.1H1.23A12 12 0 0 0 0 12c0 1.93.46 3.76 1.23 5.32l4-3.1Z" />
                        <path fill="#EA4335" d="M12 4.8c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.95 1.16 15.24 0 12 0A12 12 0 0 0 1.23 6.68l4 3.1A7.2 7.2 0 0 1 12 4.8Z" />
                    </svg>
                    Sign up with Google
                </button>
            </section>
            <div className="home-glow" aria-hidden="true" />
            <div className="home-grid" aria-hidden="true" />
        </main>
    )
}

export default Home
