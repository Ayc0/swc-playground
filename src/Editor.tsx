import React, { memo } from "react";
import { ControlledEditor } from "@monaco-editor/react";

interface EditorProps {
    value: string;
    onChange: (event: Event, value: string) => void;
    language?: "javascript" | "json";
}

const options = { minimap: { enabled: false } };

export const Editor = memo<EditorProps>(({ value, onChange, language = "javascript" }) => {
    return (
        <ControlledEditor options={options} value={value} onChange={onChange} language={language} />
    );
});
