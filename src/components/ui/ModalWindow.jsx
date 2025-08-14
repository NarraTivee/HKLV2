import styles from "@/styles/ui/ModalWindow.module.scss";

export function ModalWindow({ setHandleClose }) {
    return (
        <div
            className={styles.modal_window}
            onClick={() => {
                setHandleClose(false)
            }}
        >
            Hello world!
        </div >
    );
}