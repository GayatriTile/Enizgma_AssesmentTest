import React, { useEffect, useState } from "react";
import AllTaksList from "./allTaskList";

//api's
import { getTaskData } from "../../api/task";

//hooks
import { useApi } from "../../hooks/use-api";

const Tasks = () => {
  const [filtredMachines, setFiltredMachines] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { isLoading, data, error } = useApi(getTaskData, refresh);

  useEffect(() => {
    setFiltredMachines(data);
    if(refresh) setRefresh(false);
  }, [data, refresh]);

  const handleSearch = (e) => {
    const filteredData = data.filter((item) => {
        const status = item.status.toLowerCase();
      if (status.includes(e.target.value.toLowerCase())) return item;
    });
    if (filteredData && filteredData.length > 0) {
      setFiltredMachines(filteredData);
    } else setFiltredMachines(data);
  };


  const handleRefresh = () => {
    setRefresh(true);
  }

  return (
    <div>
      <AllTaksList data={filtredMachines} isLoading={isLoading} error={error} handleSearch={handleSearch} handleRefresh={handleRefresh}/>
    </div>
  );
};

export default Tasks;
