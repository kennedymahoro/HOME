const Name = () => {
    let int = 0;
    const FirstNameStr = "KENNEDY";
    const SecondNameStr = "MAHORO";
    const FirstNameArray = FirstNameStr.split("").map(a => (<span key={int++}>{a}</span>))
    const SecondNameArray = SecondNameStr.split("").map(a => (<span key={int++}>{a}</span>))


    return (
        <div>
            <h1 className="font-haruno text-black">{FirstNameArray}</h1>
            <h1 className="font-haruno text-black">{SecondNameArray}</h1>
        </div>
    )
}

export default Name;