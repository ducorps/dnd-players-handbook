import { Button, Flex, IconButton } from "@radix-ui/themes";
import { PersonIcon } from "@radix-ui/react-icons";

export function Header() {
  return (
    <header style={headerStyle}>
      <Flex align="center" justify="end" gap="3">
        <Button size="1">
          <b>coisa</b>
        </Button>
        <Button size="1">
          <b>outra coisa</b>
        </Button>
        <IconButton radius="full" size="2">
          <PersonIcon width="18" height="18" />
        </IconButton>
      </Flex>
    </header>
  );
}

const headerStyle = {
  padding: '12px',
  marginBottom: '16px',
  background: '#212225',
};