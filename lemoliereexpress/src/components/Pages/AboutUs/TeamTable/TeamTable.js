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
      <h4 className={classes.h4}>{t('teamtable_staff')}</h4>
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
            <td>1ère</td>
          </tr>
          <tr>
            <td>Cloe Callejero</td>
            <td>Community manager</td>
            <td>
              <a href="mailto:cloe.callejero@molierezaragoza.org">
                cloe.callejero@molierezaragoza.org
              </a>
            </td>
            <td>1ère</td>
          </tr>
          <tr>
            <td>Daniel De la Cueva</td>
            <td>Responsable technique</td>
            <td>
              <a href="mailto:daniel.delacueva@molierezaragoza.org">
                daniel.delacueva@molierezaragoza.org
              </a>
            </td>
            <td>1ère</td>
          </tr>
          <tr>
            <td>Zoe Hinojo</td>
            <td>Lien CVL</td>
            <td>
              <a href="mailto:zoe.hinojo@molierezaragoza.org">
                zoe.hinojo@molierezaragoza.org
              </a>
            </td>
            <td>Tale</td>
          </tr>
        </tbody>
      </Table>

      {/* <Container>
        <Row>
          <Col xl={6} sm={12}>
            <h4>Art et culture</h4>
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
                  <th>Email</th>
                  <th>{t('table_grade')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sofía Fernández</td>
                  <td>
                    <a href="mailto:sofia.fernandez@molierezaragoza.org">
                      sofia.fernandez@molierezaragoza.org
                    </a>
                  </td>
                  <td>1ère</td>
                </tr>
                <tr>
                  <td>Example example</td>
                  <td>
                    <a href="mailto:example@molierezaragoza.org">
                      example@molierezaragoza.org
                    </a>
                  </td>
                  <td>1ère</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col xl={6} sm={12}>
            <h4>Thème du mois</h4>
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
                  <th>Email</th>
                  <th>{t('table_grade')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sofía Fernández</td>
                  <td>
                    <a href="mailto:sofia.fernandez@molierezaragoza.org">
                      sofia.fernandez@molierezaragoza.org
                    </a>
                  </td>
                  <td>1ère</td>
                </tr>
                <tr>
                  <td>Example example</td>
                  <td>
                    <a href="mailto:example@molierezaragoza.org">
                      example@molierezaragoza.org
                    </a>
                  </td>
                  <td>1ère</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default TeamTable;
