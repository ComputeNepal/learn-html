import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Learn",
    Svg: require("@site/static/img/knowledge.svg").default,
    description: (
      <>
        This is a course of HTML designed by ComputeNepal to help you focus more
        on learning and improve your knowledge of HTML.
      </>
    ),
  },
  {
    title: "Open Source Curriculum",
    Svg: require("@site/static/img/developer_activity.svg").default,
    description: (
      <>
        Course content in this website is open source and is availabe for
        everyone for free. Anyone can help improve this course curriculum.
      </>
    ),
  },
  {
    title: "Powered by ComputeNepal",
    Svg: require("@site/static/img/support.svg").default,
    description: (
      <>
        This website is powered by ComputeNepal. We provide you with the access
        to the community of skilled and geek people.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
