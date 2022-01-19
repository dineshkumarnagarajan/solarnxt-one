import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//import { useDispatch, useSelector } from "react-redux";
import { TableViewStylesFunction } from "../../../theme/Theme";
import { DATA_TASKS } from "../../../utils/dummyDataTemplate";

export default function Tasks() {
  // const themeType = useSelector((store) => store.themeType.themeType);
  //const themeVariable = useTheme();
  const tableViewStyles = TableViewStylesFunction();
  const { tablePadding, primaryName, accordionCollapseIcon,popupTableContainer,tableMinWidh } = tableViewStyles;
  //const dispatch = useDispatch();

  const PlantRows = (props) => {
    const { name, data } = props;
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <TableRow sx={{ margin: 1 }}>
          <TableCell sx={tablePadding} align="left">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
              sx={[accordionCollapseIcon]}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            sx={tablePadding}
            align="left"
            colSpan={11}
          >
            <span style={{ ...primaryName, fontWeight: "normal" }}>{name}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={[tablePadding, { paddingBottom: 0, paddingTop: 0 }]}
            colSpan={12}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table size="small" aria-label="purchases">
                {data.map((d) => {
                  return (
                    <TableRow>
                      <TableCell sx={tablePadding} align="center">
                        {d.task_name}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.status}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.owner}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.function}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.role}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.start_date}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.expected_tat}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.due_date}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.completion_date}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.actual_tat}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };

  return (
    <TableContainer component={Paper} sx={popupTableContainer}>
      <Table sx={tableMinWidh} aria-label="plant info table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={tablePadding}>
              Task Name
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Status
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Owner
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Function
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Role
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Start Date
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Expected TAT
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Due Date
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Completion Date
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Actual TAT
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <PlantRows name="Sales" data={DATA_TASKS} />
          <PlantRows name="HOTOS" data={DATA_TASKS} />
          <PlantRows name="Des" data={DATA_TASKS} />
          <PlantRows name="HOTOM" data={DATA_TASKS} />
          <PlantRows name="Mater" data={DATA_TASKS} />
          <PlantRows name="I & C" data={DATA_TASKS} />
          <PlantRows name="HOTOMO" data={DATA_TASKS} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
