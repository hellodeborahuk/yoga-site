import styles from "../styles/Classes.module.css";


const Classes = () => {
    return ( <section className={styles.classSection}>
        <h2>Online classes</h2>
        <div className={styles.classContainer}>
            <div>
                <h4>Hatha Flow via Zoom 45 mins</h4>
                <p>Move, breathe and flow as we reconnect body, mind and breath. The session will combine a gentle warm up, a flowing sequence of standing postures with a few challenges along the way and modifications always offered. We’ll finish with a beautiful relaxation.</p>
            </div>
            <div className={styles.classInfo}>
                <p>Wednesday</p><p>8pm</p><p>£5</p>
            </div>
        </div>
        <div className={styles.classContainer}>
            <div>
                <h4>Rest and Restore via Zoom 1 hour</h4>
                <p>A slower paced style of movement and relaxation. Expect seated and lying poses held for longer periods of time to encourage you to melt and release. Yin Yoga is a deeply nourishing, revitalising and restful practice – an antidote to life in the fast lane.</p></div>
            <div className={styles.classInfo}>
                <p>Thursday</p><p>8pm</p><p>£6</p>
            </div>
        </div>
        <div className={styles.classContainer}>
            <div>
                <h4>Gentle Flow and Restore via Zoom 45 mins</h4>
                <p>A gentle paced class to stretch out, move mindfully and slowly, destress and breathe deep. We will take a few restorative longer hold poses at the end of the session to help you really release and let go. If you have a couple of cushions/pillows they can help support you.</p></div>
            <div className={styles.classInfo}>
                <p>Friday</p><p>8pm</p><p>£5</p>
            </div>
        </div>
        <div className={styles.classInformation}>
            <h2>Class Information</h2>
            <ul>
                <li>Bring water and wear loose, stretchy clothing.</li>
                <li>Leave at least two hours between eating a meal and practising yoga.</li>
                <li>If it is your first ever yoga class, or you are anxious about joining us for the first time, please don’t be! A warm welcome awaits you.</li>
            </ul>
        </div>
    </section> );
}
 
export default Classes;