"use client";

export interface FaqDraftItem {
    q: string;
    a: string;
}

interface FaqEditorProps {
    items: FaqDraftItem[];
    onChange: (items: FaqDraftItem[]) => void;
}

export default function FaqEditor({ items, onChange }: FaqEditorProps) {
    const safeItems = items.length > 0 ? items : [{ q: "", a: "" }];

    function update(index: number, field: "q" | "a", value: string) {
        const next = safeItems.map((item, currentIndex) =>
            currentIndex === index ? { ...item, [field]: value } : item,
        );
        onChange(next);
    }

    function addItem() {
        onChange([...safeItems, { q: "", a: "" }]);
    }

    function removeItem(index: number) {
        if (safeItems.length === 1) {
            onChange([{ q: "", a: "" }]);
            return;
        }
        onChange(safeItems.filter((_, currentIndex) => currentIndex !== index));
    }

    return (
        <div>
            <div className="admin-inline" style={{ justifyContent: "space-between", marginBottom: "0.6rem" }}>
                <p className="faq-title">FAQ</p>
                <button type="button" className="admin-btn admin-btn-ghost" onClick={addItem}>
                    + Dodaj pytanie
                </button>
            </div>

            <div className="faq-list">
                {safeItems.map((item, index) => (
                    <div key={`faq-${index}`} className="faq-item-card">
                        <div className="faq-item-top">
                            <p className="faq-title">Pytanie #{index + 1}</p>
                            <button type="button" className="admin-btn admin-btn-ghost" onClick={() => removeItem(index)}>
                                Usun
                            </button>
                        </div>
                        <div className="admin-field">
                            <label htmlFor={`faq-q-${index}`}>Pytanie</label>
                            <input
                                id={`faq-q-${index}`}
                                className="admin-input"
                                value={item.q}
                                onChange={(event) => update(index, "q", event.target.value)}
                                placeholder="Np. Ile trwa usluga?"
                            />
                        </div>
                        <div className="admin-field" style={{ marginBottom: 0 }}>
                            <label htmlFor={`faq-a-${index}`}>Odpowiedz</label>
                            <textarea
                                id={`faq-a-${index}`}
                                className="admin-textarea"
                                value={item.a}
                                onChange={(event) => update(index, "a", event.target.value)}
                                placeholder="Wpisz odpowiedz..."
                                rows={3}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
