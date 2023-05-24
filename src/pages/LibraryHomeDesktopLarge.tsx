import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import HIITContainer from "../components/HIITContainer";
import WorkoutLink from "../components/WorkoutLink";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutCardContainer from "../components/WorkoutCardContainer";
import RecentActivitiesContainer from "../components/RecentActivitiesContainer";
import styles from "./LibraryHomeDesktopLarge.module.css";
const LibraryHomeDesktopLarge: FunctionComponent = () => {
  const navigate = useNavigate();

  const onWorkoutCard1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkoutCard2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkoutCard3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkoutCardClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.libraryHomeDesktopLarge}>
      <MainHeader />
      <div className={styles.pagewrapper}>
        <div className={styles.pagecontainer}>
          <HIITContainer />
          <div className={styles.libraryresults}>
            <div className={styles.recommendedsection}>
              <div className={styles.sectionheaderrecommended}>
                <img
                  className={styles.userprofileimageIcon}
                  alt=""
                  src="/-userprofileimage1@2x.png"
                />
                <div className={styles.text}>
                  <b className={styles.recommendedForYou}>
                    Recommended For You
                  </b>
                  <b className={styles.basedOnYour}>Based on your activities</b>
                </div>
              </div>
              <div className={styles.cards}>
                <div className={styles.grid}>
                  <div className={styles.col}>
                    <a
                      className={styles.workoutcard}
                      onClick={onWorkoutCardClick}
                    >
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
                                  src="/run21.svg"
                                />
                              </div>
                              <div className={styles.recommendedForYou}>
                                2.5 mi
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty11.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <WorkoutLink
                      classDescription="/zoeyoga@2x.png"
                      className="Restorative Yoga with Zoe"
                      classInstructorName="Wind down with a calming yoga session that includes gentle and simple full body stretches for relaxation"
                      classId="/time1.svg"
                      classDuration="50 min"
                      classImageId="/difficulty21.svg"
                      classType="Easy"
                      onWorkoutCard1Click={onWorkoutCard1Click}
                    />
                    <WorkoutLink
                      classDescription="/gabriellastrength@2x.png"
                      className={`Arms & Abs with Gabriella`}
                      classInstructorName="Join Gabriella to tone your abs and sculpt your abs in this quick and effective workout"
                      classId="/time21.svg"
                      classDuration="15 min"
                      classImageId="/difficulty31.svg"
                      classType="Easy"
                      onWorkoutCard1Click={onWorkoutCard2Click}
                    />
                    <WorkoutLink
                      classDescription="/talrun@2x.png"
                      className="Fartlek Run with Tal"
                      classInstructorName="Build your endurance and speed in this 20-minute Fartlek run with Tal and alternate your pace across intervals"
                      classId="/time3.svg"
                      classDuration="20 min"
                      classImageId="/difficulty41.svg"
                      classType="Moderate"
                      onWorkoutCard1Click={onWorkoutCard3Click}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.recommendedsection}>
              <div className={styles.sectionheaderactivity}>
                <div className={styles.run1}>
                  <img className={styles.runIcon} alt="" src="/run31.svg" />
                </div>
                <b className={styles.recommendedForYou}>Speed Runs</b>
              </div>
              <div className={styles.cards1}>
                <div className={styles.grid1}>
                  <div className={styles.col}>
                    <WorkoutCard
                      treyCity="/treycity@2x.png"
                      sampleCard="Speed Run with Trey"
                      textHereTextHereTextHereT="These high intensity intervals are designed to push you to your limits and test your speed and endurance"
                      run="/run21.svg"
                      mi="3.0 mi"
                      difficulty="/difficulty11.svg"
                      easy="Hard"
                    />
                    <WorkoutCardContainer
                      gabriellaHill="/gabriellahill@2x.png"
                      sampleCard="Fartlek Run with Gabriella"
                      textHereTextHereTextHereT="Challenge your stamina in this fartlek run as Gabriella guides you through drills from easy jogs to all-out sprints"
                      time="/time1.svg"
                      min="35 min"
                      difficulty="/difficulty21.svg"
                      easy="Hard"
                    />
                    <WorkoutCardContainer
                      gabriellaHill="/christyhill@2x.png"
                      sampleCard="Hill Run with Christy"
                      textHereTextHereTextHereT="Find a hill or some stairs and join Christy in an uphill adventure of strength and endurance"
                      time="/time21.svg"
                      min="25 min"
                      difficulty="/difficulty31.svg"
                      easy="Moderate"
                      propFlex="1"
                      propWidth="unset"
                    />
                    <WorkoutCardContainer
                      gabriellaHill="/image-2@2x.png"
                      sampleCard="Fartlek Run with Claire"
                      textHereTextHereTextHereT="This moderate-paced fartlek run incorporates intervals of varied intensity to build your stamina and speed"
                      time="/time3.svg"
                      min="25 min"
                      difficulty="/difficulty41.svg"
                      easy="Moderate"
                      propFlex="1"
                      propWidth="unset"
                    />
                  </div>
                  <div className={styles.col}>
                    <WorkoutCardContainer
                      gabriellaHill="/image-3@2x.png"
                      sampleCard="Hill Repeats with Gina"
                      textHereTextHereTextHereT="Experience the challenge of tackling uphill climbs and reap the rewards of increased strength and speed"
                      time="/time4.svg"
                      min="30 min"
                      difficulty="/difficulty11.svg"
                      easy="Hard"
                      propFlex="unset"
                      propWidth="292.75px"
                    />
                    <WorkoutCard
                      treyCity="/zainspeed1@2x.png"
                      sampleCard="Speed Run with Zain"
                      textHereTextHereTextHereT="This beginner-friendly speed run will improve your strength through short and long intervals"
                      run="/run41.svg"
                      mi="2.5 mi"
                      difficulty="/difficulty21.svg"
                      easy="Easy"
                      propFlex="unset"
                      propWidth="292.75px"
                    />
                    <WorkoutCardContainer
                      gabriellaHill="/talrun1@2x.png"
                      sampleCard="Fartlek Run with Tal"
                      textHereTextHereTextHereT="Build your endurance and speed in this 20-minute Fartlek run with Tal and alternate your pace across intervals"
                      time="/time21.svg"
                      min="20 min"
                      difficulty="/difficulty31.svg"
                      easy="Moderate"
                      propFlex="unset"
                      propWidth="292.75px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.recommendedsection}>
              <div className={styles.sectionheaderactivity}>
                <div className={styles.run1}>
                  <img className={styles.runIcon} alt="" src="/run31.svg" />
                </div>
                <b className={styles.recommendedForYou}>Refreshing Runs</b>
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
                            Focus on an easy pace and low-intensity to give your
                            body a break by joining Chelsea for this relaxing
                            and restorative workout
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
                              <div className={styles.recommendedForYou}>
                                35 min
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty51.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                            Join Gabriella for a low-impact run – run at an easy
                            pace based on how your body feels, and get ready for
                            the week ahead
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
                              <div className={styles.recommendedForYou}>
                                20 min
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty61.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                            Perfect for cooldowns or low-intensity days – Andre
                            has designed this quick run to help you recover and
                            get your body moving
                          </div>
                        </div>
                        <div className={styles.statswithcta}>
                          <div className={styles.stats}>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/time21.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                20 min
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty71.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                            comfortable pace to aid recovery and prevent injury
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
                              <div className={styles.recommendedForYou}>
                                40 min
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty81.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                  <img className={styles.runIcon} alt="" src="/run51.svg" />
                </div>
                <b className={styles.recommendedForYou}>Long Runs</b>
              </div>
              <div className={styles.cards3}>
                <div className={styles.grid3}>
                  <div className={styles.col}>
                    <WorkoutCard
                      treyCity="/tolurun@2x.png"
                      sampleCard="5K Long Run with Tolu"
                      textHereTextHereTextHereT="Lace up your shoes and hit the pavement with Tolu for a 5K run with Tolu's expert coaching"
                      run="/run61.svg"
                      mi="3.1 mi"
                      difficulty="/difficulty51.svg"
                      easy="Moderate"
                      propFlex="1"
                      propWidth="unset"
                    />
                    <WorkoutCard
                      treyCity="/image-5@2x.png"
                      sampleCard="10K Long Run with Tony"
                      textHereTextHereTextHereT="Take your endurance to the next level over the next 6.2 miles – this run will help you build stamina and mental toughness"
                      run="/run71.svg"
                      mi="6.2 mi"
                      difficulty="/difficulty61.svg"
                      easy="Moderate"
                      propFlex="1"
                      propWidth="unset"
                    />
                    <WorkoutCard
                      treyCity="/pexelsrunffwpu1555354-1@2x.png"
                      sampleCard="Half Marathon Progressive Run with Samir"
                      textHereTextHereTextHereT="Prep for your half marathon with this progressive run and Samir’s coaching"
                      run="/run81.svg"
                      mi="10.5 mi"
                      difficulty="/difficulty71.svg"
                      easy="Hard"
                      propFlex="1"
                      propWidth="unset"
                    />
                    <WorkoutCard
                      treyCity="/pexelsrunffwpu2403045-1@2x.png"
                      sampleCard="Half Marathon Progressive Run with Vivian"
                      textHereTextHereTextHereT="You’ll be unstoppable after 12 miles of this progressive run with Vivian"
                      run="/run9.svg"
                      mi="12.0 mi"
                      difficulty="/difficulty81.svg"
                      easy="Hard"
                      propFlex="1"
                      propWidth="unset"
                    />
                  </div>
                  <div className={styles.col5}>
                    <div className={styles.workoutcard5}>
                      <div className={styles.workoutmediumrun}>
                        <img
                          className={styles.zainspeedIcon}
                          alt=""
                          src="/pexelsrunffwpu2567025-1@2x.png"
                        />
                      </div>
                      <div className={styles.cardinfo5}>
                        <div className={styles.details5}>
                          <b className={styles.sampleCard}>Sample Card</b>
                          <div className={styles.textHereText}>
                            Join Fredi for an epic progressive run over 20 miles
                            – this run will push you to new heights of physical
                            and mental endurance
                          </div>
                        </div>
                        <div className={styles.stats5}>
                          <div className={styles.statssmall}>
                            <div className={styles.run}>
                              <img
                                className={styles.runIcon}
                                alt=""
                                src="/run61.svg"
                              />
                            </div>
                            <div className={styles.recommendedForYou}>
                              20.0 mi
                            </div>
                          </div>
                          <div className={styles.statssmall}>
                            <img
                              className={styles.difficultyIcon}
                              alt=""
                              src="/difficulty51.svg"
                            />
                            <div className={styles.recommendedForYou}>Hard</div>
                          </div>
                        </div>
                        <div className={styles.primarybuttonsdefault}>
                          <div className={styles.recommendedForYou}>
                            Begin Workout
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
                <img className={styles.rideIcon} alt="" src="/ride11.svg" />
                <b className={styles.recommendedForYou}>Speed Rides</b>
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
                            Join Nate for a dynamic ride! This 45-minute workout
                            features varying intensities and paces to keep you
                            engaged and energized
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
                              <div className={styles.recommendedForYou}>
                                45 min
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty51.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                                src="/ride21.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                15.0 mi
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty61.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                                src="/time21.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                60 min
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty71.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Hard
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                            Tackle steep inclines and build stamina with Matt –
                            this guided workout is perfect for those working on
                            endurance and strength
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
                              <div className={styles.recommendedForYou}>
                                30 min
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty81.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Hard
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                <img className={styles.rideIcon} alt="" src="/ride31.svg" />
                <b className={styles.recommendedForYou}>Long Rides</b>
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
                              <div className={styles.recommendedForYou}>
                                60 min
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty9.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                                src="/ride21.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                40.0 mi
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty10.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                                src="/ride4.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                25.0 mi
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty111.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Hard
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                              <div className={styles.recommendedForYou}>
                                75 min
                              </div>
                            </div>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty12.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                <img className={styles.rideIcon} alt="" src="/strength11.svg" />
                <b className={styles.recommendedForYou}>
                  Quick Strength Training
                </b>
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
                              <div className={styles.recommendedForYou}>
                                20 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty13.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                              <div className={styles.recommendedForYou}>
                                15 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty14.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                            Join Gabriella to tone your abs and sculpt your abs
                            in this quick and effective workout
                          </div>
                        </div>
                        <div className={styles.statswithcta}>
                          <div className={styles.stats}>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/time21.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                15 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty15.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Hard
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                              <div className={styles.recommendedForYou}>
                                25 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty16.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                <img className={styles.rideIcon} alt="" src="/hiit1.svg" />
                <b className={styles.recommendedForYou}>Energizing HIIT</b>
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
                            Blast through a quick HIIT session – this workout is
                            perfect for when you're short on time but still want
                            to get a full-body workout
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
                              <div className={styles.recommendedForYou}>
                                10 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty51.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                              <div className={styles.recommendedForYou}>
                                25 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty61.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                                src="/time21.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                20 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty71.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Hard
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                            Short on time? Janelle's dynamic and high-intensity
                            workout will leave you feeling accomplished in just
                            15 minutes
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
                              <div className={styles.recommendedForYou}>
                                15 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty81.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col5}>
                    <div className={styles.workoutcard5}>
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
                              <div className={styles.recommendedForYou}>
                                20 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty51.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                <img className={styles.rideIcon} alt="" src="/yoga1.svg" />
                <b className={styles.recommendedForYou}>
                  Strength Building Yoga
                </b>
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
                            Challenge your strength, flexibility, and discipline
                            in this 30-minute flow focused on the niyama of
                            tapas
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
                              <div className={styles.recommendedForYou}>
                                30 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty51.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                              <div className={styles.recommendedForYou}>
                                60 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty61.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                            Get your heart pumping in this fast-moving flow that
                            will challenge your core strength in a series of
                            asymmetrical poses
                          </div>
                        </div>
                        <div className={styles.statswithcta}>
                          <div className={styles.stats}>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/time21.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                45 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty71.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Hard
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                              <div className={styles.recommendedForYou}>
                                20 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty81.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col5}>
                    <div className={styles.workoutcard5}>
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
                            Work up a sweat in this challenging flow as we focus
                            on controlling strength and moving with awareness
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
                              <div className={styles.recommendedForYou}>
                                30 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty51.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                <img className={styles.rideIcon} alt="" src="/yoga1.svg" />
                <b className={styles.recommendedForYou}>Relaxing Yoga</b>
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
                            Christopher's gentle guidance will help you release
                            tension and restore balance
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
                              <div className={styles.recommendedForYou}>
                                15 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty51.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                              <div className={styles.recommendedForYou}>
                                45 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty61.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                            Immerse yourself in the tranquil sounds of the ocean
                            during Aubrey's Restorative Yoga session – unwind
                            and de-stress
                          </div>
                        </div>
                        <div className={styles.statswithcta}>
                          <div className={styles.stats}>
                            <div className={styles.statssmall}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/time21.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                30 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty71.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Hard
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
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
                            This gentle yet invigorating practice will leave you
                            feeling refreshed and centered
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
                              <div className={styles.recommendedForYou}>
                                20 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty81.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Moderate
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.col5}>
                    <div className={styles.workoutcard5}>
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
                            Wind down with a calming yoga session that includes
                            gentle and simple full body stretches for relaxation
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
                              <div className={styles.recommendedForYou}>
                                50 min
                              </div>
                            </div>
                            <div className={styles.statssmall1}>
                              <img
                                className={styles.difficultyIcon}
                                alt=""
                                src="/difficulty11.svg"
                              />
                              <div className={styles.recommendedForYou}>
                                Easy
                              </div>
                            </div>
                          </div>
                          <div className={styles.primarybuttonsdefault}>
                            <div className={styles.recommendedForYou}>
                              Begin Workout
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
      </div>
      <RecentActivitiesContainer
        productIds="/run11.svg"
        productIdsText="/run11.svg"
        productDimensions="/stravalogo31.svg"
      />
    </div>
  );
};

export default LibraryHomeDesktopLarge;
