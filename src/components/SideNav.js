import Nav from 'react-bootstrap/Nav';

function SideNav() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/News">News</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Social">Social</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Writers">Writers</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default SideNav;