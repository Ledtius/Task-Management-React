import footerStyles from "../../styles/Layout/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <small className={footerStyles.small}>
          {" "}
          © 2025 - Calet Devia - Todos los Derechos Reservados
        </small>
      </footer>
    </>
  );
};

export default Footer;
