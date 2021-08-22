import Container from "react-bootstrap/Container";

import classes from "./NotFound404.module.css";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const NotFound404 = props => {
    const { t } = useTranslation();

    useEffect(() => props.setFooterFixed(true));
    return(
        <Container>
            <h2 className={classes.h2}>{t('404')}</h2>
            <h3 className={classes.h3}>{t('404_notfound')}</h3>
        </Container>
    );
};

export default NotFound404;