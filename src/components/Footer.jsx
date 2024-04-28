import styles from "@styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/social/fb.png"></img>
      </a>
      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/social/ig.png"></img>
      </a>
      <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/social/tw.png"></img>
      </a>
    </div>
  );
};

export default Footer;
