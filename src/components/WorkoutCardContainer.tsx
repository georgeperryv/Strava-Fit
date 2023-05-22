import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./WorkoutCardContainer.module.css";

type WorkoutCardContainerType = {
  gabriellaHill?: string;
  sampleCard?: string;
  textHereTextHereTextHereT?: string;
  time?: string;
  min?: string;
  difficulty?: string;
  easy?: string;

  /** Style props */
  propFlex?: Property.Flex;
  propWidth?: Property.Width;
};

const WorkoutCardContainer: FunctionComponent<WorkoutCardContainerType> = ({
  gabriellaHill,
  sampleCard,
  textHereTextHereTextHereT,
  time,
  min,
  difficulty,
  easy,
  propFlex,
  propWidth,
}) => {
  const workoutCard1Style: CSS.Properties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div className={styles.workoutcard} style={workoutCard1Style}>
      <div className={styles.workoutmediumrun}>
        <img className={styles.gabriellahillIcon} alt="" src={gabriellaHill} />
      </div>
      <div className={styles.cardinfo}>
        <div className={styles.details}>
          <b className={styles.sampleCard}>{sampleCard}</b>
          <div className={styles.textHereText}>{textHereTextHereTextHereT}</div>
        </div>
        <div className={styles.statswithcta}>
          <div className={styles.stats}>
            <div className={styles.statssmall}>
              <img className={styles.timeIcon} alt="" src={time} />
              <div className={styles.min}>{min}</div>
            </div>
            <div className={styles.statssmall}>
              <img className={styles.timeIcon} alt="" src={difficulty} />
              <div className={styles.min}>{easy}</div>
            </div>
          </div>
          <div className={styles.primarybuttonsdefault}>
            <div className={styles.min}>Begin Workout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCardContainer;
