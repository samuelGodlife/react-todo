import styles from './MaxWidthWrapper.module.css'; // Import the CSS module

export default function MaxWidthWrapper({ className, children }) {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      {children}
    </div>
  );
}
