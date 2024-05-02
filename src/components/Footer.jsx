import styles from "@styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <a
        href="https://www.facebook.com/profile.php?id=100063706470715&locale=es_LA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/social/facebook.svg"></img>
      </a>
      <a
        href="https://www.instagram.com/tonolila/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/social/instagram.svg"></img>
      </a>
      <a
        href="https://www.youtube.com/@tonolila"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/social/youtube.svg"></img>
      </a>
    </div>
  );
};

export default Footer;
