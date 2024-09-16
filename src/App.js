// src/App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import ProjectPage from './ProjectPage';
import ConcertCard from './ConcertCard';
import GlobalStyle from './GlobalStyle';
import { generateColorPalette } from './utils/colorPalette';
import { getContrastingTextColor } from './utils/colorUtils';
import chroma from 'chroma-js';
import projects from './projects.json';
import concerts from './concerts.json';
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  // **Generate a Harmonious Color Palette**

  // Generate a random base hue within a safer range
  let baseHue;
  let attempts = 0;
  let testColor;
  do {
    baseHue = Math.floor(Math.random() * 360);
    testColor = chroma.hsl(baseHue, 0.4, 0.7);
    attempts++;
  } while (
    (chroma(testColor).luminance() < 0.1 || chroma(testColor).luminance() > 0.9) &&
    attempts < 5
  );

  // Generate the color palette
  const palette = generateColorPalette(baseHue);

  // Assign colors from the palette
  const backgroundColor = palette[0]; // Use the first color for the background
  const textColor = getContrastingTextColor(backgroundColor);

  // Generate card color by adjusting the background color
  let cardColor = chroma(backgroundColor).brighten(1).hex();

  // Limit the number of iterations to prevent infinite loops
  for (let i = 0; i < 10 && chroma.contrast(cardColor, backgroundColor) < 2; i++) {
    cardColor = chroma(cardColor).brighten(0.5).hex();
  }

  // Randomly select a font family
  const fonts = [
    'Arial, sans-serif',
    'Verdana, sans-serif',
    'Helvetica, sans-serif',
    'Georgia, serif',
    '"Times New Roman", serif',
    '"Courier New", monospace',
    '"Trebuchet MS", sans-serif',
    '"Lucida Sans", sans-serif',
  ];
  const fontFamily = fonts[Math.floor(Math.random() * fonts.length)];

  // **Styled Components with Procedural Styles**

  const Container = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
    font-family: ${fontFamily};
    padding: 0;
    margin: 0;
  `;

  const MainContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  `;

  const Content = styled.div`
    width: 100%;
    padding: 20px 0;
  `;

  const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    width: 100%;
    margin: 0 auto;
  `;

  // Sort projects and concerts by date in descending order
  const sortedProjects = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedConcerts = [...concerts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <HashRouter>
      <GlobalStyle
        backgroundColor={backgroundColor}
        textColor={textColor}
        fontFamily={fontFamily}
      />
      <Container>
        <Navbar
          backgroundColor={cardColor} // Updated to match card color
          textColor={getContrastingTextColor(cardColor)}
          fontFamily={fontFamily}
        />
        <MainContent>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    fontFamily={fontFamily}
                  />
                  <Content>
                    <h2>Latest Projects</h2>
                    <ProjectsWrapper>
                      {sortedProjects.slice(0, 3).map((project) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          cardColor={cardColor}
                        />
                      ))}
                    </ProjectsWrapper>
                  </Content>
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <Content>
                  <h2>Projects</h2>
                  <ProjectsWrapper>
                    {sortedProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        cardColor={cardColor}
                      />
                    ))}
                  </ProjectsWrapper>
                </Content>
              }
            />
            <Route
              path="/project/:id"
              element={<ProjectPage projects={projects} cardColor={cardColor} />}
            />
            <Route
              path="/concerts"
              element={
                <Content>
                  <h2>Concerts</h2>
                  <ProjectsWrapper>
                    {sortedConcerts.map((concert) => (
                      <ConcertCard
                        key={concert.id}
                        concert={concert}
                        cardColor={cardColor}
                      />
                    ))}
                  </ProjectsWrapper>
                </Content>
              }
            />
            {/* Add more routes for concert details if needed */}
          </Routes>
        </MainContent>
      </Container>
    </HashRouter>
  );
}

export default App;
