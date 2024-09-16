// src/Hero.js
import React from 'react';
import styled from 'styled-components';

function Hero({ backgroundColor, textColor, fontFamily }) {
  // Replace these image URLs with your actual images
  const images = [
    'https://via.placeholder.com/800x400?text=Concert+Image',
    'https://via.placeholder.com/800x400?text=Coding+Image',
  ];

  // Styled Components
  const HeroSection = styled.section`
    width: 100%;
    background-color: ${backgroundColor};
    color: ${textColor};
    font-family: ${fontFamily};
    padding: 40px 20px;
    text-align: center;
  `;

  const HeroTitle = styled.h1`
    font-size: 3em;
    margin-bottom: 20px;
  `;

  const HeroSubheading = styled.h2`
    font-size: 1.5em;
    margin-bottom: 30px;
  `;

  const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  `;

  const HeroImage = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 10px;
  `;

  return (
    <HeroSection>
      <HeroTitle>Concerts and Coding</HeroTitle>
      <HeroSubheading>Your subheading goes here.</HeroSubheading>
      <ImageWrapper>
        {images.map((src, index) => (
          <HeroImage key={index} src={src} alt={`Hero ${index + 1}`} />
        ))}
      </ImageWrapper>
    </HeroSection>
  );
}

export default Hero;
