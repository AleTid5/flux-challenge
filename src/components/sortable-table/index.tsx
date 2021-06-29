import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useSearchContext } from "../../contexts/search.context";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 212 },
  { field: "owner", headerName: "Owner", width: 212 },
  { field: "stars", headerName: "Stars", type: "number", width: 212 },
  { field: "createdAt", headerName: "Created at", width: 212 },
];

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "50vh",
      backdropFilter: "blur(4px)",
    },
    dataGrid: {
      padding: 32,
      border: 0,
      filter: "invert(1)",
    },
    dataGridCell: {
      borderBottom: "0!important",
    },
  })
);

export default function SortableTable() {
  const { results, isLoading, error } = useSearchContext();
  const classes = useStyles();

  const rows = results.map((result, key) => ({ id: key, ...result }));

  return (
    <div className={classes.container}>
      <DataGrid
        className={classes.dataGrid}
        classes={{
          cell: classes.dataGridCell,
        }}
        rows={rows}
        columns={columns}
        pageSize={6}
        disableColumnSelector
        disableSelectionOnClick
        loading={isLoading}
        error={error}
      />
    </div>
  );
}
