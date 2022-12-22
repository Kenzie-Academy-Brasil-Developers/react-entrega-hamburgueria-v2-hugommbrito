
import * as yup from 'yup'

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Este campo é obrigatório'),
    email: yup
        .string()
        .required('Este campo é obrigatório')
        .email('Digite um email válido'),
    password: yup
        .string()
        .required('Este campo é obrigatório'),
    passwordConfirm: yup
        .string()
        .required('Este campo é obrigatório')
        .oneOf([yup.ref('password'), null], 'As senahs devem ser iguais'),
})