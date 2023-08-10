import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const { context } = ctx?.req;
        const [initialProps] = await Promise.all([
            Document.getInitialProps(ctx)
        ]);

        return {
            ...initialProps,
            context
        };
    }

    render() {
        const { context } = this.props;

        return (
            <Html className='ys-design'>
                <Head>
                </Head>
                <body>
                    {JSON.stringify(context)}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
