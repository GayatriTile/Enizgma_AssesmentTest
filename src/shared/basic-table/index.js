import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography, Checkbox } from "@mui/material";

const BasicTable = ({ data, isLoading, error }) => {
  if (error) {
    return (
      <Box padding={2}>
        <Typography>Something Wen't wrong</Typography>
      </Box>
    );
  } else
    return (
      <TableContainer component={Paper} style={{ marginTop: "32px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>
                <Checkbox />
              </TableCell>
              <TableCell style={{ fontWeight: 600 }}>Assigned To</TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Status
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Due Date
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Priority
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Comments
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <Box padding={2}>
                <Typography>Loading...</Typography>
              </Box>
            ) : Array.isArray(data) && data.length > 0 ? (
              data.map((row, idx) => (
                <TableRow
                  key={idx + row.userName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontWeight: 600 }}>
                    <Checkbox />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.userName}
                  </TableCell>
                  <TableCell align="right">{row?.status}</TableCell>
                  <TableCell align="right">
                    {row?.dueDate}
                  </TableCell>
                  <TableCell align="right">
                    {row?.priority ? row?.priority : "-"}
                  </TableCell>
                  <TableCell align="right">
                    {row?.comments}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <Box padding={2}>
                <Typography>Data not found</Typography>
              </Box>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default BasicTable;
