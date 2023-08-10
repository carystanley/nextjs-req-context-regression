import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const [initialProps, headerData] = await Promise.all([
            Document.getInitialProps(ctx),
            async function(ctx) {
                return ctx?.req?.context;
            }(ctx)
        ]);

        return {
            ...initialProps,
            headerData
        };
    }

    render() {
        const { headerData } = this.props;

        return (
            <Html className='ys-design'>
                <Head>
                </Head>
                <body>
                    {JSON.stringify(headerData)}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
