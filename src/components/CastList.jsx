import React from 'react';
import Cast from './Cast';
import {Link} from 'react-router';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export default function CastList({data}) {
  const StyledLink = styled(Link)`
  // Changing the padding did not affect the styling much!
  display:inline-block;
  margin:20px;
  padding:40px;
    &:hover {
      text-decoration:none;
    }
  `;
    let casts = data.map(function(cast) {
      if(cast.profile_path != null) {
        return(
          <Col xs={4} sm={3} md={2} lg={4} key={cast.id} >
            <StyledLink to={'/star/'+cast.id} ><Cast cast={cast} /></StyledLink>
          </Col>
        );
      }

      return null;
    });

    return(
      <div>
        <h3>Casts</h3>
        {/* Trying to make the actors show in one line without overlapping */}
        <Row>
        {casts}
        </Row>
      </div>
    );
}
