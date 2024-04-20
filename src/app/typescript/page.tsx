import styles from "@/app/page.module.scss";
import SpeechBubble from "@/app/components/SpeechBubble/SpeechBubble";

export default function Typescript() {
    return (
        <main className={styles.main}>
            <SpeechBubble
                user="Platapus"
                bgColor="#1D80F7"
                align="flex-end"
                message="Oooo new page! So where do we go from here?"
            />
        </main>
    );
}