import { getRecords, deleteRecord } from "@/utils/recordsFunction";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/router";


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
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {record.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {record.description}
          </p>
          
          <button
          type="button"
          className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300
          dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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