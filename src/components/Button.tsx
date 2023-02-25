import React, { MouseEventHandler } from "react";
import Loader from "./Loader";

type Props = {
    loading?: boolean;
    loadingMsg?: string;
    className?: string;
    type: "submit" | "button";
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
    loading,
    loadingMsg,
    children,
    type,
    ...props
}: Props) {
    return (
        <button
            {...props}
            type={type}
            disabled={loading}
        >
            {loading ? (
                <>
                    <Loader />
                    {loadingMsg || children}
                </>
            ) : (
                children
            )}
        </button>
    );
}