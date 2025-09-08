import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/labours.module.css";
import { labours } from "../../data/labours";

export const metadata = {
  title: "Labours",
  description: "List of available labours",
};

export default function LaboursPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Available Labours</h1>
        <p className={styles.subtitle}>Click a card to see more details</p>
      </header>

      <section className={styles.grid} aria-label="Labours">
        {labours.map((worker) => (
          <Link
            key={worker.id}
            href={`/labours/${worker.id}`}
            className={styles.cardLink}
            aria-label={`View details for ${worker.name}, ${worker.profession}`}
          >
            <article className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={
                    worker.photo ||
                    "/placeholder.svg?height=240&width=384&query=worker portrait"
                  }
                  alt={`${worker.name} - ${worker.profession}`}
                  width={384} // ✅ specify width & height
                  height={240}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.name}>{worker.name}</h2>
                <p className={styles.profession}>{worker.profession}</p>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
