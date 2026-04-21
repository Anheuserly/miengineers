import styles from "./MapEmbed.module.css";

const mapQuery = encodeURIComponent(
  "R-126, Joga Bai Extension, Jamia Nagar, New Delhi - 110025",
);

export function MapEmbed() {
  return (
    <div className={styles.shell}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Location</span>
        <h3>Operationally anchored in Jamia Nagar, serving Delhi NCR.</h3>
        <p>
          Site visits, project discussions, breakdown dispatch, and maintenance
          coordination can be arranged across Delhi, Noida, Ghaziabad, Faridabad,
          and Gurugram.
        </p>
      </div>

      <div className={styles.frame}>
        <iframe
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          title="MI Engineers location"
        />
      </div>
    </div>
  );
}
