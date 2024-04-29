import { getRecords } from "@/utils/recordsFunction";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const MainPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRecords = async () => {
        try {
          const response = await getRecords();
    
          setData(response);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };
    
      const handleDeleteRecord = async (id) => {
        try {
          const response = await deleteRecord(id);
    
          if (response?.acknowledged) {
            const newData = data.filter((el) => el._id !== id);
    
            setData(newData);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleEditRecord = (id) => {
        router.push(`/edit?id=${id}`);
      }
    
      useEffect(() => {
        fetchRecords();
      }, []);
    
      if (isLoading) return <Spinner />;

    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokellinecap="round" strokellinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>


    )
}
export default MainPage;