import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { changeTheme as changeThemeAction } from './actions';
import { translate, changeLocale as changeLocaleAction } from 'admin-on-rest';

const styles = {
    card: { margin: '2em' },
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
};

const Configuration = ({ theme, locale, changeTheme, changeLocale, translate }) => (
    <Card style={styles.card}>
        <CardTitle title={translate('pos.configuration')} />
        <CardText>
            <div style={styles.label}>{translate('pos.theme.name')}</div>
            <RaisedButton style={styles.button} label={translate('pos.theme.light')} primary onClick={() => changeTheme('light')} />
            <RaisedButton style={styles.button} label={translate('pos.theme.dark')} secondary onClick={() => changeTheme('dark')} />
        </CardText>
        <CardText>
            <div style={styles.label}>{translate('pos.language')}</div>
            <RaisedButton style={styles.button} label="en" primary={locale === 'en'} onClick={() => changeLocale('en')} />
            <RaisedButton style={styles.button} label="fr" primary={locale === 'fr'} onClick={() => changeLocale('fr')} />
        </CardText>
    </Card>
);

const mapStateToProps = state => ({
    theme: state.theme,
    locale: state.locale,
});

export default connect(mapStateToProps, {
    changeLocale: changeLocaleAction,
    changeTheme: changeThemeAction,
})(translate(Configuration));
