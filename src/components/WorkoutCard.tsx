import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./WorkoutCard.module.css";

type WorkoutCardType = {
  treyCity?: string;
  sampleCard?: string;
  textHereTextHereTextHereT?: string;
  run?: string;
  mi?: string;
  difficulty?: string;
  easy?: string;

  /** Style props */
  propFlex?: Property.Flex;
  propWidth?: Property.Width;
};

const WorkoutCard: FunctionComponent<WorkoutCardType> = ({
  treyCity,
  sampleCard,
  textHereTextHereTextHereT,
  run,
  mi,
  difficulty,
  easy,
  propFlex,
  propWidth,
}) => {
  const workoutCardStyle: CSS.Properties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div className={styles.workoutcard} style={workoutCardStyle}>
      <div className={styles.workoutmediumrun}>
        <img className={styles.treycityIcon} alt="" src={treyCity} />
      </div>
      <div className={styles.cardinfo}>
        <div className={styles.details}>
          <b className={styles.sampleCard}>{sampleCard}</b>
          <div className={styles.textHereText}>{textHereTextHereTextHereT}</div>
        </div>
        <div className={styles.statswithcta}>
          <div className={styles.stats}>
            <div className={styles.statssmall}>
              <div className={styles.run}>
                <img className={styles.runIcon} alt="" src={run} />
              </div>
              <div className={styles.mi}>{mi}</div>
            </div>
            <div className={styles.statssmall}>
              <img className={styles.difficultyIcon} alt="" src={difficulty} />
              <div className={styles.mi}>{easy}</div>
            </div>
          </div>
          <div className={styles.primarybuttonsdefault}>
            <div className={styles.mi}>Begin Workout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
