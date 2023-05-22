import { FunctionComponent } from "react";
import styles from "./HIITContainer.module.css";
const HIITContainer: FunctionComponent = () => {
  return (
    <div className={styles.sortandfilter}>
      <div className={styles.filter}>
        <div className={styles.activitytag}>
          <div className={styles.run}>
            <img className={styles.runIcon} alt="" src="/run1.svg" />
          </div>
          <div className={styles.run1}>Run</div>
        </div>
        <div className={styles.activitytag}>
          <img className={styles.rideIcon} alt="" src="/ride.svg" />
          <div className={styles.run1}>Ride</div>
        </div>
        <div className={styles.activitytag}>
          <img className={styles.rideIcon} alt="" src="/strength.svg" />
          <div className={styles.run1}>Strength</div>
        </div>
        <div className={styles.activitytag}>
          <img className={styles.rideIcon} alt="" src="/yoga.svg" />
          <div className={styles.run1}>Yoga</div>
        </div>
        <div className={styles.activitytag}>
          <img className={styles.rideIcon} alt="" src="/hiit.svg" />
          <div className={styles.run1}>HIIT</div>
        </div>
      </div>
      <div className={styles.filterbutton}>
        <img className={styles.filterIcon} alt="" src="/filter.svg" />
      </div>
    </div>
  );
};

export default HIITContainer;
