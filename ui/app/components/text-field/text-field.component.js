import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { default as MaterialTextField } from '@material-ui/core/TextField'

const inputLabelBase = {
  transform: 'none',
  transition: 'none',
  position: 'initial',
  color: '#46576e',
}

const styles = {
  materialLabel: {
    '&$materialFocused': {
      color: '#aeaeae',
    },
    '&$materialError': {
      color: '#aeaeae',
    },
    fontWeight: '400',
    color: '#aeaeae',
  },
  materialFocused: {},
  materialUnderline: {
    '&:after': {
      borderBottom: '2px solid #f7861c',
    },
  },
  materialError: {},
  // Non-material styles
  formLabel: {
    '&$formLabelFocused': {
      color: '#5b5b5b',
    },
    '&$materialError': {
      color: '#5b5b5b',
    },
  },
  formLabelFocused: {},
  inputFocused: {},
  inputRoot: {
    'label + &': {
      marginTop: '8px',
    },
    border: '1px solid #eaeaea',
    height: 'auto',
    borderRadius: '3px',
    padding: '3px 10px',
    display: 'flex',
    alignItems: 'center',
    '&$inputFocused': {
      border: '1px solid #3167ff',
    },
  },
  largeInputLabel: {
    ...inputLabelBase,
    fontSize: '1rem',
  },
  inputLabel: {
    ...inputLabelBase,
    fontSize: '13px',
  },
}

const TextField = props => {
  const { error, classes, material, startAdornment, largeLabel, ...textFieldProps } = props

  return (
    <MaterialTextField
      error={Boolean(error)}
      helperText={error}
      InputLabelProps={{
        shrink: material ? undefined : true,
        className: material ? '' : (largeLabel ? classes.largeInputLabel : classes.inputLabel),
        FormLabelClasses: {
          root: material ? classes.materialLabel : classes.formLabel,
          focused: material ? classes.materialFocused : classes.formLabelFocused,
          error: classes.materialError,
        },
      }}
      InputProps={{
        startAdornment: startAdornment || undefined,
        disableUnderline: !material,
        classes: {
          root: material ? '' : classes.inputRoot,
          input: material ? '' : classes.input,
          underline: material ? classes.materialUnderline : '',
          focused: material ? '' : classes.inputFocused,
        },
      }}
      {...textFieldProps}
    />
  )
}

TextField.defaultProps = {
  error: null,
}

TextField.propTypes = {
  error: PropTypes.string,
  classes: PropTypes.object,
  material: PropTypes.bool,
  startAdornment: PropTypes.element,
  largeLabel: PropTypes.bool,
}

export default withStyles(styles)(TextField)
