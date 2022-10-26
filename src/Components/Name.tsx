const Name = () => {
    const FirstNameStr = "KENNEDY";
    const SecondNameStr = "MAHORO";
    const FirstNameArray = FirstNameStr.split("");
    const SecondNameArray = SecondNameStr.split("");
    console.log(FirstNameArray)


    return (
        <div>
            <h1 className="font-haruno">{FirstNameArray}</h1>
            <h1 className="font-haruno">{SecondNameArray}</h1>
        </div>
    )
}

export default Name;