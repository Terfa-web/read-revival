import Orsoopage from "@/components/orsoo/orsooPage";
import styles from "./trusteeDetails.module.css";
import Mimipage from "@/components/mimi/mimiPage";
import Kakwapage from "@/components/kakwa/kakwaPage";
import Doosuurpage from "@/components/doosuur/doosuurPage";

const TrusteeDetialsPage = ({ params }) => {
  const { slug } = params;
  console.log(slug);
  return (
    <div className={styles.container}>
      {slug === "orsoo" && <Orsoopage />}
      {slug === "mimi" && <Mimipage />}
      {slug === "doosuur" && <Doosuurpage />}
      {slug === "kakwa" && <Kakwapage />}
    </div>
  );
};

export default TrusteeDetialsPage;
