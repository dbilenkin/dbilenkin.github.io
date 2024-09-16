// src/ConcertCard.js
import React from 'react';
import styled from 'styled-components';
import { getContrastingTextColor } from './utils/colorUtils';

function ConcertCard({ concert, cardColor }) {
  const {
    artist,
    openers,
    date,
    venue,
    city,
    attendees,
    comments,
    links,
    imageUrl,
  } = concert;

  const textColor = getContrastingTextColor(cardColor);

  // Truncate comments
  const maxCommentsLength = 100;
  const truncatedComments =
    comments && comments.length > maxCommentsLength
      ? comments.substring(0, maxCommentsLength) + '...'
      : comments;

  // Styled Components
  const Card = styled.div`
    background-color: ${cardColor};
    color: ${textColor};
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: translateY(-5px);
    }
  `;

  const ConcertImage = styled.img`
    width: 100%;
    height: 230px; // Set a fixed height
    border-radius: 10px;
    margin-bottom: 15px;
    object-fit: cover;
    object-position: top; // Crop from the top down
  `;

  const ConcertTitle = styled.h2`
    font-size: 1.5em;
    margin-bottom: 10px;
    text-align: center;
  `;

  const ConcertDetails = styled.div`
    width: 100%;
    margin-bottom: 15px;
  `;

  const DetailItem = styled.div`
    font-size: 0.9em;
    margin: 5px 0;
    text-align: left;
  `;

  const ConcertComments = styled.p`
    font-size: 1em;
    margin-bottom: 15px;
    text-align: left;
    flex-grow: 1; // Allows this section to grow and push links to the bottom
  `;

  const LinksContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: auto; // Pushes the links to the bottom of the card
  `;

  const ConcertLink = styled.a`
    color: ${textColor};
    text-decoration: none;
    font-weight: bold;
    // border-bottom: 1px solid ${textColor};
    flex: 1;
    text-align: center;

    &:hover {
      color: #007bff;
      border-bottom-color: #007bff;
    }
  `;

  const NoLinks = styled.span`
    color: gray;
    cursor: default;
    flex: 1;
    text-align: center;
  `;

  return (
    <Card>
      {imageUrl && <ConcertImage src={imageUrl} alt={artist} />}
      <ConcertTitle>{artist}</ConcertTitle>
      <ConcertDetails>
        <DetailItem>
          <strong>Date:</strong> {new Date(date).toLocaleDateString('en-US', {timeZone: 'UTC'})}
        </DetailItem>
        <DetailItem>
          <strong>Venue:</strong> {venue}
        </DetailItem>
        <DetailItem>
          <strong>City:</strong> {city}
        </DetailItem>
        {openers && openers.length > 0 && (
          <DetailItem>
            <strong>Openers:</strong> {openers.join(', ')}
          </DetailItem>
        )}
        {attendees && attendees.length > 0 && (
          <DetailItem>
            <strong>Attendees:</strong> {attendees.join(', ')}
          </DetailItem>
        )}
      </ConcertDetails>
      {truncatedComments && <ConcertComments>{truncatedComments}</ConcertComments>}
      <LinksContainer>
        {links && links.length > 0 ? (
          <>
            {links[0] && (
              <ConcertLink href={links[0]} target="_blank" rel="noopener noreferrer">
                Setlist Link
              </ConcertLink>
            )}
            {links[1] && (
              <ConcertLink href={links[1]} target="_blank" rel="noopener noreferrer">
                Additional Link
              </ConcertLink>
            )}
          </>
        ) : (
          <NoLinks>No Links Available</NoLinks>
        )}
      </LinksContainer>
    </Card>
  );
}

export default ConcertCard;
