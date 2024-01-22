import React from "react";
import Countdown from "react-countdown";
import Image from "next/image";
import styles from "./Landing.module.scss";

import { ArrowDownIcon, InfiniteIcon } from "@/app/common";

const Divider = () => {
  return (
    <div className={styles.dividerMain}>
      <div className={styles.line} />
      <InfiniteIcon />
      <div className={styles.line} />
    </div>
  );
};

const Landing = () => {
  // const target = new Date("04/13/2024 15:30:00");

  return (
    // <Countdown
    //   date={target}
    //   renderer={({ days, hours, minutes }) => (
    //     <main className={styles.main}>
    //       <Image
    //         className={styles.imageBackground}
    //         src="/images/Roses.jpg"
    //         alt="My Image"
    //         layout="fill"
    //         objectFit="cover"
    //         style={{ opacity: "20%" }}
    //       />
    //       <div className={styles.wrapper}>
    //         <section className={styles.nameSection}>
    //           <div className={styles.names}>
    //             <div className={styles.groom}>
    //               <div className={styles.groomFirstName}>Ephraim</div>
    //               <div className={styles.groomLastName}>CONALES</div>
    //             </div>
    //             <div className={styles.bigAnd}>&</div>
    //             <div className={styles.bride}>
    //               <div className={styles.brideFirstName}>Elaine</div>
    //               <div className={styles.brideLastName}>LUCEÑADA</div>
    //             </div>
    //           </div>
    //           <div className={styles.areGettingMarried}>
    //             are getting married
    //           </div>
    //         </section>
    //         <section className={styles.miniDetails}>
    //           April 13, 2024 | Quezon City, Manila
    //         </section>
    //         <p className={styles.inviteMessage}>
    //           Please join us on{" "}
    //           <span className={styles.italicized}>April 13, 2024</span> for the
    //           marriage of Ephraim Conales and Elaine Luceñada. The ceremony will
    //           begin at 3:30PM at the{" "}
    //           <span className={styles.underlined}>
    //             {" "}
    //             Santuario de San Vicente de Paul
    //           </span>
    //           . We can't wait to see you there! Please RSVP by{" "}
    //           <span className={styles.italicized}>
    //             <b>March 03, 2024</b>
    //           </span>{" "}
    //           so that we can be prepared.
    //         </p>
    //         <Divider />
    //         {/* <section className={styles.countdownSection}>
    //           <div className={styles.weAreWaitingFor}>We are waiting for..</div>

    //           <div className={styles.countdowns}>
    //             <div className={styles.countdown}>
    //               <div className={styles.countdownNumber}>
    //                 {days.toString().length === 1 ? "0" + days : days}
    //               </div>
    //               <div className={styles.countdownUnit}>Days</div>
    //             </div>

    //             <div className={styles.countdown}>
    //               <div className={styles.countdownNumber}>
    //                 {hours.toString().length === 1 ? "0" + hours : hours}
    //               </div>
    //               <div className={styles.countdownUnit}>Hours</div>
    //             </div>

    //             <div className={styles.countdown}>
    //               <div
    //                 className={[styles.countdownNumber, styles.golden].join(
    //                   " "
    //                 )}
    //               >
    //                 {minutes.toString().length === 1 ? "0" + minutes : minutes}
    //               </div>
    //               <div className={styles.countdownUnit}>Mins</div>
    //             </div> */}

    //             {/* <div className={styles.countdown}>
    //               <div
    //                 className={[styles.countdownNumber, styles.golden].join(
    //                   " "
    //                 )}
    //               >
    //                 {seconds.toString().length === 1 ? "0" + seconds : seconds}
    //               </div>
    //               <div className={styles.countdownUnit}>Sec</div>
    //             </div> */}
    //           {/* </div>

    //           <div className={styles.hopeMessage}>Hope to see you there!</div>
    //         </section> */}
    //         <Divider />
    //         <footer className={styles.landingFooter}>
    //           Scroll down for more details..
    //         </footer>
    //         <ArrowDownIcon />
    //       </div>
    //     </main>
    //   )}
    // />
    <main className={styles.main}>
      <Image
        className={styles.imageBackground}
        src="/images/Roses.jpg"
        alt="My Image"
        layout="fill"
        objectFit="cover"
        style={{ opacity: "20%" }}
      />
      <div className={styles.wrapper}>
        <section className={styles.nameSection}>
          <div className={styles.names}>
            <div className={styles.groom}>
              <div className={styles.groomFirstName}>Ephraim</div>
              <div className={styles.groomLastName}>CONALES</div>
            </div>
            <div className={styles.bigAnd}>&</div>
            <div className={styles.bride}>
              <div className={styles.brideFirstName}>Elaine</div>
              <div className={styles.brideLastName}>LUCEÑADA</div>
            </div>
          </div>
          <div className={styles.areGettingMarried}>are getting married</div>
        </section>
        <section className={styles.miniDetails}>
          April 13, 2024 | Quezon City, Manila
        </section>
        <p className={styles.inviteMessage}>
          Please join us on{" "}
          <span className={styles.italicized}>April 13, 2024</span> for the
          marriage of Ephraim Conales and Elaine Luceñada. The ceremony will
          begin at 3:30PM at the{" "}
          <span className={styles.underlined}>
            {" "}
            Santuario de San Vicente de Paul
          </span>
          . We can't wait to see you there! Please RSVP by{" "}
          <span className={styles.italicized}>
            <b>March 03, 2024</b>
          </span>{" "}
          so that we can be prepared.
        </p>
        <Divider />
        {/* <section className={styles.countdownSection}>
        <div className={styles.weAreWaitingFor}>We are waiting for..</div>

        <div className={styles.countdowns}>
          <div className={styles.countdown}>
            <div className={styles.countdownNumber}>
              {days.toString().length === 1 ? "0" + days : days}
            </div>
            <div className={styles.countdownUnit}>Days</div>
          </div>

          <div className={styles.countdown}>
            <div className={styles.countdownNumber}>
              {hours.toString().length === 1 ? "0" + hours : hours}
            </div>
            <div className={styles.countdownUnit}>Hours</div>
          </div>

          <div className={styles.countdown}>
            <div
              className={[styles.countdownNumber, styles.golden].join(
                " "
              )}
            >
              {minutes.toString().length === 1 ? "0" + minutes : minutes}
            </div>
            <div className={styles.countdownUnit}>Mins</div>
          </div> */}

        {/* <div className={styles.countdown}>
            <div
              className={[styles.countdownNumber, styles.golden].join(
                " "
              )}
            >
              {seconds.toString().length === 1 ? "0" + seconds : seconds}
            </div>
            <div className={styles.countdownUnit}>Sec</div>
          </div> */}
        {/* </div>

        <div className={styles.hopeMessage}>Hope to see you there!</div>
      </section> */}
        <Divider />
        <footer className={styles.landingFooter}>
          Scroll down for more details..
        </footer>
        <ArrowDownIcon />
      </div>
    </main>
  );
};

export default Landing;
