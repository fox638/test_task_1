import React from 'react'
import { Field, reduxForm} from 'redux-form'
import {Input, UserActionPanel, Label} from '../../theme/global'
import {Container, Flex, Box } from '../../theme/Grid'
 
const validate = values => {
    const errors = {}
    if(!values.username) {
        errors.username = 'Required'
    }
    if(!values.password) {
        errors.password = "Required"
    }
    return errors
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values) => {
    return sleep(1000).then(()=>{
        if(['john', 'paul', 'george', 'ringo'].includes(values.username)){
            throw { username: 'That username is taken' }
        }
    })
}

const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error }  
}) => (
    <div>
        <Label>{label}</Label>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <Input {...input} type={type} placeholder={label}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const AsyncValidationForm = props => {
    const { handleSubmit, pristine, reset, submitting} = props
    return (
        <Container>
            <Flex>
                <Box width={[1, 1/2]} mx="auto" py={4} style={{marginRight: "auto", marginLeft:"auto"}}>
                    <UserActionPanel>
                        <form onSubmit={handleSubmit}>
                            <Field 
                                name="username"
                                type="text"
                                component={renderField}
                                label="Username"
                            />
                            <Field
                                name="password"
                                type="password"
                                component={renderField}
                                label="Password"
                            />
                            <div>
                                <button type="submit" disabled={submitting}>
                                    Sign up
                                </button>
                                <button type="button" disabled={pristine || submitting} onClick={reset}>
                                    Clear Values
                                </button>
                            </div>
                        
                        </form>
                    </UserActionPanel>
                </Box>

            </Flex>
            


        </Container>
        
    )
}


export default reduxForm({
    form: 'asyncValidation', // a unique identifier for this form
    validate,
    asyncValidate,
    asyncBlurFields: ['username']
  })(AsyncValidationForm)