import React from 'react';
import PropTypes from 'prop-types';
import { FieldContainer, Label, FieldItem } from './styled';

export const Field = ({ label, children }) => (
    <FieldContainer>
        <Label>{label}</Label>
        <FieldItem> {children} </FieldItem>
    </FieldContainer>
);

Field.propTypes = {
    label: PropTypes.string,
    children: PropTypes.children,
};

Field.defaultProps = {
    label: '',
    children: null,
};
