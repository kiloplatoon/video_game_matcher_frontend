import React, {useEffect, useState} from 'react'
import { Form, Button, Card} from 'react-bootstrap';
import UserAPI from '../../api/UserAPI';
import './Post.css';

function Post(props) {
  
  const [posts, setPosts] = useState([])

  console.log(posts)
  useEffect(()=> {
    fetchAllPosts()
  },[])

  const fetchAllPosts = async () => {
    let data = await UserAPI.fetchUserStatus((props.userId))
    setPosts(data)
  }

  const RenderPost = () => {
    return (
      posts.map((post, index) => {
        return(
          <Card key={index} style={{marginTop: '3%'}} className='PostCard'>
            <Card.Body>
              <Card.Text className='postText'>
                {post['status']}
              </Card.Text>

            </Card.Body>
              <small>
                <Card.Footer className="text-muted footer" >
                  <p>{post['created_at']}</p>
                  {
                    props.isLoggedInUser
                    ?
                    <Button size="sm" variant="outline-danger" 
                    onClick={
                      () => {
                        UserAPI.deletePost(post['id'])
                      }
                    }>
                      Delete </Button>
                    :
                    null
                  }
                </Card.Footer>
              </small>
          </Card>
        )
      })
    )
  }

  const handlePost = async (e) => {
    e.preventDefault()
    let status = e.target.post.value
    await UserAPI.createUserPost(props.userId, {'status' : status})
  }

  return (
    <div>
      {
        props.isLoggedInUser
        ?
        <>
        <Form onSubmit = {handlePost}>
          <Form.Group controlId="exampleForm.ControlTextarea1 ">
            <Form.Label><h3><b>What are you up to?</b></h3></Form.Label>
            <Form.Control name = 'post' as="textarea" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Post
        </Button>
        </Form>
        </>
        :
        null
      }
      
      <br />
      <div className = 'posts'>
        <h3>Posts</h3>
        <hr className='divider' />
        <RenderPost />
      </div>
    </div>
  )
}

export default Post
