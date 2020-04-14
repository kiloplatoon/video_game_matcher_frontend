import React from 'react';
import { Card, Button } from 'react-bootstrap'

const FinderList = ({ profiles }) => {

  const renderProfilesList = () => {
    let profilesListArr = []
    profiles.map((profile, id) => {
      profilesListArr.push(
        <Card key={id}>
          <Card.Img variant="top" src={profile.profile_picture} />
          <Card.Body>
            <Card.Title>{profile.user.username}</Card.Title>
            <Card.Text>
            {profile.bio}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Platform: {profile.platform}</small>
            <br />
            <small className="text-muted">Game: {profile.game} - </small>
            <small className="text-muted">{profile.casual_competitive}</small>
          </Card.Footer>
          <Button variant="primary">Visit Profile</Button>
        </Card>
      )
    })
    return profilesListArr
  }
  if (profiles.length === 0) {
    return (
      <div><h1>Loading...</h1></div>
    )
  }
  return (
    <div>
      {
        renderProfilesList()
      }
    </div>
  );
};
export default FinderList;