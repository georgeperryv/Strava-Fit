import { FunctionComponent } from "react";
import styles from "./WorkoutLink.module.css";

type WorkoutLinkType = {
  classDescription?: string;
  className?: string;
  classInstructorName?: string;
  classId?: string;
  classDuration?: string;
  classImageId?: string;
  classType?: string;

  /** Action props */
  onWorkoutCard1Click?: () => void;
};

const WorkoutLink: FunctionComponent<WorkoutLinkType> = ({
  classDescription,
  className,
  classInstructorName,
  classId,
  classDuration,
  classImageId,
  classType,
  onWorkoutCard1Click,
}) => {
  return (
    <a className={styles.workoutcard} onClick={onWorkoutCard1Click}>
      <div className={styles.workoutmediumother}>
        <img className={styles.zoeyogaIcon} alt="" src={classDescription} />
      </div>
      <div className={styles.cardinfo}>
        <div className={styles.details}>
          <b className={styles.sampleCard}>{className}</b>
          <div className={styles.textHereText}>{classInstructorName}</div>
        </div>
        <div className={styles.statswithcta}>
          <div className={styles.stats}>
            <div className={styles.statssmall}>
              <img className={styles.timeIcon} alt="" src={classId} />
              <div className={styles.min}>{classDuration}</div>
            </div>
            <div className={styles.statssmall1}>
              <img className={styles.timeIcon} alt="" src={classImageId} />
              <div className={styles.min}>{classType}</div>
            </div>
          </div>
          <div className={styles.primarybuttonsdefault}>
            <div className={styles.min}>Begin Workout</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkoutLink;
