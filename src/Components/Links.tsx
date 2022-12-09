const Links = (props: { div: string; links: string }) => {
  return (
    <div className={props.div}>
      <a className={` ${props.links}`} href="#Projects">
        Projects
      </a>
      <a className={` ${props.links} `} href="#Contact">
        Contact
      </a>
      <a className={` ${props.links} `} href="#About">
        About
      </a>
      <a className={` ${props.links} `} href="#Blog">
        Blog
      </a>
    </div>
  );
};
export default Links;
