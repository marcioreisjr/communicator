

export default function Card({ msg, cardStyle }: Readonly<{ msg: string; cardStyle: string; }>) {
    return (
        <div translate="no" className={`flex items-center min-h-fit p-1 rounded-lg m-2 ${cardStyle}`}>
            <p className="text-md m-0.5">{msg}</p>
        </div>
    );
}
