"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface HtmlEditorProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function HtmlEditor({ label, value, onChange, placeholder = "Wpisz tresc..." }: HtmlEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const [sourceMode, setSourceMode] = useState(false);

    const toolbarButtons = useMemo(
        () => [
            { label: "B", action: () => document.execCommand("bold"), title: "Pogrubienie" },
            { label: "I", action: () => document.execCommand("italic"), title: "Kursywa" },
            { label: "H2", action: () => document.execCommand("formatBlock", false, "h2"), title: "Naglowek H2" },
            { label: "H3", action: () => document.execCommand("formatBlock", false, "h3"), title: "Naglowek H3" },
            { label: "UL", action: () => document.execCommand("insertUnorderedList"), title: "Lista punktowana" },
            { label: "OL", action: () => document.execCommand("insertOrderedList"), title: "Lista numerowana" },
        ],
        [],
    );

    useEffect(() => {
        if (!editorRef.current) return;
        if (editorRef.current.innerHTML !== value) {
            editorRef.current.innerHTML = value || "";
        }
    }, [value]);

    function handleInput() {
        onChange(editorRef.current?.innerHTML || "");
    }

    function addLink() {
        const url = window.prompt("Podaj URL", "https://");
        if (!url) return;
        document.execCommand("createLink", false, url);
    }

    function clearFormatting() {
        document.execCommand("removeFormat");
    }

    return (
        <div className="admin-field">
            <label>{label}</label>
            <div className="editor-shell">
                <div className="editor-toolbar">
                    {toolbarButtons.map((button) => (
                        <button
                            type="button"
                            key={button.title}
                            className="editor-btn"
                            onClick={button.action}
                            title={button.title}
                        >
                            {button.label}
                        </button>
                    ))}
                    <button type="button" className="editor-btn" onClick={addLink} title="Dodaj link">
                        LINK
                    </button>
                    <button type="button" className="editor-btn" onClick={clearFormatting} title="Usun formatowanie">
                        CLR
                    </button>
                    <button
                        type="button"
                        className="editor-btn"
                        onClick={() => setSourceMode((current) => !current)}
                        title="Przelacz edycje HTML"
                    >
                        {sourceMode ? "Wizualny" : "HTML"}
                    </button>
                </div>

                {sourceMode ? (
                    <textarea
                        className="editor-source"
                        value={value}
                        onChange={(event) => onChange(event.target.value)}
                    />
                ) : (
                    <div
                        ref={editorRef}
                        className="editor-content"
                        contentEditable
                        suppressContentEditableWarning
                        data-placeholder={placeholder}
                        onInput={handleInput}
                    />
                )}
            </div>
        </div>
    );
}
