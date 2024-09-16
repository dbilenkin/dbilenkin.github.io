// src/ProjectCard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { getContrastingTextColor } from './utils/colorUtils';
import { Link } from 'react-router-dom';
import {
  FaReact,
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaAngular,
  FaCode,
  FaGithub,
  FaFacebook,
  FaGem, // For Rails
} from 'react-icons/fa';
import {
  SiFirebase,
  SiTailwindcss,
  SiIonic,
  SiHeroku,
  SiJupyter,
  SiSemanticuireact,
  SiJquery,
  SiMaterialdesign,
  SiSelenium,
  SiCodepen,
  SiCplusplus,
  SiMicrosoft,
  SiRuby
} from 'react-icons/si';

function ProjectCard({ project, cardColor }) {
  const {
    id,
    title,
    description,
    imageUrl,
    gifUrl,
    link,
    linkText,
    personalSatisfactionScore,
    language,
    effortInDays,
    techStack,
    date,
  } = project;

  // Calculate text color for contrast
  const textColor = getContrastingTextColor(cardColor);

  // Initialize hover state
  const [isHovered, setIsHovered] = useState(false);

  // **Mapping Tech Stack Items to Icons**
  const techIcons = {
    // Languages
    JavaScript: <FaJs title="JavaScript" />,
    Python: <FaPython title="Python" />,
    Java: <FaJava title="Java" />,
    Ruby: <SiRuby title="Ruby" />,
    'C++': <SiCplusplus title="C++" />,

    // Frontend Frameworks
    React: <FaReact title="React" />,
    AngularJS: <FaAngular title="AngularJS" />,
    'Material-UI': <SiMaterialdesign title="Material-UI" />,
    SemanticUI: <SiSemanticuireact title="Semantic UI" />,
    jQuery: <SiJquery title="jQuery" />,

    // Backend & Servers
    Node: <FaNodeJs title="Node.js" />,
    Firebase: <SiFirebase title="Firebase" />,

    // Styling
    Tailwind: <SiTailwindcss title="Tailwind CSS" />,
    Materialize: <SiMaterialdesign title="Materialize CSS" />,

    // Mobile Frameworks
    Ionic: <SiIonic title="Ionic" />,

    // Platforms & Tools
    Heroku: <SiHeroku title="Heroku" />,
    Jupyter: <SiJupyter title="Jupyter Notebook" />,
    Selenium: <SiSelenium title="Selenium" />,
    OpenLaszlo: <FaCode title="OpenLaszlo" />,
    MFC: <SiMicrosoft title="MFC" />, // Using Microsoft icon for MFC

    // Other
    HTML: <FaHtml5 title="HTML" />,
    CSS: <FaCss3Alt title="CSS" />,
    CodePen: <SiCodepen title="CodePen" />,

    // Default Icon
    Default: <FaCode title="Technology" />,
  };

  // Truncate description
  const maxDescriptionLength = 200; // Adjust as needed
  const truncatedDescription =
    description && description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + '...'
      : description;

  // **Styled Components**
  const Card = styled.div`
    background-color: ${cardColor};
    color: ${textColor};
    border-radius: 10px;
    padding: 20px;
    width: 100%; // Ensure the card fills the grid cell
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: translateY(-5px);
    }
  `;


  const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
    object-fit: cover;
  `;

  const ProjectTitle = styled.h2`
    font-size: 1.5em;
    margin-bottom: 10px;
    text-align: center;
  `;

  const ProjectDescription = styled.p`
    font-size: 1em;
    margin-bottom: 15px;
    flex-grow: 1;
    text-align: left;
  `;

  const ProjectDetails = styled.div`
    width: 100%;
    margin-bottom: 15px;
  `;

  const DetailItem = styled.div`
    font-size: 0.9em;
    margin: 5px 0;
    text-align: left;
    display: flex;
    align-items: center;
  `;

  const IconWrapper = styled.span`
    margin-right: 8px;
    display: flex;
    align-items: center;
    font-size: 1.2em;
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

  const ProjectTitleLink = styled(Link)`
    color: ${textColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `;

  // Clean the tech stack to handle combined items
  const cleanTechStack = techStack.flatMap((tech) =>
    tech.split(',').map((t) => t.trim())
  );

  return (
    <Card>
      {imageUrl && (
        <ProjectImage
          src={isHovered && gifUrl ? gifUrl : imageUrl}
          alt={title}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )}
      {/* Optional: Preload the GIF */}
      {gifUrl && <img src={gifUrl} alt="" style={{ display: 'none' }} />}
      <ProjectTitle>
        <ProjectTitleLink to={`/project/${id}`}>{title}</ProjectTitleLink>
      </ProjectTitle>
      <ProjectDetails>
        <DetailItem>
          <strong>Date:</strong>&nbsp;{new Date(date).toLocaleDateString()}
        </DetailItem>
        <DetailItem>
          <strong>Language:</strong>&nbsp;
          <IconWrapper>
            {techIcons[language] || techIcons['Default']}
          </IconWrapper>
          {language}
        </DetailItem>
        {/* You can choose to hide some details if the card is too crowded */}
      </ProjectDetails>
      <ProjectDescription>{truncatedDescription}</ProjectDescription>
      {link ? (
        <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </ProjectLink>
      ) : (
        <ProjectLink as="span" style={{ cursor: 'default', color: 'gray' }}>
          No Link Available
        </ProjectLink>
      )}
    </Card>
  );
}

export default ProjectCard;
