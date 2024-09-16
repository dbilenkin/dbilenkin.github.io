// src/ProjectPage.js
import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { getContrastingTextColor } from './utils/colorUtils';

function ProjectPage({ projects, cardColor }) {
  const { title } = useParams();
  const project = projects.find((proj) => proj.title === title);

  if (!project) {
    return <div>Project not found</div>;
  }

  const {
    description,
    imageUrl,
    link,
    linkText,
    personalSatisfactionScore,
    language,
    effortInDays,
    techStack,
    date,
  } = project;

  const textColor = getContrastingTextColor(cardColor);

  // Styled Components
  const PageContainer = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 20px;
    background-color: ${cardColor};
    color: ${textColor};
    border-radius: 10px;
    margin-bottom: 40px;
  `;

  const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
    object-fit: cover;
  `;

  const ProjectTitle = styled.h1`
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
  `;

  const ProjectDetails = styled.div`
    margin-bottom: 20px;
  `;

  const DetailItem = styled.div`
    font-size: 1em;
    margin: 10px 0;
  `;

  const BackLink = styled(Link)`
    color: ${textColor};
    text-decoration: none;
    font-weight: bold;
    border-bottom: 1px solid ${textColor};
    margin-bottom: 20px;
    display: inline-block;

    &:hover {
      color: #007bff;
      border-bottom-color: #007bff;
    }
  `;

  const ProjectLink = styled.a`
    color: ${textColor};
    text-decoration: none;
    font-weight: bold;
    border-bottom: 1px solid ${textColor};

    &:hover {
      color: #007bff;
      border-bottom-color: #007bff;
    }
  `;

  return (
    <>
      <BackLink to="/">← Back to Projects</BackLink>
      <PageContainer>
        {imageUrl && <ProjectImage src={imageUrl} alt={title} />}
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDetails>
          <DetailItem>
            <strong>Date:</strong> {new Date(date).toLocaleDateString()}
          </DetailItem>
          <DetailItem>
            <strong>Language:</strong> {language}
          </DetailItem>
          <DetailItem>
            <strong>Tech Stack:</strong> {techStack.join(', ')}
          </DetailItem>
          <DetailItem>
            <strong>Effort:</strong> {effortInDays} day(s)
          </DetailItem>
          <DetailItem>
            <strong>Personal Satisfaction Score:</strong> {personalSatisfactionScore}/10
          </DetailItem>
        </ProjectDetails>
        <div>
          <p>{description}</p>
        </div>
        {link ? (
          <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
            {linkText}
          </ProjectLink>
        ) : (
          <ProjectLink as="span" style={{ cursor: 'default', color: 'gray' }}>
            No Link Available
          </ProjectLink>
        )}
      </PageContainer>
    </>
  );
}

export default ProjectPage;
