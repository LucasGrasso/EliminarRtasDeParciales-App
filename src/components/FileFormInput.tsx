import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as UploadIcon } from "../images/UploadIcon.svg";
import styles from "../styleComponents/FormInput.module.css";

type FileFormInputProps = {
    name: string;
    label: string;
    accept: string;
    placeholder?: string;
    required?: boolean;
    id?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FileFormInput({ name, label, onChange, required = true, accept, id, placeholder }: FileFormInputProps) {
    const [hovering, setHovering] = useState<boolean>(false);
    const fileInput = useRef<HTMLInputElement>(null);

    function onDrop(e: DragEvent) {
        e.stopPropagation();
        e.preventDefault();
        if (!e.dataTransfer) return;
        let files = Array.from(e.dataTransfer.files);
        accept = "*/.pdf";
        var MIMEtype = new RegExp(accept.replace("*", ".*"));
        files = files.filter((file) => MIMEtype.test(file.type));
        if (files.length > 0 && fileInput.current) {
            fileInput.current.files = e.dataTransfer.files;
            onChange({ target: { name, files } } as any);
        }
    }

    function addHover(e: any): void {
        e.stopPropagation();
        e.preventDefault();
        setHovering(true);
    }

    function removeHover(e: any): void {
        e.stopPropagation();
        e.preventDefault();
        setHovering(false);
    }

    useEffect(() => {
        if (!fileInput.current) return;
        fileInput.current.addEventListener("dragover", addHover, false);
        fileInput.current.addEventListener("mouseover", addHover, false);
        fileInput.current.addEventListener("mouseleave", removeHover, false);
        fileInput.current.addEventListener("dragleave", removeHover, false);
        fileInput.current.addEventListener("drop", onDrop, false);

        return () => {
            if (fileInput.current) {
                fileInput.current.removeEventListener("dragover", addHover, false);
                fileInput.current.removeEventListener("mouseover", addHover, false);
                fileInput.current.removeEventListener("mouseleave", removeHover, false);
                fileInput.current.removeEventListener("dragleave", removeHover, false);
                fileInput.current.removeEventListener("drop", onDrop, false);
            }
        };
    }, [fileInput]);

    return (
        <div
            className={styles.FormInput}
        >
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
            <input
                type="file"
                ref={fileInput}
                className={styles.FileFormInput}
                id={name}
                name={name}
                required={required}
                accept={accept}
                onChange={onChange}
            />
            <label htmlFor={name} className={styles.labelWithIcon}>
                <UploadIcon className={styles.UploadIcon} />
                {placeholder !== "" && <span>{placeholder}</span>}
            </label>
        </div>
    );
}