import { FunctionComponent } from "react";
import styles from "./RunContainer.module.css";
const RunContainer: FunctionComponent = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.titleandstats}>
        <b className={styles.easyRunWith}>Easy Run with Gabriella</b>
        <div className={styles.workoutstats}>
          <div className={styles.statslarge}>
            <img className={styles.timeIcon} alt="" src="/time.svg" />
            <div className={styles.min}>20 min</div>
          </div>
          <div className={styles.statslarge}>
            <img className={styles.timeIcon} alt="" src="/difficulty.svg" />
            <div className={styles.min}>Easy</div>
          </div>
        </div>
      </div>
      <div className={styles.overviewwithcta}>
        <div className={styles.overview}>
          <div className={styles.joinGabriellaFor}>
            Join Gabriella for a low-impact run – you'll be guided through a
            motivating warm-up before jumping into the run. Run at an easy pace
            based on how your body feels, and get ready for the week ahead.
            We’ll wrap up a quick cooldown to help you recover.
          </div>
        </div>
        <div className={styles.cta}>
          <div className={styles.primarybuttonswithicon}>
            <img
              className={styles.starfilledIcon}
              alt=""
              src="/starfilled.svg"
            />
            <div className={styles.min}>Save</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunContainer;
