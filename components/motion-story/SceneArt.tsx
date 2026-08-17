import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import type { SceneArtId } from "./scenes";

const fadeTransition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const };

function Glow({
  style,
}: {
  style: CSSProperties;
}) {
  return <div className="absolute rounded-full blur-3xl" style={style} />;
}

function Skyline({ opacity = 1 }: { opacity?: number }) {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-[45%] w-full"
      viewBox="0 0 1600 400"
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      <path
        d="M0,400 L0,260 L60,260 L60,300 L120,300 L120,220 L170,220 L170,280 L230,280 L230,180 L260,180 L260,260 L330,260 L330,240 L400,240 L400,300 L470,300 L470,200 L520,200 L520,260 L600,260 L600,150 L640,150 L640,240 L700,240 L700,290 L760,290 L760,210 L820,210 L820,270 L900,270 L900,190 L950,190 L950,260 L1020,260 L1020,230 L1090,230 L1090,300 L1160,300 L1160,220 L1220,220 L1220,270 L1290,270 L1290,190 L1340,190 L1340,260 L1410,260 L1410,240 L1480,240 L1480,300 L1550,300 L1550,260 L1600,260 L1600,400 Z"
        fill="#020103"
      />
    </svg>
  );
}

function CloakedFigure({
  x,
  y,
  scale = 1,
  eyeColor = "#ff3b30",
  eyeOpacity = 1,
}: {
  x: number;
  y: number;
  scale?: number;
  eyeColor?: string;
  eyeOpacity?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M0,-90 C-28,-90 -46,-60 -50,-20 C-54,20 -46,60 -60,110 L60,110 C46,60 54,20 50,-20 C46,-60 28,-90 0,-90 Z"
        fill="#040104"
      />
      <circle cx="-10" cy="-30" r="3.2" fill={eyeColor} opacity={eyeOpacity} style={{ filter: `drop-shadow(0 0 6px ${eyeColor})` }} />
      <circle cx="10" cy="-30" r="3.2" fill={eyeColor} opacity={eyeOpacity} style={{ filter: `drop-shadow(0 0 6px ${eyeColor})` }} />
    </g>
  );
}

export function SceneArt({ id }: { id: SceneArtId }) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={fadeTransition}
    >
      {ART[id]}
    </motion.div>
  );
}

const ART: Record<SceneArtId, ReactNode> = {
  "moon-rise": (
    <div className="relative h-full w-full bg-[#08040a]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 22%, #4a0a0f 0%, #220509 32%, #0a0308 62%, #050208 100%)",
        }}
      />
      <Glow
        style={{
          top: "6%",
          left: "50%",
          width: 380,
          height: 380,
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(255,60,40,0.9) 0%, rgba(180,20,20,0.5) 45%, rgba(120,10,10,0) 75%)",
        }}
      />
      <div
        className="absolute left-1/2 top-[10%] h-32 w-32 -translate-x-1/2 rounded-full sm:h-44 sm:w-44"
        style={{
          background: "radial-gradient(circle at 35% 35%, #ff6a4a, #b3121f 55%, #5a0a0f 100%)",
          boxShadow: "0 0 90px 30px rgba(200,20,20,0.55)",
        }}
      />
      <Skyline />
      <div
        className="absolute inset-x-0 bottom-0 h-[20%]"
        style={{ background: "linear-gradient(to top, rgba(80,10,10,0.35), transparent)" }}
      />
    </div>
  ),

  "shadow-patrol": (
    <div className="relative h-full w-full bg-[#050206]">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 65%, #200409 0%, #0a0206 45%, #030103 100%)",
        }}
      />
      <Skyline opacity={0.7} />
      <div
        className="absolute inset-x-0 bottom-[10%] h-24"
        style={{ background: "linear-gradient(to top, rgba(20,4,6,0.6), transparent)" }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <CloakedFigure x={800} y={560} scale={2.1} />
      </svg>
    </div>
  ),

  watcher: (
    <div className="relative h-full w-full bg-[#06030a]">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 78% 30%, #3a0810 0%, #14040a 40%, #050308 75%)",
        }}
      />
      <div
        className="absolute right-[14%] top-[16%] h-24 w-24 rounded-full sm:h-32 sm:w-32"
        style={{
          background: "radial-gradient(circle at 35% 35%, #d84c3a, #7a1414 60%, #300a0a 100%)",
          boxShadow: "0 0 70px 20px rgba(180,30,20,0.45)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <path d="M0,900 L0,600 L400,540 L800,610 L1200,560 L1600,620 L1600,900 Z" fill="#020102" opacity={0.85} />
        <path d="M0,900 L0,700 L500,660 L1000,700 L1600,660 L1600,900 Z" fill="#010101" />
        <CloakedFigure x={520} y={680} scale={2.4} eyeColor="#ff9166" />
      </svg>
    </div>
  ),

  order: (
    <div className="relative h-full w-full bg-[#08040a]">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 40%, #2a060c 0%, #0e0308 55%, #040206 100%)",
        }}
      />
      <Glow
        style={{
          top: "30%",
          left: "50%",
          width: 260,
          height: 520,
          transform: "translate(-50%,-10%) rotate(8deg)",
          background: "linear-gradient(180deg, rgba(200,40,30,0.35), rgba(200,40,30,0) 70%)",
        }}
      />
      <Glow
        style={{
          bottom: "-10%",
          left: "20%",
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(120,10,15,0.4), transparent 70%)",
        }}
      />
    </div>
  ),

  ruins: (
    <div className="relative h-full w-full bg-[#050307]">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 70%, #260710 0%, #0c0308 50%, #040206 100%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <path
          d="M120,900 L120,700 L220,700 L220,780 L120,780 Z M340,900 L340,650 L460,650 L460,900 Z M1180,900 L1180,690 L1300,690 L1300,900 Z M1360,900 L1360,660 L1440,660 L1440,900 Z"
          fill="#020102"
        />
        <CloakedFigure x={560} y={780} scale={1.4} eyeOpacity={0.8} />
        <CloakedFigure x={720} y={800} scale={1.2} eyeOpacity={0.8} />
        <CloakedFigure x={900} y={790} scale={1.5} eyeOpacity={0.8} />
      </svg>
      <div
        className="absolute inset-x-0 bottom-0 h-[16%]"
        style={{ background: "linear-gradient(to top, rgba(60,10,10,0.4), transparent)" }}
      />
    </div>
  ),

  hut: (
    <div className="relative h-full w-full bg-[#0a0507]">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 55%, #3a0f10 0%, #170608 45%, #050305 100%)",
        }}
      />
      <Glow
        style={{
          top: "42%",
          left: "50%",
          width: 220,
          height: 220,
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(200,70,40,0.35), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 220px 60px rgba(0,0,0,0.85)" }}
      />
    </div>
  ),

  well: (
    <div className="relative h-full w-full bg-[#050307]">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 55%, #2c0810 0%, #0d0308 50%, #040206 100%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="800" cy="720" rx="140" ry="46" fill="#020102" stroke="#3a0f10" strokeWidth="4" />
        <ellipse cx="800" cy="712" rx="118" ry="34" fill="#0a0305" />
        <path
          d="M800,700 C700,560 560,420 470,260 C620,340 730,470 800,610 C870,470 980,340 1130,260 C1040,420 900,560 800,700 Z"
          fill="#020102"
          opacity={0.92}
        />
      </svg>
      <Glow
        style={{
          top: "30%",
          left: "50%",
          width: 340,
          height: 340,
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(220,50,30,0.35), transparent 72%)",
        }}
      />
    </div>
  ),

  battle: (
    <div className="relative h-full w-full bg-[#070308]">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 40% 45%, #4a0d12 0%, #180509 45%, #050307 100%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <path
          d="M780,760 C640,600 440,480 260,380 C460,420 640,520 780,660 C880,520 1080,420 1300,380 C1100,480 900,600 820,760 Z"
          fill="#020102"
        />
        <line x1="200" y1="200" x2="700" y2="640" stroke="#c8321f" strokeWidth="3" opacity="0.55" />
        <line x1="1400" y1="180" x2="900" y2="700" stroke="#c8321f" strokeWidth="2" opacity="0.4" />
        <line x1="500" y1="120" x2="760" y2="560" stroke="#e0552f" strokeWidth="2" opacity="0.35" />
      </svg>
      <Glow
        style={{
          top: "20%",
          left: "30%",
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(230,70,30,0.4), transparent 70%)",
        }}
      />
    </div>
  ),

  egg: (
    <div className="relative h-full w-full bg-[#050307]">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 55%, #300910 0%, #0f0408 50%, #040206 100%)",
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{ x: "-50%", y: "-50%" }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="220" height="280" viewBox="0 0 220 280">
          <defs>
            <radialGradient id="eggGlow" cx="50%" cy="42%" r="60%">
              <stop offset="0%" stopColor="#ff7a4a" />
              <stop offset="45%" stopColor="#b3121f" />
              <stop offset="100%" stopColor="#2a0509" />
            </radialGradient>
          </defs>
          <path
            d="M110,10 C170,10 205,110 205,175 C205,235 165,270 110,270 C55,270 15,235 15,175 C15,110 50,10 110,10 Z"
            fill="url(#eggGlow)"
          />
          <path d="M80,60 L95,120 L70,150 L110,220" stroke="#1a0304" strokeWidth="3" fill="none" opacity="0.6" />
        </svg>
      </motion.div>
    </div>
  ),

  end: (
    <div className="relative h-full w-full bg-[#040206]">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 40%, #1c0509 0%, #0a0306 50%, #030204 100%)",
        }}
      />
      <div
        className="absolute left-1/2 top-[18%] h-20 w-20 -translate-x-1/2 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle at 35% 35%, #b3121f, #4a0a0f 70%)",
          boxShadow: "0 0 60px 18px rgba(150,20,20,0.3)",
        }}
      />
    </div>
  ),
};
