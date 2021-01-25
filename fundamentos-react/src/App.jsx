import React from 'react';

import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layouts/Card';

import './App.css';

export default props => (
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card titulo='#12 - Contador' color='#424242'>
                <Contador numeroInicial={20}></Contador>
            </Card>

            <Card titulo='#11 - Componente Controlado (Input)' color='#E45F56'>
                <Input></Input>
            </Card>

            <Card titulo='#10 - Comunicação Indireta' color='#8BAD39'>
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo='#09 - Comunicação Direta' color='#59323C'>
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo='#08 - Renderização Condicional' color='#982395'>
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>
            </Card>

            <Card titulo='#07 - Desafio Repetição' color='#3A9AD9'>
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo='#06 - Repetição' color='#FF4C65'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo='#05 - Componente com Filhos' color='#00C8F8'>
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>

            <Card titulo='#04 - Desafio Aleatório' color='#FA6900'>
                <Aleatorio min={1} max={100}/>
            </Card>

            <Card titulo='#02 - Com Parametro' color='#E94C6F'>
                <ComParametro
                    titulo='Situação do Aluno'
                    aluno='Joãozinho'
                    nota={9.4}
                />
            </Card>
            <Card titulo='#01 - Primeiro Componente' color='#E8B71A'>
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
)