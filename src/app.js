import styles from "./styles/app.module.scss";

const app = () => {
  return (
    <section className={styles.container}>
      <div>West Entrance</div>
      <div>East Entrance</div>
      <div>South Entrance</div>
    </section>
  );
};

export default app;
