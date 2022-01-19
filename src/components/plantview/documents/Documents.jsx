import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
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
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { DATA_DOCUMENTS } from "../../../utils/dummyDataTemplate";

export default function Documents() {
  // const themeType = useSelector((store) => store.themeType.themeType);
  //const themeVariable = useTheme();
  const tableViewStyles = TableViewStylesFunction();
  const { tablePadding, primaryName, accordionCollapseIcon, iconColors,popupTableContainer,tableMinWidh } =
    tableViewStyles;
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
                        {d.doc_id}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.doc_name}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.owner}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.role}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.date_of_upload}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.version}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        {d.type}
                      </TableCell>
                      <TableCell sx={tablePadding} align="center">
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container>
                            <Grid xs={12} sm={12} md={12} lg={4}>
                              <IconButton
                                size="medium"
                                aria-label="edit"
                                sx={iconColors}
                              >
                                <EditOutlinedIcon />
                              </IconButton>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={4}>
                              <IconButton
                                size="medium"
                                aria-label="delete"
                                sx={iconColors}
                              >
                                <DeleteOutlinedIcon />
                              </IconButton>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={4}>
                              <IconButton
                                size="medium"
                                aria-label="download"
                                sx={iconColors}
                              >
                                <FileDownloadOutlinedIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </Box>
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
              Doc. ID
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Doc. Name
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Owner
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Role
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Date of Upload
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Version
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Type
            </TableCell>
            <TableCell align="center" sx={tablePadding}>
              Options
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <PlantRows name="Sales" data={DATA_DOCUMENTS} />
          <PlantRows name="HOTOS" data={DATA_DOCUMENTS} />
          <PlantRows name="Des" data={DATA_DOCUMENTS} />
          <PlantRows name="HOTOM" data={DATA_DOCUMENTS} />
          <PlantRows name="Mater" data={DATA_DOCUMENTS} />
          <PlantRows name="I & C" data={DATA_DOCUMENTS} />
          <PlantRows name="HOTOMO" data={DATA_DOCUMENTS} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
