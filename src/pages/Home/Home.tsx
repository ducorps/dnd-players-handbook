import { PersonIcon } from "@radix-ui/react-icons";
import { Card, Heading } from "@radix-ui/themes";

export function Home() {
  return (
    <>
      <div style={titleStyle}>
        <Heading mb="2" size="4">LOGO</Heading>
        <Heading mb="2" size="4">TITLE</Heading>
      </div>
      <Card size="2" style={loginStyle}>
        <PersonIcon width="50" height="50" />
        <Heading mb="2" size="4">Login</Heading>
      </Card>
    </>
  );
}

const titleStyle = {
  marginTop: '54px',
  textAlign: 'center' as const,
}

const loginStyle = {
  background: '#212225',
  width: '25%',
  margin: 'auto',
  textAlign: 'center' as const,
}