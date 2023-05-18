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
            <td>Sabina Gómez</td>
            <td>{t('quote_rec')}</td>
            <td>
              <a href="mailto:sabina.gomez@molierezaragoza.org">
                sabina.gomez@molierezaragoza.org
              </a>
            </td>
            <td>Terminale</td>
          </tr>
          <tr>
            <td>Ariadna Valero</td>
            <td>Aide Direction</td>
            <td>
              <a href="mailto:ariadna.valero@molierezaragoza.org">
                ariadna.valero@molierezaragoza.org
              </a>
            </td>
            <td>Terminale</td>
          </tr>
          <tr>
            <td>Samuel Enrich</td>
            <td>Aide Direction</td>
            <td>
              <a href="mailto:samuel.enrich@molierezaragoza.org">
                samuel.enrich@molierezaragoza.org
              </a>
            </td>
            <td>2nde</td>
          </tr>
          <tr>
            <td>Daniel De la Cueva</td>
            <td>Responsable technique</td>
            <td>
              <a href="mailto:daniel.delacueva@molierezaragoza.org">
                daniel.delacueva@molierezaragoza.org
              </a>
            </td>
            <td>Terminale</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TeamTable;
