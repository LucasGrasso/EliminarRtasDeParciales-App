import React, { MouseEventHandler } from "react";
import Loader from "./Loader";

type Props = {
    loading?: boolean;
    loadingMsg?: string;
    className?: string;
    type: "submit" | "button";
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    errorMsg?: string;
};

export default function Button({
    loading,
    loadingMsg,
    children,
    type,
    errorMsg,
    ...props
}: Props) {
    return (
        <div className="flex-col">
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
            {
                errorMsg && <span className="text-error">{errorMsg}</span>
            }
        </div>
    );
}