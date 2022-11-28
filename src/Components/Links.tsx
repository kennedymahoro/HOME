const Links = (props: { div: string; links: string }) => {
  return (
    <div className={props.div}>
      <a className={` ${props.links} bg-yellow-400`} href="">
        About
      </a>
      <a className={` ${props.links} bg-blue-500`} href="">
        Projects
      </a>
      <a className={` ${props.links} bg-yellow-400`} href="">
        Contact
      </a>
    </div>
  );
};
export default Links;
