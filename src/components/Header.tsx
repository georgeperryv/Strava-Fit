import { FunctionComponent } from "react";
import styles from "./Header.module.css";
const Header: FunctionComponent = () => {
  return (
    <div className={styles.navbarwrapper}>
      <div className={styles.navbarcontainerdesktop}>
        <div className={styles.navmenu}>
          <div className={styles.logoandsearch}>
            <img
              className={styles.stravaLogoIcon}
              alt=""
              src="/stravalogo.svg"
            />
            <div className={styles.searchiconwrapper}>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
            </div>
          </div>
          <div className={styles.navlinks}>
            <div className={styles.navlinks1}>
              <div className={styles.pagetab}>
                <div className={styles.pagetablabel}>
                  <div className={styles.label}>Dashboard</div>
                  <img
                    className={styles.dropdownIcon}
                    alt=""
                    src="/dropdown.svg"
                  />
                </div>
                <div className={styles.activeindicator} />
              </div>
            </div>
            <div className={styles.navlinks2}>
              <div className={styles.pagetab}>
                <div className={styles.pagetablabel}>
                  <div className={styles.label}>Training</div>
                  <img
                    className={styles.dropdownIcon}
                    alt=""
                    src="/dropdown.svg"
                  />
                </div>
                <div className={styles.activeindicator} />
              </div>
            </div>
            <div className={styles.navlinks2}>
              <div className={styles.pagetab}>
                <div className={styles.pagetablabel}>
                  <div className={styles.label}>Explore</div>
                  <img
                    className={styles.dropdownIcon}
                    alt=""
                    src="/dropdown.svg"
                  />
                </div>
                <div className={styles.activeindicator} />
              </div>
            </div>
            <div className={styles.navlinks2}>
              <div className={styles.pagetab}>
                <div className={styles.pagetablabel}>
                  <div className={styles.label}>Challenges</div>
                  <img
                    className={styles.dropdownIcon3}
                    alt=""
                    src="/dropdown.svg"
                  />
                </div>
                <div className={styles.activeindicator} />
              </div>
            </div>
            <div className={styles.navlinks5}>
              <div className={styles.pagetab}>
                <div className={styles.pagetablabel4}>
                  <b className={styles.label}>StravaFit</b>
                  <img
                    className={styles.dropdownIcon}
                    alt=""
                    src="/dropdown1.svg"
                  />
                </div>
                <div className={styles.activeindicator4} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.usermenu}>
          <div className={styles.notificationsnavitem}>
            <img className={styles.bellIcon} alt="" src="/bell.svg" />
          </div>
          <div className={styles.profilenavitem}>
            <img
              className={styles.userprofileimageIcon}
              alt=""
              src="/-userprofileimage@2x.png"
            />
            <img className={styles.dropdownIcon} alt="" src="/dropdown2.svg" />
          </div>
          <div className={styles.notificationsnavitem}>
            <img className={styles.searchIcon} alt="" src="/add.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
