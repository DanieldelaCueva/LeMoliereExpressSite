import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import classes from "./teamTable.module.css";

import { useTranslation } from "react-i18next";

const TeamTable = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Table
        striped
        bordered
        hover
        size="sm"
        className={classes.table}
        responsive="lg"
      >
        <thead>
          <tr>
            <th>{t('table_names')}</th>
            <th>{t('table_function')}</th>
            <th>Email</th>
            <th>{t('table_grade')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Samuel Enrich</td>
            <td>Redacteur en chef</td>
            <td>
              <a href="mailto:samuel.enrich@molierezaragoza.org">
                samuel.enrich@molierezaragoza.org
              </a>
            </td>
            <td>1ère</td>
          </tr>
          <tr>
            <td>Sofía Beguería</td>
            <td>Aide Direction</td>
            <td>
              <a href="mailto:sofia.begueria@molierezaragoza.org">
                sofia.begueria@molierezaragoza.org
              </a>
            </td>
            <td>3ème</td>
          </tr>
          <tr>
            <td>Alejandro López</td>
            <td>Responsable technique</td>
            <td>
              <a href="mailto:alejandro.lopezsebastian@molierezaragoza.org">
                alejandro.lopezsebastian@molierezaragoza.org
              </a>
            </td>
            <td>1ère</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TeamTable;
