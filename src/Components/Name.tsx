const Name = (props: { h1: string; div: string }) => {
  let int = 0;
  const FirstNameStr = "KENNEDY MAHORO";
  const FirstNameArray = FirstNameStr.split("").map((a) => (
    <span key={int++}>{a}</span>
  ));

  return (
    <div className={props.div}>
      <h1 className={props.h1}>{FirstNameArray}</h1>
    </div>
  );
};

export default Name;
