import Table from "react-bootstrap/Table";

import classes from "./teamTable.module.css";

const TeamTable = () => {
  return (
    <Table striped bordered hover size="sm" className={classes.table}>
      <thead>
        <tr>
          <th>Nom et Prénom</th>
          <th>Email</th>
          <th>Rubrique</th>
          <th>Classe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sabina Gómez</td>
          <td><a href="mailto:sabina.gomez@molierezaragoza.org">sabina.gomez@molierezaragoza.org</a></td>
          <td>Staff</td>
          <td>1ère</td>
        </tr>
        <tr>
          <td>Cloe Callejero</td>
          <td><a href="mailto:cloe.callejero@molierezaragoza.org">cloe.callejero@molierezaragoza.org</a></td>
          <td>Staff</td>
          <td>1ère</td>
        </tr>
        <tr>
          <td>Daniel De la Cueva</td>
          <td><a href="mailto:daniel.delacueva@molierezaragoza.org">daniel.delacueva@molierezaragoza.org</a></td>
          <td>Staff</td>
          <td>1ère</td>
        </tr>
        <tr>
          <td>Zoe Hinojo</td>
          <td><a href="mailto:zoe.hinojo@molierezaragoza.org">zoe.hinojo@molierezaragoza.org</a></td>
          <td>Tale</td>
          <td>1ère</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TeamTable;
