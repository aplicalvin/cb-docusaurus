import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Web Basic',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Mulai petualanganmu dari fundamental Web Development. Pelajari HTML, CSS, dan Javascript dari awal!
      </>
    ),
    link: '/web-basic/intro',
    linkText: 'Mulai Quest Web 🌐',
  },
  {
    title: 'Algorithm',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Asah logikamu dengan memecahkan berbagai teka-teki algoritma. Persiapkan dirimu untuk tantangan nyata!
      </>
    ),
    link: '/algorithm/intro',
    linkText: 'Mulai Quest Algo 🧠',
  },
  {
    title: 'C++ Basic',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Masuki dungeon C++ dan pelajari bahasa pemrograman inti yang sangat kuat, mulai dari syntax hingga memori.
      </>
    ),
    link: '/cpp-basic/intro',
    linkText: 'Mulai Quest C++ ⚔️',
  },
  {
    title: 'C++ Basic',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Masuki dungeon C++ dan pelajari bahasa pemrograman inti yang sangat kuat, mulai dari syntax hingga memori.
      </>
    ),
    link: '/cpp-basic/intro',
    linkText: 'Mulai Quest C++ ⚔️',
  },
];

function Feature({ Svg, title, description, link, linkText }) {
  return (
    <div className={clsx('col col--4', 'margin-bottom--lg')}>
      <div className="card padding--lg" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md" style={{ flexGrow: 1 }}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
        <div className="text--center margin-top--md">
          <Link className="button button--primary button--block" to={link}>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section id="quests" className={styles.features} style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
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
