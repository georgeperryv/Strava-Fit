import { FunctionComponent } from "react";
import styles from "./RecentActivitiesContainer.module.css";

type RecentActivitiesContainerType = {
  productIds?: string;
  productIdsText?: string;
  productDimensions?: string;
};

const RecentActivitiesContainer: FunctionComponent<
  RecentActivitiesContainerType
> = ({ productIds, productIdsText, productDimensions }) => {
  return (
    <div className={styles.footerwrapper}>
      <div className={styles.promofooter}>
        <div className={styles.footercontainer}>
          <div className={styles.recentactivities}>
            <div className={styles.yourRecentActivities}>
              Your Recent Activities
            </div>
            <div className={styles.activitieslist}>
              <div className={styles.activity}>
                <img
                  className={styles.strengthIcon}
                  alt=""
                  src="/strength.svg"
                />
                <div className={styles.lunchWeightTraining}>
                  Lunch Weight Training
                </div>
              </div>
              <div className={styles.activity}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src={productIds} />
                </div>
                <div className={styles.lunchWeightTraining}>
                  Lunch Stair-Stepper
                </div>
              </div>
              <div className={styles.activity}>
                <img
                  className={styles.strengthIcon}
                  alt=""
                  src="/strength.svg"
                />
                <div className={styles.lunchWeightTraining}>
                  Afternoon Weight Training
                </div>
              </div>
              <div className={styles.activity}>
                <img
                  className={styles.strengthIcon}
                  alt=""
                  src="/strength.svg"
                />
                <div className={styles.lunchWeightTraining}>
                  Lunch Weight Training
                </div>
              </div>
              <div className={styles.activity}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src={productIdsText} />
                </div>
                <div className={styles.lunchWeightTraining}>
                  Lunch Stair-Stepper
                </div>
              </div>
            </div>
          </div>
          <div className={styles.recentactivities}>
            <div className={styles.yourRecentActivities}>Strava Blog</div>
            <div className={styles.readOurBlogContainer}>
              <span>Read our blog</span>
              <span className={styles.adventureStoriesTraining}>
                {" "}
                – adventure stories, training tips and insights from the
                community.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.globalfooter}>
        <div className={styles.footercontainer1}>
          <div className={styles.logowithcopyright}>
            <img
              className={styles.stravaLogoIcon}
              alt=""
              src={productDimensions}
            />
            <div className={styles.lunchWeightTraining}>© 2023 Strava</div>
          </div>
          <div className={styles.aboutnavlinks}>
            <div className={styles.yourRecentActivities}>About</div>
            <div className={styles.categorylinks}>
              <div className={styles.features}>About</div>
              <div className={styles.features}>Features</div>
              <div className={styles.features}>Mobile</div>
              <div className={styles.features}>Subscription</div>
              <div className={styles.features}>Student Discount</div>
              <div className={styles.features}>Privacy Policy</div>
              <div className={styles.features}>
                <p className={styles.doNotShare}>Do Not Share</p>
                <p className={styles.doNotShare}>My Personal Information</p>
              </div>
              <div className={styles.features}>Terms and Conditions</div>
              <div className={styles.aboutOurMaps}>About Our Maps</div>
            </div>
          </div>
          <div className={styles.aboutnavlinks}>
            <div className={styles.yourRecentActivities}>Explore</div>
            <div className={styles.categorylinks}>
              <div className={styles.features}>Routes</div>
              <div className={styles.features}>Paris 2023 Marathon</div>
              <div className={styles.features}>Boston 2023 Marathon</div>
              <div className={styles.features}>London 2023 Marathon</div>
            </div>
          </div>
          <div className={styles.aboutnavlinks}>
            <div className={styles.yourRecentActivities}>Follow</div>
            <div className={styles.categorylinks}>
              <div className={styles.features}>Facebook</div>
              <div className={styles.features}>Twitter</div>
              <div className={styles.features}>Instagram</div>
              <div className={styles.features}>Youtube</div>
              <div className={styles.features}>LinkedIn</div>
              <div className={styles.features}>Blog</div>
            </div>
          </div>
          <div className={styles.aboutnavlinks}>
            <div className={styles.yourRecentActivities}>Help</div>
            <div className={styles.categorylinks3}>
              <div className={styles.features}>Strava Support</div>
            </div>
          </div>
          <div className={styles.aboutnavlinks}>
            <div className={styles.yourRecentActivities}>More</div>
            <div className={styles.categorylinks}>
              <div className={styles.features}>Careers</div>
              <div className={styles.features}>Business</div>
              <div className={styles.features}>Developers</div>
              <div className={styles.features}>Labs</div>
              <div className={styles.features}>Strava Community Standards</div>
              <div className={styles.languagedropdown}>
                <div
                  className={styles.lunchWeightTraining}
                >{`English (US) `}</div>
                <img
                  className={styles.dropdownIcon}
                  alt=""
                  src="/dropdown4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivitiesContainer;
