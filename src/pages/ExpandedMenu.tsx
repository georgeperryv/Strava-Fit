import { FunctionComponent } from "react";
import styles from "./ExpandedMenu.module.css";

type ExpandedMenuType = {
  onClose?: () => void;
};

const ExpandedMenu: FunctionComponent<ExpandedMenuType> = ({ onClose }) => {
  return (
    <div className={styles.expandedmenu}>
      <div className={styles.partialborder} />
      <div className={styles.navlinks}>
        <div className={styles.subscriberonlylinks}>
          <div className={styles.subscriptionsectionheader}>
            <div className={styles.subscription}>SUBSCRIPTION</div>
          </div>
          <div className={styles.navlinkcontainersubcategoory}>
            <b className={styles.dashboard}>Explore Workouts</b>
          </div>
          <div className={styles.navlinkcontainersubcategoory}>
            <div className={styles.dashboard1}>My Saved Workouts</div>
          </div>
        </div>
      </div>
      <div className={styles.activeindicator} />
    </div>
  );
};

export default ExpandedMenu;
