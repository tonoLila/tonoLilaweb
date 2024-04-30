import styles from "@styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/social/facebook.svg"></img>
      </a>
      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/social/instagram.svg"></img>
      </a>
      <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/social/youtube.svg"></img>
      </a>
    </div>
  );
};

export default Footer;
