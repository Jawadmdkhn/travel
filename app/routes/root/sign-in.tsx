import {Link, redirect} from "react-router";
import {loginWithGoogle} from "~/appwrite/auth";
import {account} from "~/appwrite/client";

export async function clientLoader() {
    try {
        const user = await account.get();

        if(user.$id) return redirect('/');
    } catch (e) {
        console.log('Error fetching user', e)
    }
}

const SignIn = () => {
    return (
        <main className="bg-[url(/assets/images/auth-img.webp)] bg-cover bg-center h-screen w-full flex justify-center items-center">
            <section className="h-[50vh] w-[25%] px-6 rounded-lg bg-white flex justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-y-3">
                    <header className="flex flex-col items-center">
                        <Link to="/">
                            <img
                                src="/assets/icons/logo.svg"
                                alt="logo"
                                className="size-[30px]"
                            />
                        </Link>
                        <h1 className="p-28-bold text-dark-100">Tourvisto</h1>
                    </header>

                    <article>
                        <h2 className="text-center">Start Your Travel Journey</h2>

                        <p className="text-center mt-2">Sign in with Google to manage destinations, itineraries, and user activity with ease.</p>
                    </article>

                    <button
                        type="button"
                        className="bg-blue-500 rounded-lg !h-11 !w-full flex items-center justify-center gap-x-3 cursor-pointer"
                        onClick={loginWithGoogle}
                    >
                        <img
                            src="/assets/icons/google.svg"
                            className="size-5"
                            alt="google"
                        />
                        <span className="p-18-semibold text-white">Sign in with Google</span>
                    </button>
                </div>
            </section>
        </main>
    )
}
export default SignIn
