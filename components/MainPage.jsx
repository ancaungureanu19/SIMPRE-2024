import { getRecords, deleteRecord } from "@/utils/recordsFunction";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/router";
import styles from "@/styles/styles.module.css";


const MainPage = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecords = async () => {
    try {
      const response = await getRecords();

      setRecords(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);

      if (response.deletedCount === 1) {
        const newRecords = records.filter((record) => record._id !== id);
        setRecords(newRecords);
      }
    } catch (error) {
      console.log(error)
    }
  };
     
      useEffect(() => {
        fetchRecords();
      }, []);
    
      if (isLoading) return <Spinner />;

    return (
      <div className="p-4 flex flex-wrap gap-4">
      {records.map((record) => (
        <div
          key={record._id}
          className={styles.card} // Aplicarea clasei CSS module
        >
          <h5 className={styles['card-title']}>{record.Name}</h5>
          <p className={styles['card-info']}>Latin: {record.Latin}</p>
          <p className={styles['card-info']}>Price: {record.Price}</p>
          <button
            type="button"
            className={styles['card-button']} // Aplicarea clasei CSS module
            onClick={() => handleDeleteRecord(record._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainPage;