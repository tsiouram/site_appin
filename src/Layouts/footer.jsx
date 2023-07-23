import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative pt-8 pb-6">
      <div className="absolute top-0 h-full w-full bg-[url('/public/img/portfolio.jpg')] bg-cover bg-center" style={{ opacity: "0.3" }} />
      <div className="absolute top-0 h-full w-full bg-cover bg-center" />
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h2" className="mb-4" color="blue-gray">

              <b className='logo'> APP'IN</b> TECHNOLOGIE
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-1 gap-24 lg:mt-0 menfoot">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.icon}&nbsp;&nbsp; {item.name}
                      </Typography>

                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "App'in Technologie",
  description:
    "Nous sommes à votre entière disposition pour vous servir et répondre à tous vos besoins. N'hésitez pas à nous contacter pour bénéficier d'une assistance personnalisée et de solutions adaptées à vos attentes..",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/profile.php?id=100063542538378&mibextid=LQQJ4d",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "#",
    },
    {
      color: "red",
      name: "instagram",
      path: "#/",
    },
  ],
  menus: [
    {
      name: "information",
      items: [
        // { name: "A Propos", path: "#" },
        {icon:<i className={`fa-solid fa-map-marker`} />, name: "Lot II G 32 KZ TEL Ambatomaro" },
        {icon:<i className={`fa-solid fa-phone`} />, name: "+261 34 84 990 04" },
        {icon: <i className={`fa-brands fa-whatsapp`} />, name: "+261 32 76 786 03" },
        // { name: "appin@gmail.com" },
      ],
    },
  ],
  copyright: (
    <>
      © {" "}
      <a
        href="#"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        App'in Technologie
      </a>
      {" "}
      {year}. Tous droit réservés
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
