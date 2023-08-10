import App from 'next/app';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const { ctx } = appContext;

    const extendedAppContext = {
        ...appContext,
        ctx: {
            ...ctx
        }
    };
    const appProps = await App.getInitialProps(extendedAppContext);

    return {
        ...appProps
    };
};

export default MyApp;
