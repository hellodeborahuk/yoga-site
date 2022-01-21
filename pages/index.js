import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Gallery from "../components/Gallery";
import substituteClassApplyAtRules from "tailwindcss/lib/lib/substituteClassApplyAtRules";


export default function Home() {
  return (
    <>
      <Head>
        <title>Debbie Dann Yoga</title>
        <meta
          name="description"
          content="Debbie Dann Yoga, online restorative yoga classes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p>
              <span>Gentle and restorative yoga practice</span> from the comfort
              of your own home.
            </p>
          </div>
          <div className={styles.heroPrice}>
            <h3>£25</h3>
            <p>per month</p>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.infoFlow}>
            <h2>Gentle Yoga Flow</h2>
            <p>
              Come and join me online for a gentle flow class with a lovely
              relaxation at the end. You will receive a warm welcome and leave
              feeling refreshed, relaxed and connected. Everyone is very welcome
              and if you have never tried yoga before, come and give it a go
              from the comfort of your home!
            </p>
            <img
              src="./images/meditation-yoga.svg"
              alt="quote marks"
              className={`${styles.meditation} ${styles.infoImg}`}
            />
          </div>
          <div className={styles.infoRestorative}>
            <h2>Restorative Yoga</h2>
            <p>
              Come and join me online for a restorative class full of
              relaxation. Everyone is very welcome and if you have never tried
              yoga before, come and give it a go from the comfort of your home!
            </p>
            <img
              src="./images/lotus.svg"
              alt="lotus"
              className={`${styles.lotus} ${styles.infoImg}`}
            />
          </div>
          <div className={styles.infoQuote}>
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin placerat nunc sed leo cursus laoreet.&quot;
            </p>
            <img
              src="./images/quote-right.svg"
              alt="quote marks"
              className={`${styles.quoteMarks} ${styles.infoImg}`}
            />
          </div>
        </div>

        <div className={styles.infoOverview}>
          <div className={styles.infoOverviewImg}>
            <Image
              src="/images/easy-pose-yoga-2.jpg"
              alt="yoga easy pose"
              width={2500}
              height={1667}
            />
          </div>
          <div className={styles.infoOverviewCopy}>
            <h2>Yoga to quieten the mind – classes coming soon!</h2>
            <p>
              Come and join me online for a gentle flow class with a lovely
              relaxation at the end. You will receive a warm welcome and leave
              feeling refreshed, relaxed and connected. Everyone is very welcome
              and if you have never tried yoga before, come and give it a go
              from the comfort of your home!
            </p>
            <p>
              For me, yoga is not simply a physical movement of the body; it is
              a form of moving meditation, a tool for stress relief and a
              practice to help you feel more relaxed.
            </p>
          </div>
        </div>

        <div className={styles.mailingListSection}>
          <div className={styles.mailingList}>
            <h2>Free Affirmation Cards</h2>
            <p>
              Would you like free affirmation cards to promote happiness and
              self worth? Register for my monthly newsletter and it’ll arrive
              straight in your inbox. You’ll also find out first when my classes
              start.
            </p>
            <form className={styles.form}>
              <input
                type="text"
                placeholder="Name"
                className={styles.input}
              ></input>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
              ></input>
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <Gallery />
      </main>
    </>
  );
}
