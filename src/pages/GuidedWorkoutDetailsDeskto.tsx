import { FunctionComponent } from "react";
import Header from "../components/Header";
import RunContainer from "../components/RunContainer";
import InstructorInfoContainer from "../components/InstructorInfoContainer";
import RecentActivitiesContainer from "../components/RecentActivitiesContainer";
import styles from "./GuidedWorkoutDetailsDeskto.module.css";
const GuidedWorkoutDetailsDeskto: FunctionComponent = () => {
  return (
    <div className={styles.guidedWorkoutDetailsDeskto}>
      <Header />
      <div className={styles.pagewrapper}>
        <div className={styles.fullsizeimagecontainer}>
          <img
            className={styles.gabriellaEasyRunIcon}
            alt=""
            src="/gabriella-easy-run@2x.png"
          />
          <img className={styles.playIcon} alt="" src="/play.svg" />
        </div>
        <div className={styles.pagecontainer}>
          <RunContainer />
          <InstructorInfoContainer />
        </div>
      </div>
      <RecentActivitiesContainer
        productIds="/run.svg"
        productIdsText="/run.svg"
        productDimensions="/stravalogo1.svg"
      />
    </div>
  );
};

export default GuidedWorkoutDetailsDeskto;
