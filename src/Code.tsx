import React from "react";
import { ControlledEditor } from "@monaco-editor/react";

interface CodeProps {
    value: string;
    language?: "javascript" | "json";
}

const options = { minimap: { enabled: false }, readOnly: true };

export const Code: React.FunctionComponent<CodeProps> = ({ value, language = "javascript" }) => {
    return <ControlledEditor options={options} value={value} language={language} />;
};
