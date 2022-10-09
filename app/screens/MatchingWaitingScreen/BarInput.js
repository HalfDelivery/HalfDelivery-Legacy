import React from "react"
import styled from "styled-components"
import colors from "./colors"
import { height, width } from "./utils"

const Container = styled.TextInput`
  width: ${width * 364}px;
  height: ${height * 29}px;
  padding: 0px ${height * 8}px ${width * 10}px;
  padding-top: 0;
  padding-bottom: ${height * 10}px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({ isValued, error }) =>
    error ? colors.errorPink : isValued ? colors.primaryBlue : colors.blueGray};
  /* font-family: "gothic-regular"; */
  include-font-padding: false;
  text-align-vertical: center;
  font-size: 17px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

export default BarInput = ({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  stateFn,
  KeyboardType,
  disabled = false,
  isValued = false,
  error = false,
  style,
}) => (
  <Container
    keyboardType={KeyboardType}
    value={value ? value.toString() : undefined}
    placeholder={placeholder}
    secureTextEntry={isPassword ? true : false}
    autoCapitalize={autoCapitalize}
    onChangeText={(text) => stateFn(text)}
    disabled={disabled}
    editable={disabled ? false : true}
    isValued={isValued}
    error={error}
    style={style}
  />
)