import { Container, Paper, Input, Button, Divider, Title } from "@mantine/core";
import { QueryClientProvider, queryClient } from "./rtqClient";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container size="xs" mt={30}>
        <Paper shadow="xs">
          <Title align="center" order={2}>
            Deezer search Hub
          </Title>
          <Divider />
          <Input placeholder="Enter track name" size="lg" />
          <Button fullWidth size="lg" style={{ marginTop: "1rem" }}>
            Search
          </Button>
        </Paper>
      </Container>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
