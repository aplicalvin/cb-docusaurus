import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Materi Terstruktur',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Belajar mulai dari sintaks paling dasar, hingga konsep lanjutan C++
        seperti Object-Oriented Programming, Pointer, dan Manajemen Memori.
      </>
    ),
  },
  {
    title: 'Contoh Kode Praktis',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Setiap topik dilengkapi dengan contoh program (source code) yang
        dapat langsung Anda salin, jalankan, dan modifikasi sendiri.
      </>
    ),
  },
  {
    title: 'Fokus pada Problem Solving',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Kembangkan logika pemrograman Anda dengan berlatih menggunakan
        studi kasus dan penyelesaian masalah yang relevan di dunia nyata.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
