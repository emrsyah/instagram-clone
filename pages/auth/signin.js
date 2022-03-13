import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

// Browser
function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center">
        <img src="https://links.papareact.com/ocw" alt="" 
        className="w-80"/>
        <p className="font-xs">Educational purposes only, pls dont sue me facebook</p>
        <div className="mt-20">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                // * callbackUrl buat redirect setelah signin
                onClick={() => signIn(provider.id, {callbackUrl: '/'})}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Middle Server
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
