import { Inter } from 'next/font/google'
import {Component} from "react";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default class MyApp extends Component<{ Component: any, pageProps: any }> {
    render() {
        let {Component, pageProps} = this.props;
        return (
            <main className={inter.className}>
                <Component {...pageProps} />
            </main>
        )
    }
}