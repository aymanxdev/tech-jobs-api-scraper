import React, {useState} from 'react'
import {Card, Badge, Button, Collapse} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export  const Job = ({job}) => {

    const [open, setOpen] = useState(false)
    return (
      <Card className="mb-4" style={{ width: '50rem', borderRadius:'15px'}}>
          <Card.Body>
              <div className="d-flex justify-content-between">
                  <div>
                      <Card.Title>
                          {job.title} <span className="text-muted font-weight-light">{job.company}</span>
                      </Card.Title>
                      <Card.Subtitle className="text-muted mb-2">
                          {new Date(job.created_at).toLocaleDateString()}
                      </Card.Subtitle>
                      <Badge   style={{backgroundColor: '#50d890 ', color:'#ffff'}} className="mr-2">{job.type}</Badge>
                      <Badge style={{backgroundColor: '#4f98ca', color:'#ffff'}}>{job.location}</Badge>
                      <div style={{ wordBreak: 'break-all' }}>
                          <ReactMarkdown source={job.how_to_apply} />
                      </div>
                  </div>
                  <img src={job.company_logo} alt={job.company} className="d-none d-md-block" height="50"/>
              </div>
              <Card.Text>
                  <Button style={{backgroundColor: '#0c9463', border: 'none'}} onClick={() => setOpen(prevOpen => !prevOpen)}>
                        {open ? 'Hide ' : 'Read More'}
                  </Button>
              </Card.Text>
              <Collapse in={open}>
                <div className="mt-4">
                    <ReactMarkdown source={job.description} />
                </div>
              </Collapse>
          </Card.Body>
      </Card>
    )
}

export default Job