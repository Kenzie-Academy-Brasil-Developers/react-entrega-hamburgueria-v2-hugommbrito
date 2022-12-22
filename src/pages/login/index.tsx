import React from "react";
import  TextField  from '@mui/material/TextField'
import { useNavigate } from "react-router-dom";
import{ useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { StyledLogin } from "./style";
import { LoginMessageDiv } from "../../components/loginMessageTag";
import { StyledText } from "../../styles/fonts";
import { StyledButton } from "../../styles/Buttons";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import logo from "../../../src/assets/BurguerKenzieLogo.png"
import dotsBlock from "../../../src/assets/dots-block.svg"

interface iData{
    email: string;
    password: string;
}

export const Login = () => {
    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        email: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório'),
    })

    const { register, handleSubmit, formState: {errors} } = useForm<iData>({
        mode: "onBlur",
        resolver: yupResolver(formSchema)
    })

    const submitFunction: SubmitHandler<iData> = async (data) => {
        console.log('cheguei aqui 1');
        try {
            console.log('cheguei aqui 2');
            const response = await api.post('login', data)
            console.log('cheguei aqui 3');

            toast.success('Login realizado com sucesso!', { position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", })

            if (response.data.accessToken) {
                localStorage.setItem('@TOKEN:', response.data.accessToken)
                navigate('/home')

            } else {
                toast.error(response.data, {position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
            }

        } catch (error) {
            console.error(error);
            toast.error(`Algo deu errado com a sua requisição, Tente mais tarde`, {position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }
    } 

    return (
        <StyledLogin>
            <div>
                <div>
                    <img src={logo} alt="" />
                    <LoginMessageDiv />
                    <img src={dotsBlock} alt="" id={'dots'} />
                </div>
                <form onSubmit={handleSubmit(submitFunction)}>
                    <StyledText fw={700} fs={18}>Login</StyledText>
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

                    <StyledButton type='submit' >Logar</StyledButton>
                    <StyledText fw={400} fs={14}>Crie sua conta para saborear muitas delícias e matar sua fome!</StyledText>
                    <StyledButton grey onClick={() => navigate('/register')}>Cadastrar</StyledButton>
                </form>
            </div>
        </StyledLogin>
    );
};
