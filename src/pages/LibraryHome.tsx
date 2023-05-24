import { FunctionComponent, useState, useRef, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, SplitButton, Button } from "react-bootstrap";
import FilterDropdown from "../components/FilterDropdown";
import PortalPopup from "../components/PortalPopup";
import { Link } from "react-router-dom";
import styles from "./LibraryHome.module.css";
const LibraryHome: FunctionComponent = () => {
  const filterDropdownContainerRef = useRef<HTMLDivElement>(null);
  const [isFilterDropdownPopupOpen, setFilterDropdownPopupOpen] =
    useState(false);

  const openFilterDropdownPopup = useCallback(() => {
    setFilterDropdownPopupOpen(true);
  }, []);

  const closeFilterDropdownPopup = useCallback(() => {
    setFilterDropdownPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.libraryHome}>
        <div className={styles.navbarwrapper}>
          <div className={styles.navbarcontainerdesktop}>
            <div className={styles.navmenu}>
              <button className={styles.logoandsearch}>
                <img
                  className={styles.stravaLogoIcon}
                  alt=""
                  src="/stravalogo2.svg"
                />
                <div className={styles.searchiconwrapper}>
                  <img className={styles.searchIcon} alt="" src="/search.svg" />
                </div>
              </button>
              <div className={styles.navlinks}>
                <div>
                  <div className={styles.pagetab}>
                    <div className={styles.pagetablabel}>
                      <div className={styles.label}>Dashboard</div>
                      <img className={styles.dropdownIcon} alt="" />
                    </div>
                    <div className={styles.activeindicator} />
                  </div>
                </div>
                <div className={styles.grid}>
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
                <div className={styles.grid}>
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
                <div className={styles.grid}>
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
                <DropdownButton
                  title="StravaFit"
                  variant="secondary"
                  align="start"
                  drop="down"
                  id="5"
                >
                  <Dropdown.Item>SUBSCRIPTION</Dropdown.Item>
                  <Dropdown.Item>Explore Workouts</Dropdown.Item>
                  <Dropdown.Item>My Saved Workouts</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <div className={styles.usermenu}>
              <div className={styles.notificationsnavitem}>
                <img className={styles.bellIcon} alt="" src="/bell1.svg" />
              </div>
              <div className={styles.profilenavitem}>
                <img
                  className={styles.userprofileimageIcon}
                  alt=""
                  src="/-userprofileimage@2x.png"
                />
                <img
                  className={styles.dropdownIcon}
                  alt=""
                  src="/dropdown2.svg"
                />
              </div>
              <div className={styles.notificationsnavitem}>
                <img className={styles.searchIcon} alt="" src="/add.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pagewrapper}>
          <div className={styles.pagecontainer}>
            <div className={styles.sortandfilter}>
              <div className={styles.filterItems}>
                <Button variant="outline-primary">Run</Button>
                <Button variant="outline-primary">Ride</Button>
                <Button variant="outline-primary">Strength</Button>
                <Button variant="outline-primary">Yoga</Button>
                <Button variant="outline-primary">HIIT</Button>
              </div>
              <div
                className={styles.filterDropdownContainer}
                ref={filterDropdownContainerRef}
                onClick={openFilterDropdownPopup}
              >
                <div className={styles.filterbutton}>
                  <img className={styles.filterIcon} alt="" src="/filter.svg" />
                </div>
              </div>
            </div>
            <div className={styles.libraryresults}>
              <div className={styles.recommendedsection}>
                <div className={styles.sectionheaderrecommended}>
                  <img
                    className={styles.userprofileimageIcon1}
                    alt=""
                    src="/-userprofileimage1@2x.png"
                  />
                  <div className={styles.text}>
                    <b className={styles.label}>Recommended For You</b>
                    <b className={styles.basedOnYour}>
                      Based on your activities
                    </b>
                  </div>
                </div>
                <div className={styles.cards}>
                  <div className={styles.grid}>
                    <div className={styles.col}>
                      <Link className={styles.workoutcard} to="/">
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/zainspeed@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Speed Run with Zain
                            </b>
                            <div className={styles.textHereText}>
                              This beginner-friendly speed run will improve your
                              strength through short and long intervals
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <div className={styles.run}>
                                  <img
                                    className={styles.runIcon}
                                    alt=""
                                    src="/run3.svg"
                                  />
                                </div>
                                <div className={styles.label}>2.5 mi</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty1.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/zoeyoga@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Restorative Yoga with Zoe
                            </b>
                            <div className={styles.textHereText}>
                              Wind down with a calming yoga session that
                              includes gentle and simple full body stretches for
                              relaxation
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time1.svg"
                                />
                                <div className={styles.label}>50 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty2.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/gabriellastrength@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b
                              className={styles.sampleCard}
                            >{`Arms & Abs with Gabriella`}</b>
                            <div className={styles.textHereText}>
                              Join Gabriella to tone your abs and sculpt your
                              abs in this quick and effective workout
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time2.svg"
                                />
                                <div className={styles.label}>15 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty3.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/talrun@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Fartlek Run with Tal
                            </b>
                            <div className={styles.textHereText}>
                              Build your endurance and speed in this 20-minute
                              Fartlek run with Tal and alternate your pace
                              across intervals
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty4.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.sectionheaderactivity}>
                  <div className={styles.run1}>
                    <img className={styles.runIcon} alt="" src="/run4.svg" />
                  </div>
                  <b className={styles.label}>Speed Runs</b>
                </div>
                <div className={styles.cards}>
                  <div className={styles.grid1}>
                    <div className={styles.col}>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/treycity@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Speed Run with Trey
                            </b>
                            <div className={styles.textHereText}>
                              These high intensity intervals are designed to
                              push you to your limits and test your speed and
                              endurance
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <div className={styles.run}>
                                  <img
                                    className={styles.runIcon}
                                    alt=""
                                    src="/run3.svg"
                                  />
                                </div>
                                <div className={styles.label}>3.0 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty1.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/gabriellahill@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Fartlek Run with Gabriella
                            </b>
                            <div className={styles.textHereText}>
                              Challenge your stamina in this fartlek run as
                              Gabriella guides you through drills from easy jogs
                              to all-out sprints
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time1.svg"
                                />
                                <div className={styles.label}>35 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty2.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/christyhill@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Hill Run with Christy
                            </b>
                            <div className={styles.textHereText}>
                              Find a hill or some stairs and join Christy in an
                              uphill adventure of strength and endurance
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time2.svg"
                                />
                                <div className={styles.label}>25 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty3.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-2@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Fartlek Run with Claire
                            </b>
                            <div className={styles.textHereText}>
                              This moderate-paced fartlek run incorporates
                              intervals of varied intensity to build your
                              stamina and speed
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>25 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty4.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.col}>
                      <div className={styles.workoutcard8}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-3@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Hill Repeats with Gina
                            </b>
                            <div className={styles.textHereText}>
                              Experience the challenge of tackling uphill climbs
                              and reap the rewards of increased strength and
                              speed
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>30 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty1.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard8}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/zainspeed1@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Speed Run with Zain
                            </b>
                            <div className={styles.textHereText}>
                              This beginner-friendly speed run will improve your
                              strength through short and long intervals
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <div className={styles.run}>
                                  <img
                                    className={styles.runIcon}
                                    alt=""
                                    src="/run5.svg"
                                  />
                                </div>
                                <div className={styles.label}>2.5 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty2.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard8}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/talrun1@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Fartlek Run with Tal
                            </b>
                            <div className={styles.textHereText}>
                              Build your endurance and speed in this 20-minute
                              Fartlek run with Tal and alternate your pace
                              across intervals
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time2.svg"
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty3.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.sectionheaderactivity}>
                  <div className={styles.run1}>
                    <img className={styles.runIcon} alt="" src="/run4.svg" />
                  </div>
                  <b className={styles.label}>Refreshing Runs</b>
                </div>
                <div className={styles.cards2}>
                  <div className={styles.grid}>
                    <div className={styles.col}>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/chelsea@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Recovery Run with Chelsea
                            </b>
                            <div className={styles.textHereText}>
                              Focus on an easy pace and low-intensity to give
                              your body a break by joining Chelsea for this
                              relaxing and restorative workout
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>35 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty1.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/gabriellawateer@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Easy Run with Gabriella
                            </b>
                            <div className={styles.textHereText}>
                              Join Gabriella for a low-impact run – run at an
                              easy pace based on how your body feels, and get
                              ready for the week ahead
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time1.svg"
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty2.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/andre@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Recovery Run with Andre
                            </b>
                            <div className={styles.textHereText}>
                              Perfect for cooldowns or low-intensity days –
                              Andre has designed this quick run to help you
                              recover and get your body moving
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time2.svg"
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty3.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/marionrun@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Easy Run with Marion
                            </b>
                            <div className={styles.textHereText}>
                              Recharge and destress in 40 minutes – move at a
                              comfortable pace to aid recovery and prevent
                              injury
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>40 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty4.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.sectionheaderactivity}>
                  <div className={styles.run1}>
                    <img className={styles.runIcon} alt="" src="/run4.svg" />
                  </div>
                  <b className={styles.label}>Long Runs</b>
                </div>
                <div className={styles.cards}>
                  <div className={styles.grid3}>
                    <div className={styles.col}>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/tolurun@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              5K Long Run with Tolu
                            </b>
                            <div className={styles.textHereText}>
                              Lace up your shoes and hit the pavement with Tolu
                              for a 5K run with Tolu's expert coaching
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <div className={styles.run}>
                                  <img
                                    className={styles.runIcon}
                                    alt=""
                                    src="/run3.svg"
                                  />
                                </div>
                                <div className={styles.label}>3.1 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty1.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-5@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              10K Long Run with Tony
                            </b>
                            <div className={styles.textHereText}>
                              Take your endurance to the next level over the
                              next 6.2 miles – this run will help you build
                              stamina and mental toughness
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <div className={styles.run}>
                                  <img
                                    className={styles.runIcon}
                                    alt=""
                                    src="/run5.svg"
                                  />
                                </div>
                                <div className={styles.label}>6.2 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty2.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/pexelsrunffwpu1555354-1@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Half Marathon Progressive Run with Samir
                            </b>
                            <div className={styles.textHereText}>
                              Prep for your half marathon with this progressive
                              run and Samir’s coaching
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <div className={styles.run}>
                                  <img
                                    className={styles.runIcon}
                                    alt=""
                                    src="/run6.svg"
                                  />
                                </div>
                                <div className={styles.label}>10.5 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty3.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/pexelsrunffwpu2403045-1@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Half Marathon Progressive Run with Vivian
                            </b>
                            <div className={styles.textHereText}>
                              You’ll be unstoppable after 12 miles of this
                              progressive run with Vivian
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <div className={styles.run}>
                                  <img
                                    className={styles.runIcon}
                                    alt=""
                                    src="/run7.svg"
                                  />
                                </div>
                                <div className={styles.label}>12.0 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty4.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.col5}>
                      <div className={styles.workoutcard8}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/pexelsrunffwpu2567025-1@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo19}>
                          <div className={styles.details19}>
                            <b className={styles.sampleCard}>Sample Card</b>
                            <div className={styles.textHereText}>
                              Join Fredi for an epic progressive run over 20
                              miles – this run will push you to new heights of
                              physical and mental endurance
                            </div>
                          </div>
                          <div className={styles.stats19}>
                            <div className={styles.statssmall}>
                              <div className={styles.run}>
                                <img
                                  className={styles.runIcon}
                                  alt=""
                                  src="/run3.svg"
                                />
                              </div>
                              <div className={styles.label}>20.0 mi</div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty1.svg"
                              />
                              <div className={styles.label}>Hard</div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.label}>Begin Workout</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.sectionheaderactivity}>
                  <img className={styles.searchIcon} alt="" src="/ride.svg" />
                  <b className={styles.label}>Speed Rides</b>
                </div>
                <div className={styles.cards}>
                  <div className={styles.grid}>
                    <div className={styles.col}>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-7@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Fartlek Ride with Nate
                            </b>
                            <div className={styles.textHereText}>
                              Join Nate for a dynamic ride! This 45-minute
                              workout features varying intensities and paces to
                              keep you engaged and energized
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>45 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty1.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-8@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Time Trial with Greg
                            </b>
                            <div className={styles.textHereText}>
                              Ready to test your speed? This time trial will
                              challenge you to go the distance and push yourself
                              to improve your time
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/ride1.svg"
                                />
                                <div className={styles.label}>15.0 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty2.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-9@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Interval Ride with Kendrick
                            </b>
                            <div className={styles.textHereText}>
                              This 60-minute ride will have you sweating as you
                              tackle intense intervals to improve your speed and
                              endurance
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time2.svg"
                                />
                                <div className={styles.label}>60 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty3.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-10@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Hill Repeats with Matt
                            </b>
                            <div className={styles.textHereText}>
                              Tackle steep inclines and build stamina with Matt
                              – this guided workout is perfect for those working
                              on endurance and strength
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>30 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty4.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.sectionheaderactivity}>
                  <img className={styles.searchIcon} alt="" src="/ride.svg" />
                  <b className={styles.label}>Long Rides</b>
                </div>
                <div className={styles.cards}>
                  <div className={styles.grid}>
                    <div className={styles.col}>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/mariongroup@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Easy Ride with Marion
                            </b>
                            <div
                              className={styles.textHereText}
                            >{`Enjoy the scenery during this low intensity ride that will leave you refreshed and energized `}</div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>60 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty1.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/sebastianrace@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Tempo Ride with Sebastian
                            </b>
                            <div className={styles.textHereText}>
                              Challenge your stamina and improve your speed over
                              the course of 40 miles in this tempo ride
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/ride1.svg"
                                />
                                <div className={styles.label}>40.0 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty2.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/joelfall@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Hill Climb with Joel
                            </b>
                            <div className={styles.textHereText}>
                              Tackle those hills as Joel guides you through this
                              25 mile climb – if you’re up for the challenge
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/ride2.svg"
                                />
                                <div className={styles.label}>25.0 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty3.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/elanaendurance@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Endurance Ride with Elana
                            </b>
                            <div className={styles.textHereText}>
                              Cyclists of all levels can improve their aerobic
                              capacity and build endurance in this moderate pace
                              ride
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>75 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty4.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.sectionheaderactivity}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/strength1.svg"
                  />
                  <b className={styles.label}>Quick Strength Training</b>
                </div>
                <div className={styles.cards}>
                  <div className={styles.grid}>
                    <div className={styles.col}>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/sammieglutes@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Glute Burn with Sammie
                            </b>
                            <div className={styles.textHereText}>
                              Activate and strengthen your glute muscles in this
                              challenging 20-minute routine
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty1.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/mariecore@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b
                              className={styles.sampleCard}
                            >{`Core & Obliques with Marie`}</b>
                            <div className={styles.textHereText}>
                              Get ready for a jam-packed core workout that will
                              make you feel the burn
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time1.svg"
                                />
                                <div className={styles.label}>15 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty2.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/gabriellastrength@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b
                              className={styles.sampleCard}
                            >{`Arms & Abs with Gabriella`}</b>
                            <div className={styles.textHereText}>
                              Join Gabriella to tone your abs and sculpt your
                              abs in this quick and effective workout
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time2.svg"
                                />
                                <div className={styles.label}>15 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty3.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/tiffanyshoulders@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b
                              className={styles.sampleCard}
                            >{`Shoulders & Back with Tiffany`}</b>
                            <div
                              className={styles.textHereText}
                            >{`Target your shoulders & back in this powerful, slow movement workout`}</div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>25 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty4.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.sectionheaderactivity}>
                  <img className={styles.searchIcon} alt="" src="/hiit1.svg" />
                  <b className={styles.label}>Energizing HIIT</b>
                </div>
                <div className={styles.cards}>
                  <div className={styles.grid3}>
                    <div className={styles.col}>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-19@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Quick HIIT with Camille
                            </b>
                            <div className={styles.textHereText}>
                              Blast through a quick HIIT session – this workout
                              is perfect for when you're short on time but still
                              want to get a full-body workout
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>10 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty5.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-20@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              No Equipment HIIT with Terry
                            </b>
                            <div className={styles.textHereText}>
                              This HIIT session will get your heart pumping in
                              just 25 minutes without the need for any equipment
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time1.svg"
                                />
                                <div className={styles.label}>25 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty6.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-21@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Full Body HIIT with Jenn
                            </b>
                            <div className={styles.textHereText}>
                              Join Jenn for a combination of cardio and strength
                              training exercises that will leave you feeling
                              stronger and more toned
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time2.svg"
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty7.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-18@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Quick HIIT with Janelle
                            </b>
                            <div className={styles.textHereText}>
                              Short on time? Janelle's dynamic and
                              high-intensity workout will leave you feeling
                              accomplished in just 15 minutes
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>15 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty41.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.col10}>
                      <div className={styles.workoutcard8}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-17@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Weighted HIIT with Zoe
                            </b>
                            <div className={styles.textHereText}>
                              Add some weight to your HIIT and maximize your
                              workout to build muscle and burn calories
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty5.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.sectionheaderactivity}>
                  <img className={styles.searchIcon} alt="" src="/yoga1.svg" />
                  <b className={styles.label}>Strength Building Yoga</b>
                </div>
                <div className={styles.cards}>
                  <div className={styles.grid3}>
                    <div className={styles.col}>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-11@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Power Yoga with Andrea
                            </b>
                            <div className={styles.textHereText}>
                              Challenge your strength, flexibility, and
                              discipline in this 30-minute flow focused on the
                              niyama of tapas
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>30 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty5.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-6@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Vinyasa Flow with Michaela
                            </b>
                            <div className={styles.textHereText}>
                              This hour-long flow focuses on developing core and
                              arm strength, while also improving balance and
                              flexibility
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time1.svg"
                                />
                                <div className={styles.label}>60 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty6.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-14@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Power Yoga with Sammie
                            </b>
                            <div className={styles.textHereText}>
                              Get your heart pumping in this fast-moving flow
                              that will challenge your core strength in a series
                              of asymmetrical poses
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time2.svg"
                                />
                                <div className={styles.label}>45 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty7.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-15@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Vinyasa Flow with Valentina
                            </b>
                            <div
                              className={styles.textHereText}
                            >{`This short flow is perfect for an everyday practice to loosen your muscles, build your strength, and connect to your body `}</div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty41.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.col10}>
                      <div className={styles.workoutcard8}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-1@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Power Vinyasa Yoga with Minnie
                            </b>
                            <div className={styles.textHereText}>
                              Work up a sweat in this challenging flow as we
                              focus on controlling strength and moving with
                              awareness
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>30 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty5.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.sectionheaderactivity}>
                  <img className={styles.searchIcon} alt="" src="/yoga1.svg" />
                  <b className={styles.label}>Relaxing Yoga</b>
                </div>
                <div className={styles.cards}>
                  <div className={styles.grid3}>
                    <div className={styles.col}>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-16@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Quick Restorative Yoga with Christopher
                            </b>
                            <div className={styles.textHereText}>
                              Christopher's gentle guidance will help you
                              release tension and restore balance
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>15 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty5.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-4@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Yin Yoga with Minnie
                            </b>
                            <div className={styles.textHereText}>
                              Indulge in a relaxing Yin flow and focus on long,
                              passive stretches – you’ll feel balanced and calm
                              after these 45 minutes
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time1.svg"
                                />
                                <div className={styles.label}>45 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty6.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-13@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Restorative Yoga with Aubrey
                            </b>
                            <div className={styles.textHereText}>
                              Immerse yourself in the tranquil sounds of the
                              ocean during Aubrey's Restorative Yoga session
                              – unwind and de-stress
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time2.svg"
                                />
                                <div className={styles.label}>30 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty7.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard1}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-12@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Relaxing Vinyasa Flow with Nicole
                            </b>
                            <div className={styles.textHereText}>
                              This gentle yet invigorating practice will leave
                              you feeling refreshed and centered
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty41.svg"
                                />
                                <div className={styles.label}>Moderate</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.col10}>
                      <div className={styles.workoutcard8}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/zoeyoga1@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Restorative Yoga with Zoe
                            </b>
                            <div className={styles.textHereText}>
                              Wind down with a calming yoga session that
                              includes gentle and simple full body stretches for
                              relaxation
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>50 min</div>
                              </div>
                              <div className={styles.statssmall1}>
                                <img
                                  className={styles.difficultyIcon}
                                  alt=""
                                  src="/difficulty8.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div className={styles.primarybuttonsdefault}>
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                      className={styles.difficultyIcon}
                      alt=""
                      src="/strength2.svg"
                    />
                    <div className={styles.label}>Lunch Weight Training</div>
                  </div>
                  <div className={styles.activity}>
                    <div className={styles.run}>
                      <img className={styles.runIcon} alt="" src="/run8.svg" />
                    </div>
                    <div className={styles.label}>Lunch Stair-Stepper</div>
                  </div>
                  <div className={styles.activity}>
                    <img
                      className={styles.difficultyIcon}
                      alt=""
                      src="/strength2.svg"
                    />
                    <div className={styles.label}>
                      Afternoon Weight Training
                    </div>
                  </div>
                  <div className={styles.activity}>
                    <img
                      className={styles.difficultyIcon}
                      alt=""
                      src="/strength2.svg"
                    />
                    <div className={styles.label}>Lunch Weight Training</div>
                  </div>
                  <div className={styles.activity}>
                    <div className={styles.run}>
                      <img className={styles.runIcon} alt="" src="/run8.svg" />
                    </div>
                    <div className={styles.label}>Lunch Stair-Stepper</div>
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
                  className={styles.stravaLogoIcon1}
                  alt=""
                  src="/stravalogo3.svg"
                />
                <div className={styles.label}>© 2023 Strava</div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>About</div>
                <div className={styles.categorylinks}>
                  <div className={styles.sampleCard}>About</div>
                  <div className={styles.sampleCard}>Features</div>
                  <div className={styles.sampleCard}>Mobile</div>
                  <div className={styles.sampleCard}>Subscription</div>
                  <div className={styles.sampleCard}>Student Discount</div>
                  <div className={styles.sampleCard}>Privacy Policy</div>
                  <div className={styles.sampleCard}>
                    <p className={styles.doNotShare}>Do Not Share</p>
                    <p className={styles.doNotShare}>My Personal Information</p>
                  </div>
                  <div className={styles.sampleCard}>Terms and Conditions</div>
                  <div className={styles.aboutOurMaps}>About Our Maps</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>Explore</div>
                <div className={styles.categorylinks}>
                  <div className={styles.sampleCard}>Routes</div>
                  <div className={styles.sampleCard}>Paris 2023 Marathon</div>
                  <div className={styles.sampleCard}>Boston 2023 Marathon</div>
                  <div className={styles.sampleCard}>London 2023 Marathon</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>Follow</div>
                <div className={styles.categorylinks}>
                  <div className={styles.sampleCard}>Facebook</div>
                  <div className={styles.sampleCard}>Twitter</div>
                  <div className={styles.sampleCard}>Instagram</div>
                  <div className={styles.sampleCard}>Youtube</div>
                  <div className={styles.sampleCard}>LinkedIn</div>
                  <div className={styles.sampleCard}>Blog</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>Help</div>
                <div className={styles.categorylinks3}>
                  <div className={styles.sampleCard}>Strava Support</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>More</div>
                <div className={styles.categorylinks}>
                  <div className={styles.sampleCard}>Careers</div>
                  <div className={styles.sampleCard}>Business</div>
                  <div className={styles.sampleCard}>Developers</div>
                  <div className={styles.sampleCard}>Labs</div>
                  <div className={styles.sampleCard}>
                    Strava Community Standards
                  </div>
                  <div className={styles.languagedropdown}>
                    <div className={styles.label}>{`English (US) `}</div>
                    <img
                      className={styles.dropdownIcon5}
                      alt=""
                      src="/dropdown41.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFilterDropdownPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          relativeLayerRef={filterDropdownContainerRef}
          onOutsideClick={closeFilterDropdownPopup}
        >
          <FilterDropdown onClose={closeFilterDropdownPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default LibraryHome;
