const Links = (props: { div: string; links: string }) => {
  return (
    <div className={props.div}>
      <a className={` ${props.links} bg-yellow-400`} href="#Projects">
        Projects
      </a>
      <a className={` ${props.links} bg-blue-500`} href="#Contact">
        Contact
      </a>
      <a className={` ${props.links} bg-yellow-400`} href="#About">
        About
      </a>
      <a className={` ${props.links} bg-yellow-400`} href="#Blog">
        Blog
      </a>
    </div>
  );
};
export default Links;
