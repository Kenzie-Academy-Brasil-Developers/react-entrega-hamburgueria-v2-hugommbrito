import React, { useContext } from "react";
import  TextField  from '@mui/material/TextField'
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { iData } from "../../contexts/UserContext/types";

import { StyledLogin } from "./style";
import { LoginMessageDiv } from "../../components/loginMessageTag";
import { StyledText } from "../../styles/fonts";
import { StyledButton } from "../../styles/Buttons";


import logo from "../../../src/assets/BurguerKenzieLogo.png"
import dotsBlock from "../../../src/assets/dots-block.svg"
import { UserContext } from "../../contexts/UserContext";


export const Login = () => {
    const navigate = useNavigate()
    const { submitFunction } = useContext(UserContext)
    
    const formSchema = yup.object().shape({
        email: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório'),
    })

    const { register, handleSubmit, formState: {errors} } = useForm<iData>({
        mode: "onBlur",
        resolver: yupResolver(formSchema)
    })

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
