import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { useForm, SubmitHandler } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './formShema'

import { StyledRegister } from './style'
import { LoginMessageDiv } from '../../components/loginMessageTag'
import { StyledText } from '../../styles/fonts'
import { StyledButton } from '../../styles/Buttons'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

import logo from "../../../src/assets/BurguerKenzieLogo.png"
import dotsBlock from "../../../src/assets/dots-block.svg"

interface iData{
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<iData>({
        mode: 'onChange',
        resolver: yupResolver(formSchema),
    })

    const navigate = useNavigate()

    const submitFunction: SubmitHandler<iData> = async (data) => {
        const formatedData = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        try {
            await api.post('users', formatedData)

            toast.success('Usuário cadastrado com sucesso!', { position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", })

            navigate('/login')

        } catch (error) {
            console.error(error)
            toast.error(`Algo deu errado com a sua requisição, Tente mais tarde`, {position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }

    }

    return(
        <StyledRegister>
            <div>
                <div>
                    <img src={logo} alt="" />
                    <LoginMessageDiv />
                    <img src={dotsBlock} alt="" id={'dots'} />
                </div>
                <form onSubmit={handleSubmit(submitFunction)}>
                    <div>
                        <StyledText fw={700} fs={18}>Cadastro</StyledText>
                        <Link to={'/login'} >Retornar para o login</Link>
                    </div>
                    <TextField 
                        variant="outlined"
                        label="Nome"
                        required
                        margin="normal"
                        error={errors.name ? true : false}
                        helperText={errors.name?.message}
                        {...register('name')}/>
                    <TextField
                        variant="outlined"
                        label="Email"
                        required
                        margin="normal" 
                        error={errors.email ? true : false}
                        helperText={errors.email?.message}
                        {...register('email')}/>
                    <TextField 
                        variant="outlined" 
                        type={"password"} 
                        label="Senha" 
                        required 
                        margin="normal" 
                        error={errors.password ? true : false}
                        helperText={errors.password?.message}
                        {...register('password')} />
                    <TextField 
                        variant="outlined" 
                        type={"password"} 
                        label="Senha" 
                        required margin="normal" 
                        error={errors.passwordConfirm ? true : false}
                        helperText={errors.passwordConfirm?.message}
                        {...register('passwordConfirm')} />

                    <StyledButton grey type='submit'>Cadastrar</StyledButton>
                </form>
            </div>
        </StyledRegister>
    )
}