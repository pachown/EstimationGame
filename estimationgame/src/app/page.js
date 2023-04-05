import Image from 'next/image'
import styles from './page.module.css'
import React, {useState} from 'react'

//round, score, timer, started

export default function Home() {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameOn, setGameOn] = useState(false);
  const [finalScreen, setFinalScreen] = useState(false);

  //3 total screens. 
  //Start game screen with instructions
  //GameOn screen with questions
  //FinalScreen screen with total score

  function start() {
    setRound(1);
    setTimer(10);
    startTimer(10);
    // reset score
    // set questions
    //gameOn = true
  }
  function startTimer(seconds, round) {
    //start timer. 
    //when reaches 0, if same round, activate nextRound
  }

  function nextRound() {
    // when timer reaches 0 or an option is chosen, this kicks off
    // add new score to total
    // reset questions
    // reset timer
    // if final round, kick to finalScore
  }

  function finalScore() {
    //FinalScreen = true
    //gameOn = false
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={styles.title}>Estimation Game</p>
        <div className={styles.gameBoard}>
          <div className={styles.topbar}>
            <div className={styles.timeContainer}>
              <div className={styles.topbarTitle}>Time</div>
              <div className={styles.topbarInfo}>0:08</div>
            </div>
            <div className={styles.roundContainer}>
              <div className={styles.topbarTitle}>Round</div>
              <div className={styles.topbarInfo}>5/10</div>
            </div>
            <div className={styles.scoreContainer}>
              <div className={styles.topbarTitle}>Score</div>
              <div className={styles.topbarInfo}>448/482</div>
            </div>
          </div>
          <div>
            <div className={styles.questionsContainer}>
              <div className={styles.question}>5+5</div>
              <div className={styles.question}>6*3</div>
              <div className={styles.question}>50/3</div>
              <div className={styles.question}>24*0.8</div>
              <div className={styles.question}>5*5</div>
              <div className={styles.question}>12+40</div>
              <div className={styles.question}>100/3</div>
            </div>
          </div>
        </div>
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
  )
}
