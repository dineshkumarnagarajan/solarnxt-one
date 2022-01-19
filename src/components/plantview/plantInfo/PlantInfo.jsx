import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//import { useDispatch, useSelector } from "react-redux";
import { TableViewStylesFunction } from "../../../theme/Theme";
import ListItemsView from "./ListItemsView";

export default function PlantInfo() {
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
                <TableRow>
                  <TableCell sx={tablePadding} colSpan={data.length}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        {data.map((d) => {
                          return (
                            <Grid item xs={2}>
                              <ListItemsView
                                secondary={d.secondary}
                                primary={d.primary}
                              />
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Box>
                  </TableCell>
                </TableRow>
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
        <TableBody>
          <PlantRows
            name="Customer Contact Details"
            data={[
              {
                primary: "Customer name",
                secondary: "Test Company",
              },
              {
                primary: "Contact Number",
                secondary: "+911234567890",
              },
              {
                primary: "Email ID",
                secondary: "person@testcompany.com",
              },
            ]}
          />
          <PlantRows
            name="Project Info"
            data={[
              {
                primary: "Projected Completion Date",
                secondary: "24/01/22",
              },
              {
                primary: "Projected TAT",
                secondary: "94 Days",
              },
              {
                primary: "Current Stage",
                secondary: "Development",
              },
              {
                primary: "Status",
                secondary: "Active",
              },
              {
                primary: "Project Owner",
                secondary: "Test Company",
              },
              {
                primary: "Project Start Date",
                secondary: "14/12/21",
              },
              {
                primary: "Current Task Owner",
                secondary: "Test Company",
              },
            ]}
          />
          <PlantRows
            name="Building info"
            data={[
              {
                primary: "No. of floors",
                secondary: "2",
              },
              {
                primary: "Type of roof",
                secondary: "Flat roof",
              },
            ]}
          />
          <PlantRows
            name="Electrical Info"
            data={[
              {
                primary: "No. of phase",
                secondary: "3",
              },
              {
                primary: "Voltage level",
                secondary: "4",
              },
            ]}
          />
          <PlantRows
            name="Location info"
            data={[
              {
                primary: "Zone",
                secondary: "South",
              },
              {
                primary: "Cluster",
                secondary: "Chennai",
              },
            ]}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
