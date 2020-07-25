import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ReactMarkdown from 'react-markdown';

const Job = ({ job }) => {
  const [open, setOpen] = useState(false);
  const { title, company, created_at, type, location, how_to_apply, company_logo, description } = job;
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex  justify-content-between">
          <div>
            <Card.Title>
              {title} - <span className="text-muted font-weight-light">{company}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">{new Date(created_at).toLocaleDateString()}</Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              {type}
            </Badge>
            <Badge variant="info">{location}</Badge>
            <div style={{ wordBreak: 'break-all' }} className="mt-2">
              <ReactMarkdown source={how_to_apply} />
            </div>
          </div>
          <img className="d-none d-md-block" height="50" alt={company} src={company_logo} />
        </div>
        <Card.Text>
          <Button onClick={() => setOpen((prevOpen) => !prevOpen)} variant="primary">
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default Job;
