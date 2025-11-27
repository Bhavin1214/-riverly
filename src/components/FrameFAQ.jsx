// FrameFAQ.jsx
import React, { useState, useRef, useEffect } from "react";
import "../styles/FrameFAQ.css";

const FAQ_DATA = [
    {
        id: 1,
        question: "Combien coûte la location de bateau ?",
        answer:
            "Les prix varient selon la durée, la saison et le type de bateau. La location commence à environ 1120 € pour une semaine en basse saison. Pour un tarif précis, consultez le site Riverly ou contactez notre service clientèle.",
    },
    {
        id: 2,
        question: "Comment louer un bateau avec Riverly ?",
        answer:
            "Réservez en ligne en choisissant vos dates et le modèle. Vous recevrez un e-mail de confirmation et des instructions pour le départ. Une courte prise en main du bateau est fournie avant l'embarquement.",
    },
    {
        id: 3,
        question: "Est-il nécessaire d’avoir un permis pour louer un bateau ?",
        answer:
            "Tout dépend du bateau et du pays. Beaucoup de pénichettes se louent sans permis, mais certains modèles et trajets peuvent nécessiter une qualification. Vérifiez la fiche du bateau ou demandez conseil.",
    },
    {
        id: 4,
        question: "Quels sont les équipements inclus avec la location de mon bateau ?",
        answer:
            "Les équipements standards comprennent literie, ustensiles de cuisine, réfrigérateur, et parfois climatisation. Consultez la fiche du bateau pour la liste complète et les options supplémentaires.",
    },
];

export default function FrameFAQ() {
    const [openId, setOpenId] = useState(FAQ_DATA[0].id);
    const answerRefs = useRef(new Map());

    const adjustHeights = () => {
        answerRefs.current.forEach((el, id) => {
            if (!el) return;
            const inner = el.querySelector(".faq-answer-inner");
            if (!inner) return;
            if (id === openId) {
                el.style.maxHeight = `${inner.scrollHeight}px`;
                el.style.opacity = "1";
            } else {
                el.style.maxHeight = `0px`;
                el.style.opacity = "0";
            }
        });
    };

    useEffect(() => {
        const onResize = () => {
            answerRefs.current.forEach((el) => {
                if (!el) return;
                const inner = el.querySelector(".faq-answer-inner");
                if (!inner) return;
                if (el.style.maxHeight && Number(el.style.maxHeight.replace("px", "")) > 0) {
                    el.style.maxHeight = `${inner.scrollHeight}px`;
                }
            });
        };
        window.addEventListener("resize", onResize);
        adjustHeights();
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        adjustHeights();
    }, [openId]);

    const toggleItem = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const onKeyDown = (e, id) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleItem(id);
        } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            const idx = FAQ_DATA.findIndex((f) => f.id === id);
            const nextIdx = e.key === "ArrowDown" ? idx + 1 : idx - 1;
            const clamped = Math.max(0, Math.min(FAQ_DATA.length - 1, nextIdx));
            const nextId = FAQ_DATA[clamped].id;
            const btn = document.getElementById(`faq-btn-${nextId}`);
            if (btn) btn.focus();
        }
    };

    return (
        <section className="faq-section" aria-labelledby="faq-heading">
            <div className="faq-container">
                <div className="faq-title-wrapper">
                    <h2 id="faq-heading" className="faq-title">Les questions fréquentes</h2>
                </div>

                <div className="faq-list" role="list">
                    {FAQ_DATA.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className={`faq-item ${isOpen ? "faq-item-open" : "faq-item-closed"}`}
                                role="listitem"
                                aria-expanded={isOpen}
                                onClick={() => toggleItem(faq.id)}
                                onKeyDown={(e) => onKeyDown(e, faq.id)}
                            >
                                <div
                                    className="faq-header"
                                    role="button"
                                    id={`faq-btn-${faq.id}`}
                                    tabIndex={0}
                                    aria-controls={`faq-answer-${faq.id}`}
                                    aria-expanded={isOpen}
                                >
                                    <div className="faq-question">{faq.question}</div>
                                    <svg
                                        className={`faq-arrow ${isOpen ? "faq-arrow-open" : ""}`}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path d="M6 9l6 6 6-6" stroke="#0E6B52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                <div
                                    id={`faq-answer-${faq.id}`}
                                    className="faq-answer"
                                    ref={(el) => {
                                        if (el) {
                                            answerRefs.current.set(faq.id, el);
                                        } else {
                                            answerRefs.current.delete(faq.id);
                                        }
                                    }}
                                >
                                    <div className="faq-answer-inner">{faq.answer}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="faq-bottom-link" role="link" tabIndex={0}>
                    <span className="faq-bottom-text">Découvrir la FAQ</span>
                    <div className="faq-bottom-arrow" />
                </div>
            </div>
        </section>
    );
}
