import Navbar from "../components/Navbar";
import styles from "../style";

const World = () => (
  <div className="bg-primary w-full h-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div
      className={`${styles.paddingX} ${styles.flexCenter} flex flex-grow h-full`}
    >
      <iframe
        className="w-full h-full"
        src="https://my.spline.design/world-e90e92f55c9a4d19f57103133a839553/"
      />
    </div>
  </div>
);

export default World;
