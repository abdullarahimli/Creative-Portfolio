// VisitorCounter.tsx
import { useEffect, useState } from "react";
import { database } from "../firebase"; // Realtime Database
import { ref, get, set, update } from "firebase/database";

const VisitorCounter = () => {
    const [count, setCount] = useState<number>(0);

    // IP-ni alır
    const fetchIP = async (): Promise<string | null> => {
        try {
            const res = await fetch("https://api.ipify.org?format=json");
            const data = await res.json();
            return data.ip;
        } catch (err) {
            console.error("IP alınmadı:", err);
            return null;
        }
    };

    // Sayğacı və IP-ləri idarə edir
    useEffect(() => {
        const registerVisitor = async () => {
            const ip = await fetchIP();
            if (!ip) return;

            const counterRef = ref(database, "visitorCounter");
            const snapshot = await get(counterRef);

            if (snapshot.exists()) {
                const data = snapshot.val();
                const ips = data.ips || [];

                // IP yoxdursa, əlavə et və sayğacı artır
                if (!ips.includes(ip)) {
                    const newIps = [...ips, ip];
                    await update(counterRef, {
                        count: data.count + 1,
                        ips: newIps,
                    });
                    setCount(data.count + 1);
                } else {
                    setCount(data.count);
                }
            } else {
                // İlk ziyarətçi
                await set(counterRef, {
                    count: 1,
                    ips: [ip],
                });
                setCount(1);
            }
        };

        registerVisitor();
    }, []);

    return (
        <div>
            <p>Sayta giriş edən unikal istifadəçi sayı: <strong>{count}</strong></p>
        </div>
    );
};

export default VisitorCounter;
