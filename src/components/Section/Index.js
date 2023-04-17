import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Card from '../Card/Index';
import { Highlight, Info } from '../Card/styles';
import Title from '../Title/Index';
import { SectionHeading } from '../Title/styles';
import { Sections } from './styles';

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto={`Olá pessoal, sou o ${profile.nome}`} />
      <SectionHeading>
        {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
      </SectionHeading>
      <Info>
        {`${profile.cidade} - ${profile.estado} - ${profile.contato} - `}
        <Highlight>{profile.email}</Highlight>
      </Info>
      <p>{profile.biografia}</p>
      <div id="contacts">
        <Title texto="Contatos" />
        <h2>
          {profile.contato} {profile.email}
        </h2>
      </div>
    </Sections>
    <Sections id="experience">
      <Title texto="Experiência" />
      {profile.experiencia.map((val) => (
        <Card
          key={val.id}
          subTitle={val.cargo}
          subTitleH3={val.empresa}
          date={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>
    <Sections id="skills">
      <Title texto="Habilidades" />
      {profile.habilidades.map((val) => (
        <Card
          key={val.id}
          subTitle={val.habilidade}
          subTitleH3={val.empresa}
          date={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>
    <Sections id="projects">
      <Title texto="Projetos" />
      {profile.projetos.map((val) => (
        <Card
          key={val.id}
          subTitle={val.nomeprojeto}
          subTitleH3={val.linkprojeto}
          date={val.periodo}
          info={val.resumoprojeto}
        />
      ))}
    </Sections>
    <a href="https://www.github.com/BernardoCosmes?tab=repositories">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/bernardo-souza-842841234/">
      <FaLinkedin />
    </a>
  </>
);

export default Section;
