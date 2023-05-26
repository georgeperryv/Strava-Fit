import { FunctionComponent } from "react";
import styles from "./FilterDropdown.module.css";

type FilterDropdownType = {
  onClose?: () => void;
};

const FilterDropdown: FunctionComponent<FilterDropdownType> = ({ onClose }) => {
  return (
    <div className={styles.filterDropdown}>
      <div className={styles.filtermodal}>
        <div className={styles.distancefilter}>
          <div className={styles.distanceslider}>
            <div className={styles.labels}>
              <div className={styles.distance}>Distance</div>
              <div className={styles.distance}>Any</div>
            </div>
            <div className={styles.slider}>
              <div className={styles.knob} />
              <div className={styles.selectedarea} />
              <div className={styles.knob} />
            </div>
          </div>
        </div>
        <div className={styles.timefilter}>
          <div className={styles.distance}>Time</div>
          <div className={styles.options}>
            <div className={styles.row1}>
              <div className={styles.activitytag}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src="/run1.svg" />
                </div>
                <div className={styles.moderate}>{`< 15 min`}</div>
              </div>
              <div className={styles.activitytag}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src="/run1.svg" />
                </div>
                <div className={styles.moderate}>15 - 30 min</div>
              </div>
              <div className={styles.activitytag}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src="/run1.svg" />
                </div>
                <div className={styles.moderate}>30 - 45 min</div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.activitytag}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src="/run1.svg" />
                </div>
                <div className={styles.moderate}>45 min - 1 hr</div>
              </div>
              <div className={styles.activitytag}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src="/run1.svg" />
                </div>
                <div className={styles.moderate}>1 hr +</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.timefilter}>
          <div className={styles.distance}>Difficulty</div>
          <div className={styles.difficultybuttonradio}>
            <div className={styles.difficultybutton}>
              <div className={styles.moderate}>Any</div>
            </div>
            <div className={styles.difficultybutton1}>
              <div className={styles.moderate}>Easy</div>
            </div>
            <div className={styles.difficultybutton1}>
              <div className={styles.moderate}>Moderate</div>
            </div>
            <div className={styles.difficultybutton1}>
              <div className={styles.moderate}>Hard</div>
            </div>
          </div>
        </div>
        <div className={styles.instructorfilter}>
          <div className={styles.distance}>Instructor</div>
          <div className={styles.dropdownfield}>
            <div className={styles.moderate}>All Instructors</div>
            <img className={styles.dropdownIcon} alt="" src="/dropdown5.svg" />
          </div>
        </div>
        <div className={styles.ctas}>
          <b className={styles.moderate}>Clear All</b>
          <div className={styles.primarybuttonshug}>
            <b className={styles.moderate}>Show Results</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
