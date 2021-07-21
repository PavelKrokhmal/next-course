import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"Next JS " + keywords}/>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A text={"Main"} href={"/"}/>
                <A text={"Users"} href={"/users"}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
              .navbar {
                background: orange;
                padding: 15px;
              }
            `}
            </style>
        </>
    )
}

export default MainContainer