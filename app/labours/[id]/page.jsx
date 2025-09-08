import Link from "next/link";
import Image from "next/image"; // ✅ added
import { notFound } from "next/navigation";
import styles from "../../../styles/labours.module.css";
import { labours } from "../../../data/labours";

export function generateMetadata({ params }) {
  const worker = labours.find((w) => w.id === params.id);
  return {
    title: worker
      ? `${worker.name} - ${worker.profession}`
      : "Labour not found",
    description: worker
      ? worker.description
      : "The requested labour profile was not found.",
  };
}

export default function LabourDetailPage({ params }) {
  const worker = labours.find((w) => w.id === params.id);
  if (!worker) return notFound();

  return (
    <main className={styles.container}>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/labours" className={styles.backLink}>
          &larr; Back to list
        </Link>
      </nav>

      <article className={styles.detailCard}>
        <div className={styles.detailMedia}>
          <Image
            src={
              worker.photo ||
              "/placeholder.svg?height=400&width=600&query=worker portrait"
            }
            alt={`${worker.name} - ${worker.profession}`}
            width={600} // ✅ required
            height={400} // ✅ required
            className={styles.detailImage}
          />
        </div>
        <div className={styles.detailBody}>
          <h1 className={styles.detailName}>{worker.name}</h1>
          <p className={styles.detailProfession}>{worker.profession}</p>
          <p className={styles.detailDescription}>{worker.description}</p>

          {worker.experience && (
            <p className={styles.detailMeta}>
              <strong>Experience:</strong> {worker.experience} years
            </p>
          )}
          {worker.location && (
            <p className={styles.detailMeta}>
              <strong>Location:</strong> {worker.location}
            </p>
          )}
          {worker.rate && (
            <p className={styles.detailMeta}>
              <strong>Hourly Rate:</strong> {worker.rate}
            </p>
          )}
        </div>
      </article>
    </main>
  );
}
