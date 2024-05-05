

export default function Card({ msg, bgColor, txColor }: Readonly<{ msg: string; bgColor: string; txColor: string; }>) {
    return (
        <div className="flex items-center w-full h-12 p-1 rounded-lg m-1" style={{ backgroundColor: bgColor }}>
            <p className="text-md m-0.5" style={{ color: txColor, margin: "0.5rem" }}>{msg}</p>
        </div>
    );
}
