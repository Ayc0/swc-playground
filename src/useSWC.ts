import { useState, useEffect } from "react";

export const useSWC = (code: string) => {
    const [transformedCode, setTransformedCode] = useState("");
    useEffect(() => {
        fetch(`/api/transform`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code
            })
        }).then(res => res.json().then(res => setTransformedCode(res.transformedCode)));
    }, [code]);
    return transformedCode;
};
