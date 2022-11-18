const Title = (props: { h2: string; div: string }) => {
  return (
    <div className={props.div}>
      <h2 className={props.h2}>Front End Developer</h2>
    </div>
  );
};
export default Title;
