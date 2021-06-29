import { Card, Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SortableTable from "../sortable-table";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh - 64px)",
    },
    card: {
      minHeight: "50vh",
      width: "100%",
      backgroundColor: "#2a2c2ef2",
      boxShadow: "10px 10px 25px black",
    },
  })
);

export default function Content() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Card className={classes.card}>
        <SortableTable />
      </Card>
    </Container>
  );
}
