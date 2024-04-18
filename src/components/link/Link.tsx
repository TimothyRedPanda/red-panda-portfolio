import Link from "next/link";
import styles from "./Link.module.scss"


function CustomLink(props : {href : string, text : string}) {
    return (
        <>
            <Link className={styles.link} href={props.href}>{props.text}</Link>
        </>
    );
}

export default CustomLink;