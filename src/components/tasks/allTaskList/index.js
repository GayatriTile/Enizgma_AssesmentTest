import BasicTable from "../../../shared/basic-table";
import Button from "../../../shared/button";
import InputSearch from "../../../shared/search";
import { Typography } from "@mui/material";

const AllTaksList = ({ data, isLoading, error, handleSearch, handleRefresh }) => {
  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "16px",
        border: "0.2px solid",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div></div>
          <div>
            <Typography variant="h4">Tasks</Typography>
            <Typography variant="h6">All Tasks</Typography>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              label={"New Task"}
              onClick={() => console.log("New Task")}
              variant={"contained"}
              color={"primary"}
            />
            <Button
              label={"Refresh"}
              onClick={handleRefresh}
              variant={"contained"}
              color={"primary"}
            />
          </div>
          <InputSearch onChange={handleSearch}/>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {data && data.length > 0 && <span>{`${data.length} records`}</span>}
      </div>
      <BasicTable data={data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default AllTaksList;
