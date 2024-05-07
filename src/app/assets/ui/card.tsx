

export default function Card({ msg, cardStyle }: Readonly<{ msg: string; cardStyle: string; }>) {
    return (
        <div className={`flex items-center w-full h-12 p-1 rounded-lg m-1 ${cardStyle}`}>
            <p className="text-md m-0.5">{msg}</p>
        </div>
    );
}
