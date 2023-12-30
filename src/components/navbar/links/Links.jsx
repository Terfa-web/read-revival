import Link from "next/link";

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Founder", path: "/founder" },
    { title: "Trustees", path: "/trustees" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
    { title: "Ourwork", path: "/ourwork" },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
