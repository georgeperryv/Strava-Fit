import { FunctionComponent } from "react";
import styles from "./InstructorInfoContainer.module.css";
const InstructorInfoContainer: FunctionComponent = () => {
  return (
    <div className={styles.instructorinfo}>
      <div className={styles.aboutinstructor}>
        <div className={styles.headerexpanded}>
          <b className={styles.aboutYourInstructor}>About Your Instructor</b>
          <img className={styles.dropdownIcon} alt="" src="/dropdown3.svg" />
        </div>
        <div
          className={styles.gabriellaIsA}
        >{`Gabriella is a road racing athlete and humble pro. She’s got gold medals and big wins at the Olympics and is committed to make running more accessible. We love her real-deal attitude and pumped up spirit! `}</div>
      </div>
      <div className={styles.moreinstructor}>
        <div className={styles.imageandheader}>
          <div className={styles.gabriellaprofileimage}>
            <img
              className={styles.womanSmiling1Icon}
              alt=""
              src="/woman-smiling-1@2x.png"
            />
          </div>
          <b className={styles.yourInstructor}>your instructor</b>
        </div>
        <div className={styles.instructorinfoandcta}>
          <div className={styles.instructorinfo1}>
            <div className={styles.gabriellaBakar}>Gabriella Bakar</div>
            <div className={styles.totalinstructorworkouts}>
              <img className={styles.workoutIcon} alt="" src="/workout.svg" />
              <div className={styles.workouts}>18 workouts</div>
            </div>
          </div>
          <div className={styles.secondarybuttonsdefault}>
            <div className={styles.workouts}>View All From Gabriella</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorInfoContainer;
