import React, { useState, useCallback } from "react";

import { Editor } from "./Editor";
import { Code } from "./Code";

import { useSWC } from "./useSWC";

import styles from "./app.css";

export const App = () => {
    const [code, setCode] = useState("");
    const onChange = useCallback((_event, value) => {
        setCode(value);
    }, []);
    const transformedCode = useSWC(code);
    return (
        <main className={styles.main}>
            <div>
                <Editor value={code} onChange={onChange} />
            </div>
            <div>
                <Code value={transformedCode} />
            </div>
        </main>
    );
};
