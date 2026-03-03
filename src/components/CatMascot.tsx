import { useState, useEffect } from 'react';
import { colors } from '../data/colors';

const CatMascot = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="cat-mascot" style={{ position: "fixed", bottom: "30px", left: "30px", zIndex: 999, pointerEvents: "none" }}>
            <div style={{ position: "relative", width: "70px", height: "70px", background: colors.card, border: `2px solid ${colors.border}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", backdropFilter: "blur(10px)" }}>
                🐱
                <div style={{ position: "absolute", top: "22px", left: "20px", width: "5px", height: "5px", background: "white", borderRadius: "50%", transform: `translate(${mousePos.x / 4}px, ${mousePos.y / 4}px)` }} />
                <div style={{ position: "absolute", top: "22px", right: "20px", width: "5px", height: "5px", background: "white", borderRadius: "50%", transform: `translate(${mousePos.x / 4}px, ${mousePos.y / 4}px)` }} />
            </div>
            <div style={{ position: "absolute", bottom: "80px", left: "0", background: "white", color: colors.bg, padding: "6px 12px", borderRadius: "12px", fontSize: "11px", fontWeight: "700", whiteSpace: "nowrap", borderBottomLeftRadius: "2px" }}>
                Grow like a lion! 🦁
            </div>
        </div>
    );
};

export default CatMascot;
