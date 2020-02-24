import React, { useState, useCallback } from "react";

import { Editor } from "./Editor";

import styles from "./app.css";

export const App = () => {
    const [code, setCode] = useState("");
    const onChange = useCallback((_event, value) => {
        setCode(value);
    }, []);
    return (
        <main className={styles.main}>
            <div>
                <Editor value={code} onChange={onChange} />
            </div>
            <div />
        </main>
    );
};
